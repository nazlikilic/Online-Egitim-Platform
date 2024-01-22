import { S3 } from 'aws-sdk';
import { Video } from '../models/video';
import { generateShortID } from '../services/generate';

const s3 = new S3();

export const uploadVideo_AWS_S3 = async (videoId: string, file: Buffer) => {
    const fileType = 'video/mp4';
    const fileNameCoded = generateShortID();
    const stream = file;

    const s3Params = {
        Bucket: process.env.VIDEO_BUCKET!,
        Key: fileNameCoded,
        ContentType: fileType,
        Body: stream,
        ACL: 'public-read',
    };

    try {
        const data = await s3.upload(s3Params).promise();
        const url = `https://${process.env.VIDEO_BUCKET}.s3.amazonaws.com/${fileNameCoded}`;


        await Video.findOneAndUpdate(
            { _id: videoId },
            { S3_url: url }
        );
        return url

    } catch (err) {
        console.log(err);
        throw err;
    }
};

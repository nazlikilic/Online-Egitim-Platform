import { model, Schema, Document, Types } from "mongoose";
import { IVideo } from "../types/video";

const videoSchema: Schema<IVideo & Document> = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: false},
    url: { type: String, required: true },
    views: { type: Number, default: 0 },
    S3_url: { type: String }
});

const Video = model<IVideo & Document>('Video', videoSchema);

export { Video };
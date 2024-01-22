import { Document } from 'mongoose';

export interface IVideo extends Document{
    title: string;
    description: string;
    url: string;
    views: number;
    S3_url: string;
}
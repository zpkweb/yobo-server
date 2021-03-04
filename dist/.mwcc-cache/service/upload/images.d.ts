import { Context } from "egg";
export declare class UploadImagesService {
    ctx: Context;
    host: any;
    uploadImages(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}

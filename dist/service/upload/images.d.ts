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
    getUploadImages(dir: any, path: any): Promise<{
        path: any;
        children: any[];
        images: any[];
        dir: any;
    }>;
    readFileList(dir: any, path: any, filesList: any): void;
    dateFormat(fmt: any, date: any): any;
    uploadImagesDelete(path: any): Promise<{
        success: boolean;
        code: number;
    }>;
}

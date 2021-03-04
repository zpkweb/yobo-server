import { UploadImagesService } from "./images";
export declare class UploadService {
    uploadImagesService: UploadImagesService;
    images(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}

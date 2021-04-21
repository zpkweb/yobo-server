import { UploadService } from "../../service/upload/index";
export declare class UploadController {
    uploadService: UploadService;
    uploadImages(uploadBody: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    getUploadImages(): Promise<{
        path: any;
        children: any[];
        images: any[];
        dir: any;
    }>;
    uploadImagesDelete(bodyAll: any): Promise<{
        success: boolean;
        code: number;
    }>;
}

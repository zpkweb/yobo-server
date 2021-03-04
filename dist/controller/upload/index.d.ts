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
}

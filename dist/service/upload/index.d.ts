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
    getImages(dir: any, path: any): Promise<{
        path: any;
        children: any[];
        images: any[];
        dir: any;
    }>;
    imagesDelete(path: any): Promise<{
        success: boolean;
        code: number;
    }>;
}

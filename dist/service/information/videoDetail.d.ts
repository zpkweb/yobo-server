import { BaseInformationVideoDetailService } from "../base/information/videoDetail";
export declare class InformationVideoDetailService {
    baseInformationVideoDetailService: BaseInformationVideoDetailService;
    baseCreate(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieve(payload: any): Promise<{
        data: import("../../entity/information/videoDetail").InformationVideoDetailEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    baseUpdate(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delete(id: any): Promise<{
        success: boolean;
        code: number;
    }>;
}

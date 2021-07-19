import { BaseInformationVideoService } from "../base/information/video";
import { InformationVideoDetailService } from "./videoDetail";
export declare class InformationVideoService {
    baseInformationVideoService: BaseInformationVideoService;
    informationVideoDetailService: InformationVideoDetailService;
    create(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        data: import("../../entity/information/video").InformationVideoEntity;
        success: boolean;
        code: number;
    }>;
    baseCreate(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    }>;
    retrieve(payload: any): Promise<{
        data: {
            list: any;
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveName(payload: any): Promise<{
        data: import("../../entity/information/video").InformationVideoEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveVideoId(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    baseSearch(payload: any): Promise<{
        data: {
            list: any;
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    topVideo(): Promise<{
        data: import("../../entity/information/video").InformationVideoEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    newVideo(): Promise<{
        data: import("../../entity/information/video").InformationVideoEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    update(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    baseUpdate(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    }>;
    watchs(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    baseDelete(videoId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    relationSet(payload: any): Promise<void>;
    relationAdd(payload: any): Promise<void>;
}

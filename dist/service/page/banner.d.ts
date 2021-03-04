import { BasePageBannerServer } from "../base/page/banner";
export declare class PageBannerServer {
    basePageBannerServer: BasePageBannerServer;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasId(bannerId: any): Promise<{
        data: import("../../entity/page/banner").PageBannerEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    get(bannerId: any): Promise<{
        data: import("../../entity/page/banner").PageBannerEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    getAll(): Promise<{
        data: import("../../entity/page/banner").PageBannerEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    update(payload: any): Promise<{
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    delete(bannerId: any): Promise<{
        data: import("typeorm").DeleteResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}

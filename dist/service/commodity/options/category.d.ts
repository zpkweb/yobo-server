import { BaseCommodityOptionsCategoryServer } from "../../base/commodity/options/category";
export declare class CommodityOptionsCategoryService {
    baseCommodityOptionsCategoryServer: BaseCommodityOptionsCategoryServer;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieve(payload: any): Promise<{
        data: import("../../../entity/commodity/options/category").CommodityOptionsCategoryEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveId(payload: any): Promise<{
        data: import("../../../entity/commodity/options/category").CommodityOptionsCategoryEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveAll({ isLocale, locale }?: {
        isLocale?: boolean;
        locale?: string;
    }): Promise<{
        data: import("../../../entity/commodity/options/category").CommodityOptionsCategoryEntity[];
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
    delete(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    filter(type: any, payload: any): any;
}

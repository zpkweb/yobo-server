import { BaseCommodityOptionsMaterialService } from "../../base/commodity/options/material";
export declare class CommodityOptionsMaterialService {
    baseCommodityOptionsMaterialService: BaseCommodityOptionsMaterialService;
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
        data: import("../../../entity/commodity/options/material").CommodityOptionsMaterialEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveId(id: any): Promise<{
        data: import("../../../entity/commodity/options/material").CommodityOptionsMaterialEntity;
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
        data: import("../../../entity/commodity/options/material").CommodityOptionsMaterialEntity[];
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
    delete(id: any): Promise<{
        success: boolean;
        code: number;
    }>;
    filter(type: any, payload: any): any;
}

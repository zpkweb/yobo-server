import { BaseCommodityOptionsRuiwuService } from "../../base/commodity/options/ruiwu";
export declare class CommodityOptionsRuiwuService {
    baseCommodityOptionsRuiwuService: BaseCommodityOptionsRuiwuService;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieve(id: any): Promise<{
        data: import("../../../entity/commodity/options/ruiwu").CommodityOptionsRuiwuEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveId(payload: any): Promise<{
        data: import("../../../entity/commodity/options/ruiwu").CommodityOptionsRuiwuEntity;
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
        data: import("../../../entity/commodity/options/ruiwu").CommodityOptionsRuiwuEntity[];
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

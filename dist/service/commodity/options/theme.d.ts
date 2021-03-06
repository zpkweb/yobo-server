import { BaseCommodityOptionsThemeService } from "../../base/commodity/options/theme";
export declare class CommodityOptionsThemeService {
    baseCommodityOptionsThemeService: BaseCommodityOptionsThemeService;
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
        data: import("../../../entity/commodity/options/theme").CommodityOptionsThemeEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveId(id: any): Promise<{
        data: import("../../../entity/commodity/options/theme").CommodityOptionsThemeEntity;
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
        data: import("../../../entity/commodity/options/theme").CommodityOptionsThemeEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveSize({ isLocale, locale, currentPage, pageSize }?: {
        isLocale?: boolean;
        locale?: string;
        currentPage?: number;
        pageSize?: number;
    }): Promise<{
        data: import("../../../entity/commodity/options/theme").CommodityOptionsThemeEntity[];
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

import { BaseCommodityColorServer } from "../../base/commodity/attribute/color";
export declare class CommodityAttributeColor {
    baseCommodityColorServer: BaseCommodityColorServer;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        id: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
        id?: undefined;
    }>;
    hasId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/attribute/color").CommodityColorEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    getCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/attribute/color").CommodityColorEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/attribute/color").CommodityColorEntity[];
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
    search(payload: any): Promise<{
        data: import("../../../entity/commodity/attribute/color").CommodityColorEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    updateColor(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        id: any;
        success: boolean;
        code: number;
    } | {
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}

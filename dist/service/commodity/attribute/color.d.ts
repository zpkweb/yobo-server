import { BaseCommodityColorServer } from "../../base/commodity/attribute/color";
export declare class CommodityAttributeColor {
    baseCommodityColorServer: BaseCommodityColorServer;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
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
}

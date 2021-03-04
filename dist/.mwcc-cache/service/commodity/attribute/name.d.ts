import { BaseCommodityNameServer } from "../../base/commodity/attribute/name";
export declare class CommodityAttributeName {
    baseCommodityNameServer: BaseCommodityNameServer;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasName(payload: any): Promise<{
        data: import("../../../entity/commodity/attribute/name").CommodityNameEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/attribute/name").CommodityNameEntity;
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
    updateName(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    }>;
}

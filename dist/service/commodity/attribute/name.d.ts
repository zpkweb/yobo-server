import { BaseCommodityNameServer } from "../../base/commodity/attribute/name";
export declare class CommodityAttributeName {
    baseCommodityNameServer: BaseCommodityNameServer;
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
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/attribute/name").CommodityNameEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    search(payload: any): Promise<{
        data: import("../../../entity/commodity/attribute/name").CommodityNameEntity[];
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
    updateName(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
}

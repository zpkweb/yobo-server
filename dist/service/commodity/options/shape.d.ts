import { BaseCommodityOptionsShapeServer } from "../../base/commodity/options/shape";
export declare class CommodityOptionsShapeService {
    baseCommodityOptionsShapeServer: BaseCommodityOptionsShapeServer;
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
        data: import("../../../entity/commodity/options/shape").CommodityOptionsShapeEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveId(payload: any): Promise<{
        data: import("../../../entity/commodity/options/shape").CommodityOptionsShapeEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveAll(payload: any): Promise<{
        data: import("../../../entity/commodity/options/shape").CommodityOptionsShapeEntity[];
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

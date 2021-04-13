import { BaseCommodityRuiwuServer } from "../../base/commodity/commodity-options/ruiwu";
export declare class CommodityRuiwuService {
    baseCommodityRuiwuServer: BaseCommodityRuiwuServer;
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
        data: import("../../../entity/commodity/commodity-options/ruiwu").CommodityRuiwuEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    relation(payload: any): Promise<void>;
}

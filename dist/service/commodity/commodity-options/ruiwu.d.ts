import { BaseCommodityRuiwuService } from "../../base/commodity/commodity-options/ruiwu";
import { CommodityOptionsRuiwuService } from "../options/ruiwu";
export declare class CommodityRuiwuService {
    baseCommodityRuiwuService: BaseCommodityRuiwuService;
    commodityOptionsRuiwuService: CommodityOptionsRuiwuService;
    search(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/ruiwu").CommodityRuiwuEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
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
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/ruiwu").CommodityRuiwuEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveID(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/ruiwu").CommodityRuiwuEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    relation(payload: any): Promise<void>;
    relationCreate(payload: any): Promise<void>;
    relationUpdate(payload: any): Promise<void>;
}

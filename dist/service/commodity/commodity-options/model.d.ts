import { BaseCommodityModelService } from "../../base/commodity/commodity-options/model";
import { CommodityOptionsModelService } from "../options/model";
export declare class CommodityModelService {
    baseCommodityModelService: BaseCommodityModelService;
    commodityOptionsModelService: CommodityOptionsModelService;
    search(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/model").CommodityModelEntity[];
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
        data: import("../../../entity/commodity/commodity-options/model").CommodityModelEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/model").CommodityModelEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveID(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/model").CommodityModelEntity;
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

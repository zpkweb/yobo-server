import { BaseCommoditySpecificationService } from "../../base/commodity/commodity-options/specification";
import { CommodityOptionsSpecificationService } from "../options/specification";
export declare class CommoditySpecificationService {
    baseCommoditySpecificationService: BaseCommoditySpecificationService;
    commodityOptionsSpecificationService: CommodityOptionsSpecificationService;
    search(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/specification").CommoditySpecificationEntity[];
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
        data: import("../../../entity/commodity/commodity-options/specification").CommoditySpecificationEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/specification").CommoditySpecificationEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveID(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/specification").CommoditySpecificationEntity;
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

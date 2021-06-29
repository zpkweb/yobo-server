import { BaseCommodityMaterialService } from "../../base/commodity/commodity-options/material";
import { CommodityOptionsMaterialService } from "../options/material";
export declare class CommodityMaterialService {
    baseCommodityMaterialService: BaseCommodityMaterialService;
    commodityOptionsMaterialService: CommodityOptionsMaterialService;
    search(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/material").CommodityMaterialEntity[];
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
        data: import("../../../entity/commodity/commodity-options/material").CommodityMaterialEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/material").CommodityMaterialEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveID(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/material").CommodityMaterialEntity;
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

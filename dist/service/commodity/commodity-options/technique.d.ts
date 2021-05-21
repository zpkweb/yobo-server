import { BaseCommodityTechniqueServer } from "../../base/commodity/commodity-options/technique";
import { CommodityOptionsTechniqueService } from "../options/technique";
export declare class CommodityTechniqueService {
    baseCommodityTechniqueServer: BaseCommodityTechniqueServer;
    commodityOptionsTechniqueService: CommodityOptionsTechniqueService;
    search(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/technique").CommodityTechniqueEntity[];
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
        data: import("../../../entity/commodity/commodity-options/technique").CommodityTechniqueEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/technique").CommodityTechniqueEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveID(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/technique").CommodityTechniqueEntity;
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

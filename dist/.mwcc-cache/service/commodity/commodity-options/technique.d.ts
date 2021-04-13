import { BaseCommodityTechniqueServer } from "../../base/commodity/commodity-options/technique";
export declare class CommodityTechniqueService {
    baseCommodityTechniqueServer: BaseCommodityTechniqueServer;
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
    relation(payload: any): Promise<void>;
}

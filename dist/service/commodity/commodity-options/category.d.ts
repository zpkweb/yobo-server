import { BaseCommodityCategoryServer } from "../../base/commodity/commodity-options/category";
export declare class CommodityCategoryService {
    baseCommodityCategoryServer: BaseCommodityCategoryServer;
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
        data: import("../../../entity/commodity/commodity-options/category").CommodityCategoryEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    relation(payload: any): Promise<void>;
}

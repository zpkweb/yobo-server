import { BaseCommodityCategoryService } from "../../base/commodity/commodity-options/category";
import { CommodityOptionsCategoryService } from "../options/category";
export declare class CommodityCategoryService {
    baseCommodityCategoryService: BaseCommodityCategoryService;
    commodityOptionsCategoryService: CommodityOptionsCategoryService;
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
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/category").CommodityCategoryEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveID(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/category").CommodityCategoryEntity;
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
    search(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/category").CommodityCategoryEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}

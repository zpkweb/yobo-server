import { BaseCommodityClassificationServer } from "../../base/commodity/commodity-options/classification";
import { CommodityOptionsClassificationService } from "../options/classification";
export declare class CommodityClassificationService {
    baseCommodityClassificationServer: BaseCommodityClassificationServer;
    commodityOptionsClassificationService: CommodityOptionsClassificationService;
    search(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/classification").CommodityClassificationEntity[];
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
        data: import("../../../entity/commodity/commodity-options/classification").CommodityClassificationEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/classification").CommodityClassificationEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveID(payload: any): Promise<{
        data: import("../../../entity/commodity/commodity-options/classification").CommodityClassificationEntity;
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

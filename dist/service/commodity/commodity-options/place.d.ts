import { BaseCommodityPlaceServer } from "../../base/commodity/commodity-options/place";
export declare class CommodityPlaceService {
    baseCommodityPlaceServer: BaseCommodityPlaceServer;
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
        data: import("../../../entity/commodity/commodity-options/place").CommodityPlaceEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    relation(payload: any): Promise<void>;
}

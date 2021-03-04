import { BaseBrowsingHistoryServer } from "../base/my/browsingHistory";
import { BaseCommodityBrowsingCountServer } from "../base/commodity/commodityBrowsingCount";
export declare class MyBrowsingHistoryService {
    baseBrowsingHistoryServer: BaseBrowsingHistoryServer;
    baseCommodityBrowsingCountServer: BaseCommodityBrowsingCountServer;
    addBrowsingHistory(payload: any): Promise<any>;
    createBrowsingHistory(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasBrowsingHistory(payload: any): Promise<{
        data: import("../../entity/my/browsingHistory").MyBrowsingHistoryEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    updateBrowsingHistoryCount(payload: any): Promise<{
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveBrowsingHistory(payload: any): Promise<{
        data: {
            list: import("../../entity/my/browsingHistory").MyBrowsingHistoryEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    filter(type: any, payload: any): any;
    relationUser(payload: any): Promise<void>;
    relationCommodity(payload: any): Promise<void>;
    createBrowsingCount(): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveBrowsingCount(commodityId: any): Promise<{
        data: import("../../entity/commodity/commodityBrowsingCount").CommodityBrowsingCountEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    updateBrowsingCount(payload: any): Promise<{
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    relationBrowsingCountCommodity(payload: any): Promise<void>;
}

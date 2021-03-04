import { MyLikeSellerService } from "./likeSeller";
import { MyLikeCommodityService } from "./likeCommodity";
import { MyBrowsingHistoryService } from "./browsingHistory";
export declare class MyService {
    myLikeSellerService: MyLikeSellerService;
    myLikeCommodityService: MyLikeCommodityService;
    myBrowsingHistoryService: MyBrowsingHistoryService;
    setSeller(payload: any): Promise<{
        data: import("../../entity/user/user").UserEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/user/seller/seller").UserSellerEntity;
        success: boolean;
        code: number;
    } | {
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        data: import("../../entity/my/likeSeller").MyLikeSellerEntity[];
        success: boolean;
        code: number;
    }>;
    delSeller(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delSellerAll(userId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    getSeller(userId: any): Promise<{
        data: import("../../entity/my/likeSeller").MyLikeSellerEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasSeller(payload: any): Promise<{
        data: import("../../entity/my/likeSeller").MyLikeSellerEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    setCommodity(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/user/user").UserEntity;
        success: boolean;
        code: number;
    } | {
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    }>;
    delCommodity(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delCommodityAll(userId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    getCommodity(payload: any): Promise<{
        data: import("../../entity/my/likeCommodity").MyLikeCommodityEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodity(payload: any): Promise<{
        data: import("../../entity/my/likeCommodity").MyLikeCommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    addBrowsingHistory(payload: any): Promise<any>;
    findBrowsingHistory(userId: any): Promise<{
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
    findOrder(): Promise<void>;
    findShoppingCart(): Promise<void>;
}

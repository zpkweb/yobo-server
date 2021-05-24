import { BaseMyLikeSellerServer } from "../base/my/likeSeller";
import { UserService } from "../user/user";
import { SellerService } from "../user/seller";
import { CommodityCommodityService } from "../commodity/commodity";
export declare class MyLikeSellerService {
    baseMyLikeSellerServer: BaseMyLikeSellerServer;
    userService: UserService;
    sellerService: SellerService;
    commodityCommodityService: CommodityCommodityService;
    addMyLikeSeller(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    myLikeSeller(userId: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasMyLikeSeller(payload: any): Promise<{
        data: import("../../entity/my/likeSeller").MyLikeSellerEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveFollow(sellerId: any): Promise<{
        data: number;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    createLikeSeller(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    relationUser(payload: any): Promise<void>;
    relationSeller(payload: any): Promise<void>;
    delMyLikeSeller(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delLikeSeller(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delLikeSellerAll(userId: any): Promise<{
        success: boolean;
        code: number;
    }>;
}

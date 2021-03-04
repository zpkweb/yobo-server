import { BaseMyLikeSellerServer } from "../base/my/likeSeller";
import { UserService } from "../user/user";
import { SellerService } from "../user/seller";
export declare class MyLikeSellerService {
    baseMyLikeSellerServer: BaseMyLikeSellerServer;
    userService: UserService;
    sellerService: SellerService;
    addMyLikeSeller(payload: any): Promise<{
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
    myLikeSeller(userId: any): Promise<{
        data: import("../../entity/my/likeSeller").MyLikeSellerEntity[];
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

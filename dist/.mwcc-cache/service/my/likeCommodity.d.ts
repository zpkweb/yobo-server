import { BaseMyLikeCommodityServer } from "../base/my/likeCommodity";
import { UserService } from "../user/user";
import { CommodityCommodityService } from "../commodity/commodity";
export declare class MyLikeCommodityService {
    baseMyLikeCommodityServer: BaseMyLikeCommodityServer;
    userService: UserService;
    commodityCommodityService: CommodityCommodityService;
    addMyLikeCommodity(payload: any): Promise<{
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
    myLikeCommodity(payload: any): Promise<{
        data: import("../../entity/my/likeCommodity").MyLikeCommodityEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    filter(type: any, payload: any): any;
    hasMyLikeCommodity(payload: any): Promise<{
        data: import("../../entity/my/likeCommodity").MyLikeCommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    createLikeCommodity(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    relationUser(payload: any): Promise<void>;
    relationCommodity(payload: any): Promise<void>;
    delMyLikeCommodity(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delLikeCommodity(payload: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delLikeCommodityAll(userId: any): Promise<{
        success: boolean;
        code: number;
    }>;
}

import { MyService } from "../../../service/my/index";
export declare class MyController {
    myService: MyService;
    pagination: any;
    setSeller(sellerBody: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    getSeller(userId: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasSeller(sellerQuery: any): Promise<{
        data: import("../../../entity/my/likeSeller").MyLikeSellerEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    delSeller(sellerBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delSellerAll(userId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    setCommodity(commodityBody: any): Promise<{
        data: import("../../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../../entity/user/user").UserEntity;
        success: boolean;
        code: number;
    } | {
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    }>;
    getCommodity(query: any): Promise<{
        data: import("../../../entity/my/likeCommodity").MyLikeCommodityEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodity(commodityQuery: any): Promise<{
        data: import("../../../entity/my/likeCommodity").MyLikeCommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    delCommodity(commodityBody: any): Promise<{
        success: boolean;
        code: number;
    }>;
    delCommodityAll(userId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    addBrowsingHistory(browsingHistoryBody: any): Promise<any>;
    findBrowsingHistory(findQuery: any): Promise<any>;
    findOrder(): Promise<void>;
    findShoppingCart(): Promise<void>;
}

import { CommodityService } from "../../../service/commodity/index";
import { Context } from 'egg';
import { BFFService } from "../../../service/BFF/index";
export declare class BFFController {
    commodityService: CommodityService;
    bffService: BFFService;
    ctx: Context;
    home(query: any): Promise<any>;
    buy(query: any): Promise<{
        data: import("../../../entity/user/seller/seller").UserSellerEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        data: {
            list: import("../../../entity/commodity/commodity").CommodityEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        data: {
            list: import("../../../entity/my/browsingHistory").MyBrowsingHistoryEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data: {
            commodity: import("../../../entity/commodity/commodity").CommodityEntity;
            commoditySimilar: import("../../../entity/commodity/commodity").CommodityEntity[];
            seller: any;
            browsingHistory: any;
        };
    }>;
    artworkOptions(locale: any): Promise<{
        data: import("../../../entity/commodity/options/category").CommodityOptionsCategoryEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        success: boolean;
        code: number;
        data: {
            shape: import("../../../entity/commodity/options/shape").CommodityOptionsShapeEntity[];
            theme: import("../../../entity/commodity/options/theme").CommodityOptionsThemeEntity[];
            category: import("../../../entity/commodity/options/category").CommodityOptionsCategoryEntity[];
            technique: import("../../../entity/commodity/options/technique").CommodityOptionsTechniqueEntity[];
        };
    }>;
}

import { CommodityService } from "../../../service/commodity/index";
import { Context } from 'egg';
import { BFFService } from "../../../service/BFF/index";
export declare class BFFController {
    commodityService: CommodityService;
    bffService: BFFService;
    ctx: Context;
    home(query: any): Promise<{
        data: {
            list: import("../../../entity/commodity/commodity").CommodityEntity[];
            total: number;
        };
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
            id: number;
            src: string;
            star: number;
            title: string;
            desc: string;
        }[];
    } | {
        data: import("../../../entity/page/banner").PageBannerEntity[];
        success: boolean;
        code: number;
    } | {
        data: {
            list: import("../../../entity/user/seller/seller").UserSellerEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        data: import("../../../entity/commodity/options/theme").CommodityOptionsThemeEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data: {
            banner: import("../../../entity/page/banner").PageBannerEntity[];
            gallerySeller: import("../../../entity/user/seller/seller").UserSellerEntity[];
            latestCommodity: import("../../../entity/commodity/commodity").CommodityEntity[];
            lookWorld: import("../../../entity/commodity/options/theme").CommodityOptionsThemeEntity[];
            commentCommodity: {
                id: number;
                src: string;
                star: number;
                title: string;
                desc: string;
            }[];
            hotSaleSeller: import("../../../entity/user/seller/seller").UserSellerEntity[];
        };
    }>;
    buy(query: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
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
        data: import("../../../entity/commodity/options/classification").CommodityOptionsClassificationEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data: {
            category: import("../../../entity/commodity/options/category").CommodityOptionsCategoryEntity[];
            classification: import("../../../entity/commodity/options/classification").CommodityOptionsClassificationEntity[];
            material: import("../../../entity/commodity/options/material").CommodityOptionsMaterialEntity[];
            model: import("../../../entity/commodity/options/model").CommodityOptionsModelEntity[];
            place: import("../../../entity/commodity/options/place").CommodityOptionsPlaceEntity[];
            ruiwu: import("../../../entity/commodity/options/ruiwu").CommodityOptionsRuiwuEntity[];
            shape: import("../../../entity/commodity/options/shape").CommodityOptionsShapeEntity[];
            specification: import("../../../entity/commodity/options/specification").CommodityOptionsSpecificationEntity[];
            style: import("../../../entity/commodity/options/style").CommodityOptionsStyleEntity[];
            technique: import("../../../entity/commodity/options/technique").CommodityOptionsTechniqueEntity[];
            theme: import("../../../entity/commodity/options/theme").CommodityOptionsThemeEntity[];
            type: import("../../../entity/commodity/options/type").CommodityOptionsTypeEntity[];
            use: import("../../../entity/commodity/options/use").CommodityOptionsUseEntity[];
        };
    }>;
}

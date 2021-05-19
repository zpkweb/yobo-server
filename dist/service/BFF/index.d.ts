import { BannerService } from "./banner";
import { SellerService } from "../user/seller";
import { CommodityService } from "../commodity/index";
import { MyService } from "../my/index";
import { ArtworkOptionsService } from "./artworkOptions";
import { CommodityOptionsThemeService } from "../commodity/options/theme";
export declare class BFFService {
    bannerService: BannerService;
    artworkOptionsService: ArtworkOptionsService;
    sellerService: SellerService;
    commodityService: CommodityService;
    myService: MyService;
    commodityOptionsThemeService: CommodityOptionsThemeService;
    host: any;
    home(payload: any): Promise<{
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: any;
        success: boolean;
        code: number;
    }>;
    clientCommodity(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    artworkOptions(payload: any): Promise<{
        data: import("../../entity/commodity/options/category").CommodityOptionsCategoryEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: import("../../entity/commodity/options/classification").CommodityOptionsClassificationEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data: {
            category: import("../../entity/commodity/options/category").CommodityOptionsCategoryEntity[];
            classification: import("../../entity/commodity/options/classification").CommodityOptionsClassificationEntity[];
            material: import("../../entity/commodity/options/material").CommodityOptionsMaterialEntity[];
            model: import("../../entity/commodity/options/model").CommodityOptionsModelEntity[];
            place: import("../../entity/commodity/options/place").CommodityOptionsPlaceEntity[];
            ruiwu: import("../../entity/commodity/options/ruiwu").CommodityOptionsRuiwuEntity[];
            shape: import("../../entity/commodity/options/shape").CommodityOptionsShapeEntity[];
            specification: import("../../entity/commodity/options/specification").CommodityOptionsSpecificationEntity[];
            style: import("../../entity/commodity/options/style").CommodityOptionsStyleEntity[];
            technique: import("../../entity/commodity/options/technique").CommodityOptionsTechniqueEntity[];
            theme: import("../../entity/commodity/options/theme").CommodityOptionsThemeEntity[];
            type: import("../../entity/commodity/options/type").CommodityOptionsTypeEntity[];
            use: import("../../entity/commodity/options/use").CommodityOptionsUseEntity[];
        };
    }>;
}

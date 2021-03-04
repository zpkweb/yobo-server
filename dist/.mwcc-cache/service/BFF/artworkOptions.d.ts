import { CommodityOptionsShapeService } from "../commodity/options/shape";
import { CommodityOptionsThemeService } from "../commodity/options/theme";
import { CommodityOptionsCategoryService } from "../commodity/options/category";
import { CommodityOptionsTechniqueService } from "../commodity/options/technique";
export declare class ArtworkOptionsService {
    commodityOptionsShapeService: CommodityOptionsShapeService;
    commodityOptionsThemeService: CommodityOptionsThemeService;
    commodityOptionsCategoryService: CommodityOptionsCategoryService;
    commodityOptionsTechniqueService: CommodityOptionsTechniqueService;
    get(payload: any): Promise<{
        data: import("../../entity/commodity/options/category").CommodityOptionsCategoryEntity[];
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
            shape: import("../../entity/commodity/options/shape").CommodityOptionsShapeEntity[];
            theme: import("../../entity/commodity/options/theme").CommodityOptionsThemeEntity[];
            category: import("../../entity/commodity/options/category").CommodityOptionsCategoryEntity[];
            technique: import("../../entity/commodity/options/technique").CommodityOptionsTechniqueEntity[];
        };
    }>;
}

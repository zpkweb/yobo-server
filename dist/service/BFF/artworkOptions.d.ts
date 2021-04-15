import { CommodityOptionsCategoryService } from "../commodity/options/category";
import { CommodityOptionsClassificationService } from "../commodity/options/classification";
import { CommodityOptionsMaterialService } from "../commodity/options/material";
import { CommodityOptionsModelService } from "../commodity/options/model";
import { CommodityOptionsPlaceService } from "../commodity/options/place";
import { CommodityOptionsRuiwuService } from "../commodity/options/ruiwu";
import { CommodityOptionsShapeService } from "../commodity/options/shape";
import { CommodityOptionsSpecificationService } from "../commodity/options/specification";
import { CommodityOptionsStyleService } from "../commodity/options/style";
import { CommodityOptionsTechniqueService } from "../commodity/options/technique";
import { CommodityOptionsThemeService } from "../commodity/options/theme";
import { CommodityOptionsTypeService } from "../commodity/options/type";
import { CommodityOptionsUseService } from "../commodity/options/use";
export declare class ArtworkOptionsService {
    commodityOptionsCategoryService: CommodityOptionsCategoryService;
    commodityOptionsClassificationService: CommodityOptionsClassificationService;
    commodityOptionsMaterialService: CommodityOptionsMaterialService;
    commodityOptionsModelService: CommodityOptionsModelService;
    commodityOptionsPlaceService: CommodityOptionsPlaceService;
    commodityOptionsRuiwuService: CommodityOptionsRuiwuService;
    commodityOptionsShapeService: CommodityOptionsShapeService;
    commodityOptionsSpecificationService: CommodityOptionsSpecificationService;
    commodityOptionsStyleService: CommodityOptionsStyleService;
    commodityOptionsTechniqueService: CommodityOptionsTechniqueService;
    commodityOptionsThemeService: CommodityOptionsThemeService;
    commodityOptionsTypeService: CommodityOptionsTypeService;
    commodityOptionsUseService: CommodityOptionsUseService;
    get(payload: any): Promise<{
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

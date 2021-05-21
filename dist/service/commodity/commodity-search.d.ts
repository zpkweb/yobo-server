import { BaseCommodityServer } from "../base/commodity/commodity";
import { CommodityAttributeName } from "./attribute/name";
import { CommodityAttributeDesc } from "./attribute/desc";
import { CommodityAttributeColor } from "./attribute/color";
import { CommodityCategoryService } from "./commodity-options/category";
import { CommodityClassificationService } from "./commodity-options/classification";
import { CommodityMaterialService } from "./commodity-options/material";
import { CommodityModelService } from "./commodity-options/model";
import { CommodityPlaceService } from "./commodity-options/place";
import { CommodityRuiwuService } from "./commodity-options/ruiwu";
import { CommodityShapeService } from "./commodity-options/shape";
import { CommoditySpecificationService } from "./commodity-options/specification";
import { CommodityStyleService } from "./commodity-options/style";
import { CommodityTechniqueService } from "./commodity-options/technique";
import { CommodityThemeService } from "./commodity-options/theme";
import { CommodityTypeService } from "./commodity-options/type";
import { CommodityUseService } from "./commodity-options/use";
export declare class CommoditySearchService {
    baseCommodityServer: BaseCommodityServer;
    commodityAttributeName: CommodityAttributeName;
    commodityAttributeDesc: CommodityAttributeDesc;
    commodityAttributeColor: CommodityAttributeColor;
    commodityCategoryService: CommodityCategoryService;
    commodityClassificationService: CommodityClassificationService;
    commodityMaterialService: CommodityMaterialService;
    commodityModelService: CommodityModelService;
    commodityPlaceService: CommodityPlaceService;
    commodityRuiwuService: CommodityRuiwuService;
    commodityShapeService: CommodityShapeService;
    commoditySpecificationService: CommoditySpecificationService;
    commodityStyleService: CommodityStyleService;
    commodityTechniqueService: CommodityTechniqueService;
    commodityThemeService: CommodityThemeService;
    commodityTypeService: CommodityTypeService;
    commodityUseService: CommodityUseService;
    search(payload: any): Promise<any>;
    getCommodityId(type: any, payload: any, commodityIds: any): Promise<any>;
    searchCommodity(payload: any): Promise<{
        data: {
            list: import("../../entity/commodity/commodity").CommodityEntity[];
            total: number;
        };
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}

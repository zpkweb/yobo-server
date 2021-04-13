import { BaseCommodityServer } from "../base/commodity/commodity";
import { CommodityAttributeName } from "./attribute/name";
import { CommodityAttributeDesc } from "./attribute/desc";
import { CommodityAttributePrice } from "./attribute/price";
import { CommodityAttributePhoto } from "./attribute/photo";
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
export declare class CommodityCommodityService {
    baseCommodityServer: BaseCommodityServer;
    commodityAttributeName: CommodityAttributeName;
    commodityAttributeDesc: CommodityAttributeDesc;
    commodityAttributePrice: CommodityAttributePrice;
    commodityAttributePhoto: CommodityAttributePhoto;
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
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    createMetadata(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    relation(payload: any): Promise<void>;
    hasCommodityPhoto(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodityColor(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodityCategory(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodityShape(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodityTechnique(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    hasCommodityTheme(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieve(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveAll(payload: any): Promise<{
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
    retrieveCategory(id: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    filter(type: any, payload: any): any;
    search(payload: any): Promise<{
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
    deleteCommodityId(commodityId: any): Promise<{
        success: boolean;
        code: number;
    }>;
    deleteAll(): Promise<{
        success: boolean;
        code: number;
    }>;
    hasCommodity(commodityId: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    update(payload: any): Promise<{
        data: import("typeorm").UpdateResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}

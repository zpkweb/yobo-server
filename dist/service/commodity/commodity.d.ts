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
import { BaseSellerMetadataServer } from "../base/seller/metadata";
import { CommodityOptionService } from "./commodityOption";
import { SellerService } from "../user/seller";
import { BaseSellerServer } from "../base/seller/seller";
import { CommoditySearchService } from "./commodity-search";
export declare class CommodityCommodityService {
    baseCommodityServer: BaseCommodityServer;
    baseSellerMetadataServer: BaseSellerMetadataServer;
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
    commodityOptionService: CommodityOptionService;
    sellerService: SellerService;
    baseSellerServer: BaseSellerServer;
    commoditySearchService: CommoditySearchService;
    edit(commodityId: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
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
    searchTest(payload: any): Promise<any>;
    clientSearch(payload: any): Promise<any>;
    serverSearch(payload: any): Promise<any>;
    create(payload: any): Promise<{
        data: import("typeorm").InsertResult;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    } | {
        data: {
            commodityId: any;
        };
        success: boolean;
        code: number;
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
    relationCreate(payload: any): Promise<void>;
    relationUpdate(payload: any): Promise<void>;
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
    retrievePhoto(payload: any): Promise<{
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
    retrieveSeller(commodityId: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
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
    searchs(payload: any): Promise<any>;
    searchFilter(locale: any, data: any): any;
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
    retrieveCommmoditySellerId(sellerId: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveCommmoditySellerPagination(payload: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity[];
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveCommodityId(commodityId: any): Promise<{
        data: import("../../entity/commodity/commodity").CommodityEntity;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    choiceCommodity(payload: any): Promise<{
        data: any;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
    retrieveSellerCount(sellerId: any): Promise<{
        data: number;
        success: boolean;
        code: number;
    } | {
        success: boolean;
        code: number;
        data?: undefined;
    }>;
}

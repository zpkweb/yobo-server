import { Repository } from "typeorm";
import { CommodityEntity } from "../../../entity/commodity/commodity";
import { UserSellerEntity } from "../../../entity/user/seller/seller";
import { CommodityNameEntity } from "../../../entity/commodity/attribute/name";
import { CommodityDescEntity } from "../../../entity/commodity/attribute/desc";
import { CommodityPriceEntity } from "../../../entity/commodity/attribute/price";
import { CommodityColorEntity } from "../../../entity/commodity/attribute/color";
import { CommodityBrowsingCountEntity } from "../../../entity/commodity/commodityBrowsingCount";
import { CommodityCategoryEntity } from "../../../entity/commodity/commodity-options/category";
import { CommodityClassificationEntity } from "../../../entity/commodity/commodity-options/classification";
import { CommodityMaterialEntity } from "../../../entity/commodity/commodity-options/material";
import { CommodityModelEntity } from "../../../entity/commodity/commodity-options/model";
import { CommodityPlaceEntity } from "../../../entity/commodity/commodity-options/place";
import { CommodityRuiwuEntity } from "../../../entity/commodity/commodity-options/ruiwu";
import { CommodityShapeEntity } from "../../../entity/commodity/commodity-options/shape";
import { CommoditySpecificationEntity } from "../../../entity/commodity/commodity-options/specification";
import { CommodityStyleEntity } from "../../../entity/commodity/commodity-options/style";
import { CommodityTechniqueEntity } from "../../../entity/commodity/commodity-options/technique";
import { CommodityThemeEntity } from "../../../entity/commodity/commodity-options/theme";
import { CommodityTypeEntity } from "../../../entity/commodity/commodity-options/type";
import { CommodityUseEntity } from "../../../entity/commodity/commodity-options/use";
export declare class BaseCommodityService {
    commodityEntity: Repository<CommodityEntity>;
    userSellerEntity: Repository<UserSellerEntity>;
    commodityNameEntity: Repository<CommodityNameEntity>;
    commodityDescEntity: Repository<CommodityDescEntity>;
    commodityPriceEntity: Repository<CommodityPriceEntity>;
    commodityColorEntity: Repository<CommodityColorEntity>;
    commodityBrowsingCountEntity: Repository<CommodityBrowsingCountEntity>;
    commodityCategoryEntity: Repository<CommodityCategoryEntity>;
    commodityClassificationEntity: Repository<CommodityClassificationEntity>;
    commodityMaterialEntity: Repository<CommodityMaterialEntity>;
    commodityModelEntity: Repository<CommodityModelEntity>;
    commodityPlaceEntity: Repository<CommodityPlaceEntity>;
    commodityRuiwuEntity: Repository<CommodityRuiwuEntity>;
    commodityShapeEntity: Repository<CommodityShapeEntity>;
    commoditySpecificationEntity: Repository<CommoditySpecificationEntity>;
    commodityStyleEntity: Repository<CommodityStyleEntity>;
    commodityTechniqueEntity: Repository<CommodityTechniqueEntity>;
    commodityThemeEntity: Repository<CommodityThemeEntity>;
    commodityTypeEntity: Repository<CommodityTypeEntity>;
    commodityUseEntity: Repository<CommodityUseEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseRelationAdd(payload: any): Promise<void>;
    BaseRelationRemove(payload: any): Promise<void>;
    BaseHas(commodityId: any): Promise<CommodityEntity>;
    BaseHasRelation(payload: any): Promise<CommodityEntity>;
    BaseRetrieve(commodityId: any): Promise<CommodityEntity>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityEntity>;
    BaseRetrieveAll(payload: any): Promise<[CommodityEntity[], number]>;
    BaseRetrievePhoto(payload: any): Promise<[CommodityEntity[], number]>;
    BaseRetrieveCommodityPhoto(commodityId: any): Promise<CommodityEntity>;
    BaseRetrieveCategory(categorys: any): Promise<CommodityEntity[]>;
    BaseSearchUnion(payload: any, where: any): Promise<[CommodityEntity[], number]>;
    BaseSearchIntersection(payload: any, where: any): Promise<string>;
    BaseSearch(payload: any): Promise<[CommodityEntity[], number]>;
    BaseSearchs(payload: any): Promise<[CommodityEntity[], number]>;
    BaseSearchCommodity(payload: any): Promise<[CommodityEntity[], number]>;
    BaseRetrieveSeller(commodityId: any): Promise<CommodityEntity>;
    BaseDeleteCommodityId(commodityId: any): Promise<import("typeorm").DeleteResult>;
    BaseDeleteAll(): Promise<import("typeorm").DeleteResult>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    baseRetrieveCommmodity(sellerId: any): Promise<CommodityEntity[]>;
    baseRetrieveCommmodityPagination(payload: any): Promise<[CommodityEntity[], number]>;
    baseChoiceCommodity(payload: any): Promise<CommodityEntity[]>;
    baseRetrieveSellerCount(sellerId: any): Promise<number>;
}

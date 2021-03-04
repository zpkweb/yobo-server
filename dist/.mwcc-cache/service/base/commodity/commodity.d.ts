import { Repository } from "typeorm";
import { CommodityEntity } from "../../../entity/commodity/commodity";
import { CommodityNameEntity } from "../../../entity/commodity/attribute/name";
import { CommodityDescEntity } from "../../../entity/commodity/attribute/desc";
import { CommodityPriceEntity } from "../../../entity/commodity/attribute/price";
import { CommodityColorEntity } from "../../../entity/commodity/attribute/color";
import { CommodityBrowsingCountEntity } from "../../../entity/commodity/commodityBrowsingCount";
export declare class BaseCommodityServer {
    commodityEntity: Repository<CommodityEntity>;
    commodityNameEntity: Repository<CommodityNameEntity>;
    commodityDescEntity: Repository<CommodityDescEntity>;
    commodityPriceEntity: Repository<CommodityPriceEntity>;
    commodityColorEntity: Repository<CommodityColorEntity>;
    commodityBrowsingCountEntity: Repository<CommodityBrowsingCountEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseRelationAdd(payload: any): Promise<void>;
    BaseHas(commodityId: any): Promise<CommodityEntity>;
    BaseHasRelation(payload: any): Promise<CommodityEntity>;
    BaseRetrieve(commodityId: any): Promise<CommodityEntity>;
    BaseRetrieveAll(payload: any): Promise<[CommodityEntity[], number]>;
    BaseSearch(payload: any): Promise<[CommodityEntity[], number]>;
    BaseDelete(commodityId: any): Promise<import("typeorm").DeleteResult>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
}

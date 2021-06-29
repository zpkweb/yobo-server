import { Repository } from "typeorm";
import { CommodityRuiwuEntity } from "../../../../entity/commodity/commodity-options/ruiwu";
export declare class BaseCommodityRuiwuService {
    CommodityRuiwuEntity: Repository<CommodityRuiwuEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityRuiwuEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityRuiwuEntity>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseSearch(payload: any): Promise<CommodityRuiwuEntity[]>;
}

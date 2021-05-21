import { Repository } from "typeorm";
import { CommodityCategoryEntity } from "../../../../entity/commodity/commodity-options/category";
export declare class BaseCommodityCategoryServer {
    commodityCategoryEntity: Repository<CommodityCategoryEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityCategoryEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityCategoryEntity>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseSearch(payload: any): Promise<CommodityCategoryEntity[]>;
}

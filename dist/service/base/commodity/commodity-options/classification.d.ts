import { Repository } from "typeorm";
import { CommodityClassificationEntity } from "../../../../entity/commodity/commodity-options/classification";
export declare class BaseCommodityClassificationServer {
    CommodityClassificationEntity: Repository<CommodityClassificationEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityClassificationEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityClassificationEntity>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseSearch(payload: any): Promise<CommodityClassificationEntity[]>;
}

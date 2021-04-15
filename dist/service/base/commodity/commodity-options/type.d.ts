import { Repository } from "typeorm";
import { CommodityTypeEntity } from "../../../../entity/commodity/commodity-options/type";
export declare class BaseCommodityTypeServer {
    CommodityTypeEntity: Repository<CommodityTypeEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityTypeEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityTypeEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

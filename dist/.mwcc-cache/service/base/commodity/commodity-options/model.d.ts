import { Repository } from "typeorm";
import { CommodityModelEntity } from "../../../../entity/commodity/commodity-options/model";
export declare class BaseCommodityModelServer {
    CommodityModelEntity: Repository<CommodityModelEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityModelEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityModelEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

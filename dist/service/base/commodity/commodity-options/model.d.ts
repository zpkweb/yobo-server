import { Repository } from "typeorm";
import { CommodityModelEntity } from "../../../../entity/commodity/commodity-options/model";
export declare class BaseCommodityModelService {
    CommodityModelEntity: Repository<CommodityModelEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityModelEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityModelEntity>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseSearch(payload: any): Promise<CommodityModelEntity[]>;
}

import { Repository } from "typeorm";
import { CommodityTypeEntity } from "../../../../entity/commodity/commodity-options/type";
export declare class BaseCommodityTypeServer {
    CommodityTypeEntity: Repository<CommodityTypeEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityTypeEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

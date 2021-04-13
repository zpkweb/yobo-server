import { Repository } from "typeorm";
import { CommodityUseEntity } from "../../../../entity/commodity/commodity-options/use";
export declare class BaseCommodityUseServer {
    CommodityUseEntity: Repository<CommodityUseEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityUseEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

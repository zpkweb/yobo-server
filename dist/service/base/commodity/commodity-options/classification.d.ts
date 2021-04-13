import { Repository } from "typeorm";
import { CommodityClassificationEntity } from "../../../../entity/commodity/commodity-options/classification";
export declare class BaseCommodityClassificationServer {
    CommodityClassificationEntity: Repository<CommodityClassificationEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityClassificationEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

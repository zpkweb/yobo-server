import { Repository } from "typeorm";
import { CommoditySpecificationEntity } from "../../../../entity/commodity/commodity-options/specification";
export declare class BaseCommoditySpecificationServer {
    CommoditySpecificationEntity: Repository<CommoditySpecificationEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommoditySpecificationEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

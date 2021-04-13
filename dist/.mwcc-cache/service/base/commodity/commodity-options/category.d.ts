import { Repository } from "typeorm";
import { CommodityCategoryEntity } from "../../../../entity/commodity/commodity-options/category";
export declare class BaseCommodityCategoryServer {
    commodityCategoryEntity: Repository<CommodityCategoryEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityCategoryEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

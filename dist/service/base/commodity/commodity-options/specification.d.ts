import { Repository } from "typeorm";
import { CommoditySpecificationEntity } from "../../../../entity/commodity/commodity-options/specification";
export declare class BaseCommoditySpecificationService {
    CommoditySpecificationEntity: Repository<CommoditySpecificationEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommoditySpecificationEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommoditySpecificationEntity>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseSearch(payload: any): Promise<CommoditySpecificationEntity[]>;
}

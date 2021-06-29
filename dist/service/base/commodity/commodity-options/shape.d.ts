import { Repository } from "typeorm";
import { CommodityShapeEntity } from "../../../../entity/commodity/commodity-options/shape";
export declare class BaseCommodityShapeService {
    CommodityShapeEntity: Repository<CommodityShapeEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityShapeEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityShapeEntity>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseSearch(payload: any): Promise<CommodityShapeEntity[]>;
}

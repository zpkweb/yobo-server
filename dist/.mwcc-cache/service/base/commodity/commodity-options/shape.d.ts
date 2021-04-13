import { Repository } from "typeorm";
import { CommodityShapeEntity } from "../../../../entity/commodity/commodity-options/shape";
export declare class BaseCommodityShapeServer {
    CommodityShapeEntity: Repository<CommodityShapeEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityShapeEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

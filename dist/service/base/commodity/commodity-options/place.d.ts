import { Repository } from "typeorm";
import { CommodityPlaceEntity } from "../../../../entity/commodity/commodity-options/place";
export declare class BaseCommodityPlaceServer {
    CommodityPlaceEntity: Repository<CommodityPlaceEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityPlaceEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

import { Repository } from "typeorm";
import { CommodityPlaceEntity } from "../../../../entity/commodity/commodity-options/place";
export declare class BaseCommodityPlaceService {
    CommodityPlaceEntity: Repository<CommodityPlaceEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityPlaceEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityPlaceEntity>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseSearch(payload: any): Promise<CommodityPlaceEntity[]>;
}

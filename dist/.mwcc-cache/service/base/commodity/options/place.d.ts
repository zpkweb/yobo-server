import { Repository } from "typeorm";
import { CommodityOptionsPlaceEntity } from "../../../../entity/commodity/options/place";
export declare class BaseCommodityOptionsPlaceServer {
    commodityOptionsPlaceEntity: Repository<CommodityOptionsPlaceEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsPlaceEntity>;
    BaseRetrieveId(id: any): Promise<CommodityOptionsPlaceEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsPlaceEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

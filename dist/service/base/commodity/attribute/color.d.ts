import { Repository } from "typeorm";
import { CommodityColorEntity } from "../../../../entity/commodity/attribute/color";
export declare class BaseCommodityColorServer {
    commodityColorEntity: Repository<CommodityColorEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(commodityId: any): Promise<CommodityColorEntity>;
    BaseRetrieveCommodityId(payload: any): Promise<CommodityColorEntity[]>;
    BaseRetrieve(payload: any): Promise<CommodityColorEntity[]>;
    BaseRetrieveAll(): Promise<CommodityColorEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(payload: any): Promise<import("typeorm").DeleteResult>;
}

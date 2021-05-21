import { Repository } from "typeorm";
import { CommodityNameEntity } from "../../../../entity/commodity/attribute/name";
export declare class BaseCommodityNameServer {
    commodityNameEntity: Repository<CommodityNameEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(commodityId: any): Promise<CommodityNameEntity>;
    BaseRetrieve(payload: any): Promise<CommodityNameEntity>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityNameEntity>;
    BaseRetrieveAll(): Promise<CommodityNameEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(commodityId: any): Promise<import("typeorm").DeleteResult>;
    BaseSearch(payload: any): Promise<CommodityNameEntity[]>;
}

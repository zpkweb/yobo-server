import { Repository } from "typeorm";
import { CommodityDescEntity } from "../../../../entity/commodity/attribute/desc";
export declare class BaseCommodityDescServer {
    commodityDescEntity: Repository<CommodityDescEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(commodityId: any): Promise<CommodityDescEntity>;
    BaseRetrieve(payload: any): Promise<CommodityDescEntity>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityDescEntity>;
    BaseRetrieveAll(): Promise<CommodityDescEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(commodityId: any): Promise<import("typeorm").DeleteResult>;
    BaseSearch(payload: any): Promise<CommodityDescEntity[]>;
}

import { Repository } from "typeorm";
import { CommodityDetailsEntity } from "../../../../entity/commodity/attribute/details";
export declare class BaseCommodityDetailsServer {
    commodityDetailsEntity: Repository<CommodityDetailsEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(commodityId: any): Promise<CommodityDetailsEntity>;
    BaseRetrieve(payload: any): Promise<CommodityDetailsEntity>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityDetailsEntity>;
    BaseRetrieveAll(): Promise<CommodityDetailsEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(commodityId: any): Promise<import("typeorm").DeleteResult>;
    BaseSearch(payload: any): Promise<CommodityDetailsEntity[]>;
}

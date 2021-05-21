import { Repository } from "typeorm";
import { CommodityPriceEntity } from "../../../../entity/commodity/attribute/price";
export declare class BaseCommodityPriceServer {
    commodityPriceEntity: Repository<CommodityPriceEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(commodityId: any): Promise<CommodityPriceEntity>;
    BaseRetrieve(payload: any): Promise<CommodityPriceEntity>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityPriceEntity>;
    BaseRetrieveAll(): Promise<CommodityPriceEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(commodityId: any): Promise<import("typeorm").DeleteResult>;
    BaseSearch(payload: any): Promise<CommodityPriceEntity[]>;
}

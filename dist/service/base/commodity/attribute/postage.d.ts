import { Repository } from "typeorm";
import { CommodityPostageEntity } from "../../../../entity/commodity/attribute/postage";
export declare class BaseCommodityPostageService {
    commodityPostageEntity: Repository<CommodityPostageEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(commodityId: any): Promise<CommodityPostageEntity>;
    BaseRetrieve(payload: any): Promise<CommodityPostageEntity>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityPostageEntity>;
    BaseRetrieveAll(): Promise<CommodityPostageEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(commodityId: any): Promise<import("typeorm").DeleteResult>;
    BaseSearch(payload: any): Promise<CommodityPostageEntity[]>;
}

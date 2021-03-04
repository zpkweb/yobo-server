import { Repository } from "typeorm";
import { CommodityOptionsCategoryEntity } from "../../../../entity/commodity/options/category";
export declare class BaseCommodityOptionsCategoryServer {
    commodityOptionsCategoryEntity: Repository<CommodityOptionsCategoryEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsCategoryEntity>;
    BaseRetrieveId(payload: any): Promise<CommodityOptionsCategoryEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsCategoryEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(payload: any): Promise<import("typeorm").DeleteResult>;
}

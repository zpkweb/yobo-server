import { Repository } from "typeorm";
import { CommodityOptionsUseEntity } from "../../../../entity/commodity/options/use";
export declare class BaseCommodityOptionsUseService {
    commodityOptionsUseEntity: Repository<CommodityOptionsUseEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsUseEntity>;
    BaseRetrieveId(id: any): Promise<CommodityOptionsUseEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsUseEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

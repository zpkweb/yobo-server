import { Repository } from "typeorm";
import { CommodityOptionsModelEntity } from "../../../../entity/commodity/options/model";
export declare class BaseCommodityOptionsModelServer {
    commodityOptionsModelEntity: Repository<CommodityOptionsModelEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsModelEntity>;
    BaseRetrieveId(id: any): Promise<CommodityOptionsModelEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsModelEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

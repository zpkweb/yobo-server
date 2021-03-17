import { Repository } from "typeorm";
import { CommodityOptionsTypeEntity } from "../../../../entity/commodity/options/type";
export declare class BaseCommodityOptionsTypeServer {
    CommodityOptionsTypeEntity: Repository<CommodityOptionsTypeEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsTypeEntity>;
    BaseRetrieveId(payload: any): Promise<CommodityOptionsTypeEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsTypeEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

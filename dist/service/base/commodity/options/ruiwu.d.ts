import { Repository } from "typeorm";
import { CommodityOptionsRuiwuEntity } from "../../../../entity/commodity/options/ruiwu";
export declare class BaseCommodityOptionsRuiwuServer {
    commodityOptionsRuiwuEntity: Repository<CommodityOptionsRuiwuEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsRuiwuEntity>;
    BaseRetrieveId(id: any): Promise<CommodityOptionsRuiwuEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsRuiwuEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

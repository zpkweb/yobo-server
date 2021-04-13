import { Repository } from "typeorm";
import { CommodityOptionsStyleEntity } from "../../../../entity/commodity/options/style";
export declare class BaseCommodityOptionsStyleServer {
    commodityOptionsStyleEntity: Repository<CommodityOptionsStyleEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsStyleEntity>;
    BaseRetrieveId(id: any): Promise<CommodityOptionsStyleEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsStyleEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

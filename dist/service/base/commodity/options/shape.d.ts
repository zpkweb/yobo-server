import { Repository } from "typeorm";
import { CommodityOptionsShapeEntity } from "../../../../entity/commodity/options/shape";
export declare class BaseCommodityOptionsShapeService {
    commodityOptionsShapeEntity: Repository<CommodityOptionsShapeEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsShapeEntity>;
    BaseRetrieveId(id: any): Promise<CommodityOptionsShapeEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsShapeEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

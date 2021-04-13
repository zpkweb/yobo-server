import { Repository } from "typeorm";
import { CommodityStyleEntity } from "../../../../entity/commodity/commodity-options/style";
export declare class BaseCommodityStyleServer {
    CommodityStyleEntity: Repository<CommodityStyleEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityStyleEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

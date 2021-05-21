import { Repository } from "typeorm";
import { CommodityStyleEntity } from "../../../../entity/commodity/commodity-options/style";
export declare class BaseCommodityStyleServer {
    CommodityStyleEntity: Repository<CommodityStyleEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityStyleEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityStyleEntity>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseSearch(payload: any): Promise<CommodityStyleEntity[]>;
}

import { Repository } from "typeorm";
import { CommodityThemeEntity } from "../../../../entity/commodity/commodity-options/theme";
export declare class BaseCommodityThemeServer {
    CommodityThemeEntity: Repository<CommodityThemeEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityThemeEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityThemeEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

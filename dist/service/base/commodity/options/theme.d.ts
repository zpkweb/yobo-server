import { Repository } from "typeorm";
import { CommodityOptionsThemeEntity } from "../../../../entity/commodity/options/theme";
export declare class BaseCommodityOptionsThemeServer {
    commodityOptionsThemeEntity: Repository<CommodityOptionsThemeEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsThemeEntity>;
    BaseRetrieveId(payload: any): Promise<CommodityOptionsThemeEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsThemeEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

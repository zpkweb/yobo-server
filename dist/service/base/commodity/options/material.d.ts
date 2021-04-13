import { Repository } from "typeorm";
import { CommodityOptionsMaterialEntity } from "../../../../entity/commodity/options/material";
export declare class BaseCommodityOptionsMaterialServer {
    commodityOptionsMaterialEntity: Repository<CommodityOptionsMaterialEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsMaterialEntity>;
    BaseRetrieveId(id: any): Promise<CommodityOptionsMaterialEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsMaterialEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

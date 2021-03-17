import { Repository } from "typeorm";
import { CommodityOptionsMaterialEntity } from "../../../../entity/commodity/options/material";
export declare class BaseCommodityOptionsMaterialServer {
    CommodityOptionsMaterialEntity: Repository<CommodityOptionsMaterialEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsMaterialEntity>;
    BaseRetrieveId(payload: any): Promise<CommodityOptionsMaterialEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsMaterialEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

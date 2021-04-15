import { Repository } from "typeorm";
import { CommodityMaterialEntity } from "../../../../entity/commodity/commodity-options/material";
export declare class BaseCommodityMaterialServer {
    CommodityMaterialEntity: Repository<CommodityMaterialEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityMaterialEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityMaterialEntity>;
    BaseRelationSet(payload: any): Promise<void>;
}

import { Repository } from "typeorm";
import { CommodityTechniqueEntity } from "../../../../entity/commodity/commodity-options/technique";
export declare class BaseCommodityTechniqueService {
    CommodityTechniqueEntity: Repository<CommodityTechniqueEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityTechniqueEntity[]>;
    BaseRetrieveID(payload: any): Promise<CommodityTechniqueEntity>;
    BaseRelationSet(payload: any): Promise<void>;
    BaseSearch(payload: any): Promise<CommodityTechniqueEntity[]>;
}

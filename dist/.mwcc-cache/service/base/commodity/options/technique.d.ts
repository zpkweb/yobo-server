import { Repository } from "typeorm";
import { CommodityOptionsTechniqueEntity } from "../../../../entity/commodity/options/technique";
export declare class BaseCommodityOptionsTechniqueServer {
    commodityOptionsTechniqueEntity: Repository<CommodityOptionsTechniqueEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsTechniqueEntity>;
    BaseRetrieveId(id: any): Promise<CommodityOptionsTechniqueEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsTechniqueEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

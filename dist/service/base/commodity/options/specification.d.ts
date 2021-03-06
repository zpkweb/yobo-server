import { Repository } from "typeorm";
import { CommodityOptionsSpecificationEntity } from "../../../../entity/commodity/options/specification";
export declare class BaseCommodityOptionsSpecificationService {
    commodityOptionsSpecificationEntity: Repository<CommodityOptionsSpecificationEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsSpecificationEntity>;
    BaseRetrieveId(id: any): Promise<CommodityOptionsSpecificationEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsSpecificationEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

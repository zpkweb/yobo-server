import { Repository } from "typeorm";
import { CommodityOptionsClassificationEntity } from "../../../../entity/commodity/options/classification";
export declare class BaseCommodityOptionsClassificationService {
    commodityOptionsClassificationEntity: Repository<CommodityOptionsClassificationEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<CommodityOptionsClassificationEntity>;
    BaseRetrieveId(id: any): Promise<CommodityOptionsClassificationEntity>;
    BaseRetrieveAll(): Promise<CommodityOptionsClassificationEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

import { Repository } from "typeorm";
import { CommodityVideoEntity } from "../../../../entity/commodity/attribute/video";
export declare class BaseCommodityVideoService {
    commodityVideoEntity: Repository<CommodityVideoEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(commodityId: any): Promise<CommodityVideoEntity>;
    BaseRetrieveCommodityId(commodityId: any): Promise<CommodityVideoEntity[]>;
    BaseRetrieve(payload: any): Promise<CommodityVideoEntity[]>;
    BaseRetrieveAll(): Promise<CommodityVideoEntity[]>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseDelete(id: any): Promise<import("typeorm").DeleteResult>;
}

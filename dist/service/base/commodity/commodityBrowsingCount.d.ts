import { Repository } from "typeorm";
import { CommodityBrowsingCountEntity } from "../../../entity/commodity/commodityBrowsingCount";
export declare class BaseCommodityBrowsingCountService {
    commodityBrowsingCountEntity: Repository<CommodityBrowsingCountEntity>;
    BaseCreate(commodityId: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(commodityId: any): Promise<CommodityBrowsingCountEntity>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseRelation(payload: any): Promise<void>;
}

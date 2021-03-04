import { Repository } from "typeorm";
import { CommodityBrowsingCountEntity } from "../../../entity/commodity/commodityBrowsingCount";
export declare class BaseCommodityBrowsingCountServer {
    commodityBrowsingCountEntity: Repository<CommodityBrowsingCountEntity>;
    BaseCreate(): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(commodityId: any): Promise<CommodityBrowsingCountEntity>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseRelation(payload: any): Promise<void>;
}
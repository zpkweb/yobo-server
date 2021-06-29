import { Repository } from "typeorm";
import { MyBrowsingHistoryEntity } from "../../../entity/my/browsingHistory";
import { CommodityEntity } from "../../../entity/commodity/commodity";
export declare class BaseBrowsingHistoryService {
    myBrowsingHistoryEntity: Repository<MyBrowsingHistoryEntity>;
    commodityEntity: Repository<CommodityEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseRetrieve(payload: any): Promise<[MyBrowsingHistoryEntity[], number]>;
    BaseHas(payload: any): Promise<MyBrowsingHistoryEntity>;
    BaseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    BaseRelation(payload: any): Promise<void>;
}

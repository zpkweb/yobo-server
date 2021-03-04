import { Repository } from "typeorm";
import { MyLikeCommodityEntity } from "../../../entity/my/likeCommodity";
export declare class BaseMyLikeCommodityServer {
    myLikeCommodityEntity: Repository<MyLikeCommodityEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(payload: any): Promise<MyLikeCommodityEntity>;
    BaseRetrieve(userId: any): Promise<MyLikeCommodityEntity[]>;
    BaseRelation(payload: any): Promise<void>;
    BaseDelete(payload: any): Promise<import("typeorm").DeleteResult>;
    BaseDeleteAll(userId: any): Promise<import("typeorm").DeleteResult>;
}

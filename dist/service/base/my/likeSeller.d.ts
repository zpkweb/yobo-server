import { Repository } from "typeorm";
import { MyLikeSellerEntity } from "../../../entity/my/likeSeller";
export declare class BaseMyLikeSellerServer {
    myLikeSellerEntity: Repository<MyLikeSellerEntity>;
    BaseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    BaseHas(payload: any): Promise<MyLikeSellerEntity>;
    BaseRetrieve(userId: any): Promise<MyLikeSellerEntity[]>;
    BaseRetrieveFollow(sellerId: any): Promise<number>;
    BaseRelation(payload: any): Promise<void>;
    BaseDelete(payload: any): Promise<import("typeorm").DeleteResult>;
    BaseDeleteAll(userId: any): Promise<import("typeorm").DeleteResult>;
}

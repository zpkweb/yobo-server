import { Repository } from "typeorm";
import { UserSellerStudioEntity } from "../../../entity/user/seller/studio";
export declare class BaseSellerStudioServer {
    userSellerStudioEntity: Repository<UserSellerStudioEntity>;
    baseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    baseRetrieve(sellerId: any): Promise<UserSellerStudioEntity>;
    baseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    relation(payload: any): Promise<void>;
}

import { Repository } from "typeorm";
import { UserSellerResumeEntity } from "../../../entity/user/seller/resume";
export declare class BaseSellerResumeServer {
    userSellerResumeEntity: Repository<UserSellerResumeEntity>;
    baseCreate(payload: any): Promise<import("typeorm").InsertResult>;
    baseRetrieve(sellerId: any): Promise<UserSellerResumeEntity>;
    baseUpdate(payload: any): Promise<import("typeorm").UpdateResult>;
    baseUpdateResume(payload: any): Promise<import("typeorm").UpdateResult>;
    relation(payload: any): Promise<void>;
}

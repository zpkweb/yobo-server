import { UserEntity } from "../user";
import { CommodityEntity } from "../../commodity/commodity";
import { UserSellerMetadataEntity } from "./metadata";
import { UserSellerStudioEntity } from "./studio";
import { UserSellerResumeEntity } from "./resume";
import { OrderEntity } from "../../order/order";
import { MyLikeSellerEntity } from "../../my/likeSeller";
export declare class UserSellerEntity {
    id: number;
    sellerId: string;
    banner: string;
    choice: boolean;
    state: number;
    type: number;
    firstname: string;
    lastname: string;
    tags: string[];
    gender: string;
    country: string;
    createdDate: Date;
    updatedDate: Date;
    metadata: UserSellerMetadataEntity;
    studio: UserSellerStudioEntity;
    resume: UserSellerResumeEntity;
    user: UserEntity;
    likeSellers: MyLikeSellerEntity[];
    commoditys: CommodityEntity[];
    orders: OrderEntity[];
}

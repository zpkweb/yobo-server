import { UserEntity } from "../user/user";
import { UserSellerEntity } from "../user/seller/seller";
export declare class MyLikeSellerEntity {
    id: number;
    userName: string;
    userId: string;
    sellerName: string;
    sellerId: string;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
    seller: UserSellerEntity;
}

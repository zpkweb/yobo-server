import { UserEntity } from "../user";
import { UserIdentityListEntity } from "./list";
import { UserSellerEntity } from "../seller/seller";
export declare class UserIdentityEntity {
    id: number;
    identityId: string;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'fr-fr': string;
    'es-es': string;
    index: number;
    userName: string;
    userEmail: string;
    userPhone: string;
    user: UserEntity;
    seller: UserSellerEntity;
    identityList: UserIdentityListEntity;
    createdDate: Date;
    updatedDate: Date;
}

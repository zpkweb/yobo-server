import { UserEntity } from "../user";
import { UserIdentityListEntity } from "./list";
export declare class UserIdentityEntity {
    id: number;
    identityId: string;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'fr-fr': string;
    'es-es': string;
    index: number;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
    identityList: UserIdentityListEntity;
}

import { UserEntity } from "../user";
import { UserIdentityListEntity } from "./list";
export declare class UserIdentityEntity {
    id: number;
    identityId: string;
    identityIndex: number;
    user: UserEntity;
    identityList: UserIdentityListEntity;
    createdDate: Date;
    updatedDate: Date;
}

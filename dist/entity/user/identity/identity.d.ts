import { UserEntity } from "../user";
export declare class UserIdentityEntity {
    id: number;
    identityId: string;
    identityIndex: number;
    user: UserEntity;
    createdDate: Date;
    updatedDate: Date;
}

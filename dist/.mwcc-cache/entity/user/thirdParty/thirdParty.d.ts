import { UserEntity } from "../user";
export declare class UserThirdPartyEntity {
    id: number;
    identityThirdPartyId: string;
    source: string;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
}

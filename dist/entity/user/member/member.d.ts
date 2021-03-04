import { UserEntity } from "../user";
export declare class UserMemberEntity {
    id: number;
    memberId: string;
    level: number;
    levelName: string;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
}

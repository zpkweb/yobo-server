import { UserEntity } from "../user/user";
export declare class SubscriberEntity {
    id: number;
    subscriberId: string;
    email: string;
    userName: string;
    userEmail: string;
    userPhone: string;
    user: UserEntity;
    createdDate: Date;
    updatedDate: Date;
}

import { UserEntity } from "../user/user";
import { ActivityEntity } from "../activity/activity";
export declare class MyActivityEntity {
    id: number;
    myActivityId: string;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
    activity: ActivityEntity;
}

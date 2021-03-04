import { MyActivityEntity } from "../my/activity";
export declare class ActivityEntity {
    id: number;
    activityId: string;
    name: string;
    status: string;
    time: string;
    createdDate: Date;
    updatedDate: Date;
    myActivity: MyActivityEntity[];
}

import { UserEntity } from "../user/user";
import { CommodityEntity } from "../commodity/commodity";
export declare class MyBrowsingHistoryEntity {
    id: number;
    myBrowsingHistoryId: string;
    count: number;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
    commodity: CommodityEntity;
}

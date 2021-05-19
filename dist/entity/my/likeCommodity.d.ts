import { UserEntity } from "../user/user";
import { CommodityEntity } from "../commodity/commodity";
export declare class MyLikeCommodityEntity {
    id: number;
    userId: string;
    commodityId: string;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
    commodity: CommodityEntity;
}

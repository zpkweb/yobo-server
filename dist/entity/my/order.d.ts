import { UserEntity } from "../user/user";
import { CommodityEntity } from "../commodity/commodity";
export declare class MyOrderEntity {
    id: number;
    myOrderId: string;
    currency: string;
    price: number;
    status: string;
    createdDate: Date;
    updatedDate: Date;
    users: UserEntity;
    commoditys: CommodityEntity[];
}

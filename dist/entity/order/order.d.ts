import { UserEntity } from "../user/user";
import { CommodityEntity } from "../commodity/commodity";
import { UserSellerEntity } from "../user/seller/seller";
export declare class OrderEntity {
    id: number;
    orderId: string;
    currency: string;
    price: number;
    status: string;
    createdDate: Date;
    updatedDate: Date;
    users: UserEntity;
    commoditys: CommodityEntity[];
    sellers: UserSellerEntity[];
}

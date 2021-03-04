import { UserEntity } from "../user/user";
import { CommodityEntity } from "../commodity/commodity";
export declare class MyShoppingCartEntity {
    id: number;
    myShoppingCartId: string;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
    commoditys: CommodityEntity[];
}

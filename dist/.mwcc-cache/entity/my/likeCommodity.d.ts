import { UserEntity } from "../user/user";
import { CommodityEntity } from "../commodity/commodity";
export declare class MyLikeCommodityEntity {
    id: number;
    userName: string;
    userId: string;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'fr-fr': string;
    'es-es': string;
    commodityId: string;
    createdDate: Date;
    updatedDate: Date;
    user: UserEntity;
    commodity: CommodityEntity;
}

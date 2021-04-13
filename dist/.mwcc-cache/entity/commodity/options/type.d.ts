import { CommodityTypeEntity } from "../commodity-options/type";
export declare class CommodityOptionsTypeEntity {
    id: number;
    img: string;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'fr-fr': string;
    'es-es': string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityTypeEntity;
}

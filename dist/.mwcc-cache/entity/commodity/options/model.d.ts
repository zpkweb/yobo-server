import { CommodityModelEntity } from "../commodity-options/model";
export declare class CommodityOptionsModelEntity {
    id: number;
    img: string;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'fr-fr': string;
    'es-es': string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityModelEntity;
}

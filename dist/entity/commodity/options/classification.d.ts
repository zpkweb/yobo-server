import { CommodityClassificationEntity } from "../commodity-options/classification";
export declare class CommodityOptionsClassificationEntity {
    id: number;
    img: string;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'fr-fr': string;
    'es-es': string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityClassificationEntity;
}

import { CommodityEntity } from "../commodity";
export declare class CommodityPriceEntity {
    id: number;
    'zh-cn': number;
    'en-us': number;
    'ja-jp': number;
    'fr-fr': number;
    'es-es': number;
    createdDate: Date;
    updatedDate: Date;
    commodity: CommodityEntity;
}

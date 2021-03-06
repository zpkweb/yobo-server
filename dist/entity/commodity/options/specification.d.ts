import { CommoditySpecificationEntity } from "../commodity-options/specification";
export declare class CommodityOptionsSpecificationEntity {
    id: number;
    img: string;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'fr-fr': string;
    'es-es': string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommoditySpecificationEntity;
}

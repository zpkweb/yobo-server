import { CommodityMaterialEntity } from "../commodity-options/material";
export declare class CommodityOptionsMaterialEntity {
    id: number;
    img: string;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'fr-fr': string;
    'es-es': string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityMaterialEntity;
}

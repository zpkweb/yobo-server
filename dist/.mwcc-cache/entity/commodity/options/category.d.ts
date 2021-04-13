import { CommodityCategoryEntity } from "../commodity-options/category";
export declare class CommodityOptionsCategoryEntity {
    id: number;
    img: string;
    'zh-cn': string;
    'en-us': string;
    'ja-jp': string;
    'fr-fr': string;
    'es-es': string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityCategoryEntity[];
}

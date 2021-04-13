import { CommodityOptionsCategoryEntity } from "../options/category";
import { CommodityEntity } from "../commodity";
export declare class CommodityCategoryEntity {
    id: number;
    commodityName: string;
    categoryName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    categorys: CommodityOptionsCategoryEntity;
}

import { CommodityOptionsCategoryEntity } from "../options/category";
import { CommodityEntity } from "../commodity";
export declare class CommodityCategoryEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsCategoryEntity;
}

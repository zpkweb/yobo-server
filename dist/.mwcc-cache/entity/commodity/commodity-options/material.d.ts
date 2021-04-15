import { CommodityOptionsMaterialEntity } from "../options/material";
import { CommodityEntity } from "../commodity";
export declare class CommodityMaterialEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsMaterialEntity;
}

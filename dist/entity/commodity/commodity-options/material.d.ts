import { CommodityOptionsMaterialEntity } from "../options/material";
import { CommodityEntity } from "../commodity";
export declare class CommodityMaterialEntity {
    id: number;
    commodityName: string;
    materialName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    materials: CommodityOptionsMaterialEntity;
}

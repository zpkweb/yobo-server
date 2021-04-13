import { CommodityOptionsTechniqueEntity } from "../options/technique";
import { CommodityEntity } from "../commodity";
export declare class CommodityTechniqueEntity {
    id: number;
    commodityName: string;
    techniqueName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    techniques: CommodityOptionsTechniqueEntity;
}

import { CommodityOptionsTechniqueEntity } from "../options/technique";
import { CommodityEntity } from "../commodity";
export declare class CommodityTechniqueEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsTechniqueEntity;
}

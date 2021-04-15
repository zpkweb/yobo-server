import { CommodityOptionsRuiwuEntity } from "../options/ruiwu";
import { CommodityEntity } from "../commodity";
export declare class CommodityRuiwuEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsRuiwuEntity;
}

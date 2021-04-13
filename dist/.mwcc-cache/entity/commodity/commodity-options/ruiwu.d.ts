import { CommodityOptionsRuiwuEntity } from "../options/ruiwu";
import { CommodityEntity } from "../commodity";
export declare class CommodityRuiwuEntity {
    id: number;
    commodityName: string;
    ruiwuName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    ruiwus: CommodityOptionsRuiwuEntity;
}

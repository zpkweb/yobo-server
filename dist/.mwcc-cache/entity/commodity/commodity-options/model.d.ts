import { CommodityOptionsModelEntity } from "../options/model";
import { CommodityEntity } from "../commodity";
export declare class CommodityModelEntity {
    id: number;
    commodityName: string;
    modelName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    models: CommodityOptionsModelEntity;
}

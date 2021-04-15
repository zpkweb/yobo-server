import { CommodityOptionsModelEntity } from "../options/model";
import { CommodityEntity } from "../commodity";
export declare class CommodityModelEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsModelEntity;
}

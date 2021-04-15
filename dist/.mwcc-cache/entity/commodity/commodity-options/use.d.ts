import { CommodityOptionsUseEntity } from "../options/use";
import { CommodityEntity } from "../commodity";
export declare class CommodityUseEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsUseEntity;
}

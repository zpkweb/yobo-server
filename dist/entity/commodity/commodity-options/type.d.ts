import { CommodityOptionsTypeEntity } from "../options/type";
import { CommodityEntity } from "../commodity";
export declare class CommodityTypeEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsTypeEntity;
}

import { CommodityOptionsTypeEntity } from "../options/type";
import { CommodityEntity } from "../commodity";
export declare class CommodityTypeEntity {
    id: number;
    commodityName: string;
    typeName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    types: CommodityOptionsTypeEntity;
}

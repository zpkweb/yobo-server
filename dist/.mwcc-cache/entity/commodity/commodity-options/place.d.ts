import { CommodityOptionsPlaceEntity } from "../options/place";
import { CommodityEntity } from "../commodity";
export declare class CommodityPlaceEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsPlaceEntity;
}

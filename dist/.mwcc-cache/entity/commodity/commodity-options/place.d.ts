import { CommodityOptionsPlaceEntity } from "../options/place";
import { CommodityEntity } from "../commodity";
export declare class CommodityPlaceEntity {
    id: number;
    commodityName: string;
    placeName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    places: CommodityOptionsPlaceEntity;
}

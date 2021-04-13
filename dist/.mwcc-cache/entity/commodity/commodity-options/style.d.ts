import { CommodityOptionsStyleEntity } from "../options/style";
import { CommodityEntity } from "../commodity";
export declare class CommodityStyleEntity {
    id: number;
    commodityName: string;
    styleName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    styles: CommodityOptionsStyleEntity;
}

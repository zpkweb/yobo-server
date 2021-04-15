import { CommodityOptionsStyleEntity } from "../options/style";
import { CommodityEntity } from "../commodity";
export declare class CommodityStyleEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsStyleEntity;
}

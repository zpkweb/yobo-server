import { CommodityOptionsThemeEntity } from "../options/theme";
import { CommodityEntity } from "../commodity";
export declare class CommodityThemeEntity {
    id: number;
    commodityId: string;
    optionId: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    options: CommodityOptionsThemeEntity;
}

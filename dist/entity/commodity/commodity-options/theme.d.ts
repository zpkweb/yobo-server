import { CommodityOptionsThemeEntity } from "../options/theme";
import { CommodityEntity } from "../commodity";
export declare class CommodityThemeEntity {
    id: number;
    commodityName: string;
    themeName: string;
    createdDate: Date;
    updatedDate: Date;
    commoditys: CommodityEntity;
    themes: CommodityOptionsThemeEntity;
}

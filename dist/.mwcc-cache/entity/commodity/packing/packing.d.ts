import { CommodityPackingLangEntity } from "./lang";
export declare class CommodityPackingEntity {
    id: number;
    packingId: string;
    name: string;
    createdDate: Date;
    updatedDate: Date;
    lang: CommodityPackingLangEntity[];
}

import { CommodityOptionsCategoryService } from "./options/category";
import { CommodityOptionsClassificationService } from "./options/classification";
import { CommodityOptionsMaterialService } from "./options/material";
import { CommodityOptionsModelService } from "./options/model";
import { CommodityOptionsPlaceService } from "./options/place";
import { CommodityOptionsRuiwuService } from "./options/ruiwu";
import { CommodityOptionsShapeService } from "./options/shape";
import { CommodityOptionsSpecificationService } from "./options/specification";
import { CommodityOptionsStyleService } from "./options/style";
import { CommodityOptionsTechniqueService } from "./options/technique";
import { CommodityOptionsThemeService } from "./options/theme";
import { CommodityOptionsTypeService } from "./options/type";
import { CommodityOptionsUseService } from "./options/use";
export declare class CommodityOptionService {
    commodityOptionsCategoryService: CommodityOptionsCategoryService;
    commodityOptionsClassificationService: CommodityOptionsClassificationService;
    commodityOptionsMaterialService: CommodityOptionsMaterialService;
    commodityOptionsModelService: CommodityOptionsModelService;
    commodityOptionsPlaceService: CommodityOptionsPlaceService;
    commodityOptionsRuiwuService: CommodityOptionsRuiwuService;
    commodityOptionsShapeService: CommodityOptionsShapeService;
    commodityOptionsSpecificationService: CommodityOptionsSpecificationService;
    commodityOptionsStyleService: CommodityOptionsStyleService;
    commodityOptionsTechniqueService: CommodityOptionsTechniqueService;
    commodityOptionsThemeService: CommodityOptionsThemeService;
    commodityOptionsTypeService: CommodityOptionsTypeService;
    commodityOptionsUseService: CommodityOptionsUseService;
    commodityOptionsTypeCreate({ type, img, zhcn, enus, jajp, frfr, eses }?: {
        type?: string;
        img?: string;
        zhcn?: string;
        enus?: string;
        jajp?: string;
        frfr?: string;
        eses?: string;
    }): Promise<any>;
    commodityOptionsRetrieve({ isLocale, locale }: {
        isLocale?: boolean;
        locale?: string;
    }): Promise<{
        data: any;
        success: boolean;
        code: number;
    }>;
    commodityOptionsTypeRetrieve({ type, img, zhcn, enus, jajp, frfr, eses }?: {
        type?: string;
        img?: string;
        zhcn?: string;
        enus?: string;
        jajp?: string;
        frfr?: string;
        eses?: string;
    }): Promise<any>;
    commodityOptionsTypeRetrieveId({ type, id }?: {
        type?: string;
        id?: string;
    }): Promise<any>;
    commodityOptionsTypeRetrieveAll({ type, isLocale, locale }?: {
        type?: string;
        isLocale?: boolean;
        locale?: string;
    }): Promise<any>;
    commodityOptionsTypeUpdate({ type, id, img, zhcn, enus, jajp, frfr, eses, }?: {
        type?: string;
        id?: string;
        img?: string;
        zhcn?: string;
        enus?: string;
        jajp?: string;
        frfr?: string;
        eses?: string;
    }): Promise<any>;
    commodityOptionsTypeDelete(payload: any): Promise<any>;
}

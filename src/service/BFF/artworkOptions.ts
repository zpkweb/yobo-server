import { Inject, Provide } from "@midwayjs/decorator";
import { CommodityOptionsShapeService } from '../commodity/options/shape';
import { CommodityOptionsThemeService } from '../commodity/options/theme';
import { CommodityOptionsCategoryService } from '../commodity/options/category';
import { CommodityOptionsTechniqueService } from '../commodity/options/technique';

@Provide()
export class ArtworkOptionsService {

  @Inject()
  commodityOptionsShapeService: CommodityOptionsShapeService;

  @Inject()
  commodityOptionsThemeService: CommodityOptionsThemeService;

  @Inject()
  commodityOptionsCategoryService: CommodityOptionsCategoryService;

  @Inject()
  commodityOptionsTechniqueService: CommodityOptionsTechniqueService;

  async get(payload) {

    const shape = await this.commodityOptionsShapeService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!shape.success) {
      return shape;
    }

    const theme = await this.commodityOptionsThemeService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!theme.success) {
      return theme;
    }

    const category = await this.commodityOptionsCategoryService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!category.success) {
      return category;
    }

    const technique = await this.commodityOptionsTechniqueService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!technique.success) {
      return technique;
    }


    return {
      success: true,
      code: 10009,
      data: {
        shape: shape.data,
        theme: theme.data,
        category: category.data,
        technique: technique.data
      }
    }
  }
}

import { Inject, Provide } from "@midwayjs/decorator";



import { CommodityOptionsCategoryService } from 'src/service/commodity/options/category';
import { CommodityOptionsClassificationService } from 'src/service/commodity/options/classification';
import { CommodityOptionsMaterialService } from 'src/service/commodity/options/material';
import { CommodityOptionsModelService } from 'src/service/commodity/options/model';
import { CommodityOptionsPlaceService } from 'src/service/commodity/options/place';
import { CommodityOptionsRuiwuService } from 'src/service/commodity/options/ruiwu';
import { CommodityOptionsShapeService } from 'src/service/commodity/options/shape';
import { CommodityOptionsSpecificationService } from 'src/service/commodity/options/specification';
import { CommodityOptionsStyleService } from 'src/service/commodity/options/style';
import { CommodityOptionsTechniqueService } from 'src/service/commodity/options/technique';
import { CommodityOptionsThemeService } from 'src/service/commodity/options/theme';
import { CommodityOptionsTypeService } from 'src/service/commodity/options/type';
import { CommodityOptionsUseService } from 'src/service/commodity/options/use';

@Provide()
export class ArtworkOptionsService {

  @Inject()
commodityOptionsCategoryService: CommodityOptionsCategoryService;

  @Inject()
commodityOptionsClassificationService: CommodityOptionsClassificationService;

  @Inject()
commodityOptionsMaterialService: CommodityOptionsMaterialService;

  @Inject()
commodityOptionsModelService: CommodityOptionsModelService;

  @Inject()
commodityOptionsPlaceService: CommodityOptionsPlaceService;

@Inject()
commodityOptionsRuiwuService: CommodityOptionsRuiwuService;

  @Inject()
commodityOptionsShapeService: CommodityOptionsShapeService;

  @Inject()
commodityOptionsSpecificationService: CommodityOptionsSpecificationService;

  @Inject()
commodityOptionsStyleService: CommodityOptionsStyleService;

  @Inject()
commodityOptionsTechniqueService: CommodityOptionsTechniqueService;

  @Inject()
commodityOptionsThemeService: CommodityOptionsThemeService;

  @Inject()
commodityOptionsTypeService: CommodityOptionsTypeService;

  @Inject()
commodityOptionsUseService: CommodityOptionsUseService;

  async get(payload) {

    const category = await this.commodityOptionsCategoryService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!category.success) {
      return category;
    }
    const classification = await this.commodityOptionsClassificationService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!classification.success) {
      return classification;
    }

    const material = await this.commodityOptionsMaterialService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!material.success) {
      return material;
    }

    const model = await this.commodityOptionsModelService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!model.success) {
      return model;
    }

    const place = await this.commodityOptionsPlaceService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!place.success) {
      return place;
    }

    const ruiwu = await this.commodityOptionsRuiwuService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!ruiwu.success) {
      return ruiwu;
    }

    const shape = await this.commodityOptionsShapeService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    console.log("artworkOptions", shape)
    if(!shape.success) {
      return shape;
    }

    const specification = await this.commodityOptionsSpecificationService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!specification.success) {
      return specification;
    }

    const style = await this.commodityOptionsStyleService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!style.success) {
      return style;
    }

    const technique = await this.commodityOptionsTechniqueService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!technique.success) {
      return technique;
    }

    const theme = await this.commodityOptionsThemeService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!theme.success) {
      return theme;
    }

    const type = await this.commodityOptionsTypeService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!type.success) {
      return type;
    }

    const use = await this.commodityOptionsUseService.retrieveAll({
      isLocale: payload.isLocale,
      locale: payload.locale
    });
    if(!use.success) {
      return use;
    }

    return {
      success: true,
      code: 10009,
      data: {
        category: category.data,
        classification: classification.data,
        material: material.data,
        model: model.data,
        place: place.data,
        ruiwu: ruiwu.data,
        shape: shape.data,
        specification: specification.data,
        style: style.data,
        technique: technique.data,
        theme: theme.data,
        type: type.data,
        use: use.data,
      }
    }
  }
}

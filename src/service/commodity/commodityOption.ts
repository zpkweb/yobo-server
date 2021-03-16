import { Provide, Inject } from "@midwayjs/decorator";

import { CommodityOptionsCategoryService } from 'src/service/commodity/options/category';
import { CommodityOptionsClassificationService } from 'src/service/commodity/options/classification';
import { CommodityOptionsMaterialService } from 'src/service/commodity/options/material';
import { CommodityOptionsModelService } from 'src/service/commodity/options/model';
import { CommodityOptionsPlaceService } from 'src/service/commodity/options/place';
import { CommodityOptionsShapeService } from 'src/service/commodity/options/shape';
import { CommodityOptionsSpecificationService } from 'src/service/commodity/options/specification';
import { CommodityOptionsStyleService } from 'src/service/commodity/options/style';
import { CommodityOptionsTechniqueService } from 'src/service/commodity/options/technique';
import { CommodityOptionsThemeService } from 'src/service/commodity/options/theme';
import { CommodityOptionsTypeService } from 'src/service/commodity/options/type';
import { CommodityOptionsUseService } from 'src/service/commodity/options/use';



@Provide()
export class CommodityOptionService {
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

  /**
   * 创建商品类型选项
   * @param payload
   * type
   */
  async commodityOptionsTypeCreate({
    type = '',
    img = '',
    zhcn = '',
    enus = '',
    jajp = '',
    frfr = '',
    eses = ''
  } = {}) {
    let data: any;
    let createData = { img, zhcn, enus, jajp, frfr, eses };
    console.log("commodityOptionsTypeCreate createData", createData)
    switch (type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.create(createData);
        break;
      case 'classification':
        data = await this.commodityOptionsClassificationService.create(createData);
        break;
      case 'material':
        data = await this.commodityOptionsMaterialService.create(createData);
        break;
      case 'model':
        data = await this.commodityOptionsModelService.create(createData);
        break;
      case 'place':
        data = await this.commodityOptionsPlaceService.create(createData);
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.create(createData);
        break;
      case 'specification':
        data = await this.commodityOptionsSpecificationService.create(createData);
        break;
      case 'style':
        data = await this.commodityOptionsStyleService.create(createData);
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.create(createData);
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.create(createData);
        break;
      case 'type':
        data = await this.commodityOptionsTypeService.create(createData);
        break;
      case 'use':
        data = await this.commodityOptionsUseService.create(createData);
        break;
      default:
        break;
    }
    return data;
  }

  /**
   * 查询商品类型选项
   */
  async commodityOptionsTypeRetrieve({
    type = '',
    img = '',
    zhcn = '',
    enus = '',
    jajp = '',
    frfr = '',
    eses = ''
  } = {}) {
    let data: any;
    let retrieveData = { img, zhcn, enus, jajp, eses };
    console.log("commodityOptionsTypeRetrieve retrieveData", retrieveData)
    switch (type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.retrieve(retrieveData);
        break;
      case 'classification':
        data = await this.commodityOptionsClassificationService.retrieve(retrieveData);
        break;
      case 'material':
        data = await this.commodityOptionsMaterialService.retrieve(retrieveData);
        break;
      case 'model':
        data = await this.commodityOptionsModelService.retrieve(retrieveData);
        break;
      case 'place':
        data = await this.commodityOptionsPlaceService.retrieve(retrieveData);
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.retrieve(retrieveData);
        break;
      case 'specification':
        data = await this.commodityOptionsSpecificationService.retrieve(retrieveData);
        break;
      case 'style':
        data = await this.commodityOptionsStyleService.retrieve(retrieveData);
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.retrieve(retrieveData);
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.retrieve(retrieveData);
        break;
      case 'type':
        data = await this.commodityOptionsTypeService.retrieve(retrieveData);
        break;
      case 'use':
        data = await this.commodityOptionsUseService.retrieve(retrieveData);
        break;
      default:
        break;
    }
    return data;
  }


  /**
   * 查询商品类型选项
   */
  async commodityOptionsTypeRetrieveId({
    type = '',
    id = ''
  } = {}) {
    let data: any;
    switch (type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.retrieveId(id);
        break;
      case 'classification':
        data = await this.commodityOptionsClassificationService.retrieveId(id);
        break;
      case 'material':
        data = await this.commodityOptionsMaterialService.retrieveId(id);
        break;
      case 'model':
        data = await this.commodityOptionsModelService.retrieveId(id);
        break;
      case 'place':
        data = await this.commodityOptionsPlaceService.retrieveId(id);
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.retrieveId(id);
        break;
      case 'specification':
        data = await this.commodityOptionsSpecificationService.retrieveId(id);
        break;
      case 'style':
        data = await this.commodityOptionsStyleService.retrieveId(id);
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.retrieveId(id);
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.retrieveId(id);
        break;
      case 'type':
        data = await this.commodityOptionsTypeService.retrieveId(id);
        break;
      case 'use':
        data = await this.commodityOptionsUseService.retrieveId(id);
        break;
      default:
        break;
    }
    return data;
  }

  /**
   * 查询商品类型所有
   */
  async commodityOptionsTypeRetrieveAll({
    type = '',
    isLocale = false,
    locale = 'zh-cn'
  } = {}) {
    let data: any;
    console.log("commodityOptionsTypeRetrieveAll", type)

    switch (type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.retrieveAll({ isLocale, locale });
        break;
      case 'classification':
        data = await this.commodityOptionsClassificationService.retrieveAll({ isLocale, locale });
        break;
      case 'material':
        data = await this.commodityOptionsMaterialService.retrieveAll({ isLocale, locale });
        break;
      case 'model':
        data = await this.commodityOptionsModelService.retrieveAll({ isLocale, locale });
        break;
      case 'place':
        data = await this.commodityOptionsPlaceService.retrieveAll({ isLocale, locale });
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.retrieveAll({ isLocale, locale });
        break;
      case 'specification':
        data = await this.commodityOptionsSpecificationService.retrieveAll({ isLocale, locale });
        break;
      case 'style':
        data = await this.commodityOptionsStyleService.retrieveAll({ isLocale, locale });
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.retrieveAll({ isLocale, locale });
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.retrieveAll({ isLocale, locale });
        break;
      case 'type':
        data = await this.commodityOptionsTypeService.retrieveAll({ isLocale, locale });
        break;
      case 'use':
        data = await this.commodityOptionsUseService.retrieveAll({ isLocale, locale });
        break;
      default:
        break;
    }
    return data;
  }


  /**
   * 修改商品类型选项
   * @param payload
   */
  async commodityOptionsTypeUpdate({
    type = '',
    id = '',
    img = '',
    zhcn = '',
    enus = '',
    jajp = '',
    frfr = '',
    eses = '',
  } = {}) {
    let data: any;
    let updateData = { id, img, zhcn, enus, jajp, frfr, eses };

    switch (type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.update(updateData);
        break;
      case 'classification':
        data = await this.commodityOptionsClassificationService.update(updateData);
        break;
      case 'material':
        data = await this.commodityOptionsMaterialService.update(updateData);
        break;
      case 'model':
        data = await this.commodityOptionsModelService.update(updateData);
        break;
      case 'place':
        data = await this.commodityOptionsPlaceService.update(updateData);
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.update(updateData);
        break;
      case 'specification':
        data = await this.commodityOptionsSpecificationService.update(updateData);
        break;
      case 'style':
        data = await this.commodityOptionsStyleService.update(updateData);
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.update(updateData);
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.update(updateData);
        break;
      case 'type':
        data = await this.commodityOptionsTypeService.update(updateData);
        break;
      case 'use':
        data = await this.commodityOptionsUseService.update(updateData);
        break;
      default:
        break;
    }
    return data;
  }


  /**
   * 删除商品类型选项
   */
  async commodityOptionsTypeDelete(payload) {
    let data: any;
    switch (payload.type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.delete({
          id: payload.id
        });
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.delete({
          id: payload.id
        });
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.delete({
          id: payload.id
        });
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.delete({
          id: payload.id
        });
        break;
    }
    return data;
  }

}

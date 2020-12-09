import { Inject, Provide } from '@midwayjs/decorator';
import { BaseCommodityServer } from '../base/commodity';
import { CommodityOptionsCategoryService } from './options/category';
import { CommodityOptionsShapeService } from './options/shape';
import { CommodityOptionsTechniqueService } from './options/technique';
import { CommodityOptionsThemeService } from './options/theme';

@Provide()
export class CommodityService {

  @Inject()
  baseCommodityServer: BaseCommodityServer;

  @Inject()
  commodityOptionsCategoryService: CommodityOptionsCategoryService;

  @Inject()
  commodityOptionsShapeService: CommodityOptionsShapeService;

  @Inject()
  commodityOptionsTechniqueService: CommodityOptionsTechniqueService;

  @Inject()
  commodityOptionsThemeService: CommodityOptionsThemeService;

  // 创建商品
  async createCommodity() {

  }

  // 删除商品
  async removeCommodity() {

  }

  // 更新商品
  async updateCommodity() {

  }

  // 查找商品
  async commodityFind(payload) {

  }


  /**
   * 创建商品选项
   * @param payload
   * type
   */
  async commodityOptionsCreate(payload) {
    let data: any = [];
    if (payload.options && payload.options.length) {
      for (let item of payload.options) {
        // 查询商品选项
        const commodityOptions = await this.commodityOptionsTypeRetrieve({
          type: payload.type,
          ...item
        });
        if (commodityOptions.success) {
          return {
            success: false,
            code: 10013
          }
        }
        // 商品选项不存在, 创建商品选项
        const commodityOptionsNew = await this.commodityOptionsTypeCreate({
          type: payload.type,
          ...item
        });
        if (!commodityOptionsNew.success) {
          return {
            success: false,
            code: 10004
          }
        }
        // 获取刚创建的商品选项
        const commodityOption = await this.commodityOptionsTypeRetrieve({
          type: payload.type,
          ...item
        });
        if (commodityOption.success) {
          data.push(commodityOption.data)
        } else {
          return {
            success: false,
            code: 10009
          }
        }

      }
    }
    return {
      data,
      success: true,
      code: 10003
    }
  }
  /**
   * 创建商品类型选项
   * @param payload
   * type
   */
  async commodityOptionsTypeCreate(payload) {
    let data: any;
    switch (payload.type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.create(payload);
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.create(payload);
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.create(payload);
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.create(payload);
        break;
    }
    if(data.identifiers[0].id){
      return {
        data,
        success: true,
        code: 10003
      }
    }else{
      return {
        success: false,
        code: 10004
      }
    }
  }

  /**
   * 查询商品类型选项
   */
  async commodityOptionsTypeRetrieve(payload) {
    let data: any;
    switch (payload.type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.retrieve(payload);
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.retrieve(payload);
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.retrieve(payload);
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.retrieve(payload);
        break;
    }
    if(data){
      return {
        data,
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
  }

  /**
   * 查询商品类型选项
   */
  async commodityOptionsTypeRetrieveId(payload) {
    let data: any;
    switch (payload.type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.retrieveId({
          id: payload.id
        });
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.retrieveId({
          id: payload.id
        });
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.retrieveId({
          id: payload.id
        });
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.retrieveId({
          id: payload.id
        });
        break;
    }
    if(data){
      return {
        data,
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
  }

  /**
   * 查询商品类型所有
   */
    async commodityOptionsTypeRetrieveAll(payload) {
      let data: any;
    switch (payload.type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.retrieveAll();
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.retrieveAll();
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.retrieveAll();
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.retrieveAll();
        break;
    }
    if(data){
      return {
        data,
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
    }

  /**
   * 修改商品选项
   * @param payload
   */
  async commodityOptionsUpdate(payload) {

    // 查询商品选项
    const commodityOptionsShape = await this.commodityOptionsTypeRetrieveId(payload);
    if (!commodityOptionsShape.success) {
      return {
        success: false,
        code: 10014
      }
    }

    return await this.commodityOptionsTypeUpdate({
      'id': commodityOptionsShape.data.id,
      'zh-cn': payload.options['zh-cn'] || commodityOptionsShape.data['zh-cn'],
      'en-us': payload.options['en-us'] || commodityOptionsShape.data['en-us'],
      'ja-jp': payload.options['ja-jp'] || commodityOptionsShape.data['ja-jp'],
      'fr-fr': payload.options['fr-fr'] || commodityOptionsShape.data['fr-fr']
    })

  }

  /**
   * 修改商品类型选项
   * @param payload
   */
  async commodityOptionsTypeUpdate(payload) {
    let data: any;
    switch (payload.type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.update({
          'id': payload.id,
          'zh-cn': payload['zh-cn'],
          'en-us': payload['en-us'],
          'ja-jp': payload['ja-jp'],
          'fr-fr': payload['fr-fr']
        });
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.update({
          'id': payload.id,
          'zh-cn': payload['zh-cn'],
          'en-us': payload['en-us'],
          'ja-jp': payload['ja-jp'],
          'fr-fr': payload['fr-fr']
        });
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.update({
          'id': payload.id,
          'zh-cn': payload['zh-cn'],
          'en-us': payload['en-us'],
          'ja-jp': payload['ja-jp'],
          'fr-fr': payload['fr-fr']
        });
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.update({
          'id': payload.id,
          'zh-cn': payload['zh-cn'],
          'en-us': payload['en-us'],
          'ja-jp': payload['ja-jp'],
          'fr-fr': payload['fr-fr']
        });
        break;
    }
    if(data.affected){
      return {
        data,
        success: true,
        code: 10005
      }
    }else{
      return {
        success: false,
        code: 10006
      }
    }
  }

  /**
   * 删除商品选项
   */
  async commodityOptionsDelete(payload) {
    // 查询商品选项
    const commodityOptionsShape = await this.commodityOptionsTypeRetrieveId({
      type: payload.type,
      id: payload.id
    });
    if (!commodityOptionsShape.success) {
      return {
        success: false,
        code: 10014
      }
    }

    return await this.commodityOptionsTypeDelete({
      type: payload.type,
      id: payload.id
    })
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
    if(data.affected){
      return {
        data,
        success: true,
        code: 10005
      }
    }else{
      return {
        success: false,
        code: 10006
      }
    }
  }

}

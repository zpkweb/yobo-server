import { Inject, Provide } from '@midwayjs/decorator';
import { CommodityCommodityService } from './commodity';
import { CommodityOptionsCategoryService } from './options/category';
import { CommodityOptionsShapeService } from './options/shape';
import { CommodityOptionsTechniqueService } from './options/technique';
import { CommodityOptionsThemeService } from './options/theme';

@Provide()
export class CommodityService {

  @Inject()
  commodityCommodityService: CommodityCommodityService;

  @Inject()
  commodityOptionsCategoryService: CommodityOptionsCategoryService;

  @Inject()
  commodityOptionsShapeService: CommodityOptionsShapeService;

  @Inject()
  commodityOptionsTechniqueService: CommodityOptionsTechniqueService;

  @Inject()
  commodityOptionsThemeService: CommodityOptionsThemeService;

  // 创建
  async create(payload) {
    console.log("commodity index create", payload)
    // 查询商品
    // const commodity = await this.commodityCommodityService.retrieve(payload.name);
    // if(commodity.success){
    //   return {
    //     success: false,
    //     code: 10013
    //   }
    // }

    return await this.commodityCommodityService.create(payload);




  }



  // 查找商品
  async find(payload) {
    if(payload.commodityId){
      return await this.commodityCommodityService.retrieveId({
        commodityId: payload.commodityId
      });
    }else{
      return await this.commodityCommodityService.retrieve(payload);
    }

  }

  // 查找所有商品
  async findAll() {
    return await this.commodityCommodityService.retrieveAll();
  }


  // 搜索商品
  async search(payload) {

  }

  // 删除商品
  async delete() {

  }

  // 更新商品
  async update() {

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
        console.log("item", item)
        // 查询商品选项
        const commodityOptions = await this.commodityOptionsTypeRetrieve({
          type: payload.type,
          ...item
        });
        console.log("commodityOptions", commodityOptions)
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
    return data;
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
    return data;
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
    return data;
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
      return data;
    }

  /**
   * 修改商品选项
   * @param payload
   */
  async commodityOptionsUpdate(payload) {

    // 查询商品选项
    const commodityOptionsShape = await this.commodityOptionsTypeRetrieveId(payload);
    console.log("commodityOptionsShape", commodityOptionsShape )
    if (!commodityOptionsShape.success) {
      return {
        success: false,
        code: 10014
      }
    }

    return await this.commodityOptionsTypeUpdate({
      'type': payload.type,
      'id': commodityOptionsShape.data.id,
      'zh-cn': payload['zh-cn'] || commodityOptionsShape.data['zh-cn'],
      'en-us': payload['en-us'] || commodityOptionsShape.data['en-us'],
      'ja-jp': payload['ja-jp'] || commodityOptionsShape.data['ja-jp'],
      'fr-fr': payload['fr-fr'] || commodityOptionsShape.data['fr-fr']
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
    return data;
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
    return data;
  }

}

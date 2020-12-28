import { Inject, Provide } from '@midwayjs/decorator';
import { CommodityCommodityService } from './commodity';
import { CommodityAttributeName } from './attribute/name';
import { CommodityAttributeDesc } from './attribute/desc';
import { CommodityAttributePrice } from './attribute/price';
import { CommodityAttributePhoto } from './attribute/photo';
import { CommodityAttributeColor } from './attribute/color';
import { CommodityOptionsCategoryService } from './options/category';
import { CommodityOptionsShapeService } from './options/shape';
import { CommodityOptionsTechniqueService } from './options/technique';
import { CommodityOptionsThemeService } from './options/theme';
import { CommentService } from './comment'
@Provide()
export class CommodityService {

  @Inject()
  commodityCommodityService: CommodityCommodityService;

  @Inject()
  commodityAttributeName: CommodityAttributeName;

  @Inject()
  commodityAttributeDesc: CommodityAttributeDesc;

  @Inject()
  commodityAttributePrice: CommodityAttributePrice;

  @Inject()
  commodityAttributePhoto: CommodityAttributePhoto;

  @Inject()
  commodityAttributeColor: CommodityAttributeColor;

  @Inject()
  commodityOptionsCategoryService: CommodityOptionsCategoryService;

  @Inject()
  commodityOptionsShapeService: CommodityOptionsShapeService;

  @Inject()
  commodityOptionsTechniqueService: CommodityOptionsTechniqueService;

  @Inject()
  commodityOptionsThemeService: CommodityOptionsThemeService;

  @Inject()
  commentService: CommentService;

  // 创建
  async create(payload) {
    console.log("commodity index create", payload)
    // 查询商品是否存在
    const commodity = await this.commodityAttributeName.hasName({
      'zh-cn': payload['zh-cn'],
      'en-us': payload['en-us'],
      'ja-jp': payload['ja-jp'],
      'fr-fr': payload['fr-fr']
    });
    if(commodity.success){
      return {
        success: false,
        code: 10013
      }
    }

    const commodityNew =  await this.commodityCommodityService.create(payload);

    if(!commodityNew.success){
      return commodityNew
    }

    // 通过商品Id查找商品

    return await this.commodityCommodityService.retrieve({
      commodityId: commodityNew.data.generatedMaps[0].commodityId
    })


  }



  // 查找商品
  async find(payload) {
    return await this.commodityCommodityService.retrieve({
      commodityId: payload.commodityId
    });
  }


  // 查找所有商品
  async findAll(payload) {
    return await this.commodityCommodityService.retrieveAll({
      isLocale: payload.isLocale || false,
      locale: payload.locale || 'zh-cn',
      currentPage: +payload.currentPage || 1,
      pageSize: +payload.pageSize || 10
    });
  }


  // 搜索商品
  async search(payload) {
    console.log("search", payload)
    let price;
    if(payload.price){
      if(typeof payload.price == 'string') {
        price = JSON.parse(payload.price)
      }else{
        price = payload.price
      }
    }else{
      price = {
        min: '',
        max: ''
      }
    }
    let width;
    if(payload.width){
      if(typeof payload.width == 'string') {
        width = JSON.parse(payload.width)
      }else{
        width = payload.width
      }
    }else{
      width = {
        min: '',
        max: ''
      }
    }
    let height;
    if(payload.height){
      if(typeof payload.height == 'string') {
        height = JSON.parse(payload.height)
      }else{
        height = payload.height
      }
    }else{
      height = {
        min: '',
        max: ''
      }
    }
    let colors;
    if(payload.colors){
      if(typeof payload.colors == 'string') {
        colors = JSON.parse(payload.colors)
      }else{
        colors = payload.colors
      }
    }else{
      colors = {
        start: '',
        end: ''
      }
    }
    let colorStart = colors.start.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
    let colorEnd = colors.end.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
    let colorsMin,colorsMax;
    if(colorStart<=colorEnd){
      colorsMin = colorStart;
      colorsMax = colorEnd;
    }else{
      colorsMin = colorEnd;
      colorsMax = colorStart;
    }

    let hots = false;
    if(payload.hots && payload.hots == 'true'){
      hots = true;
    }

    let news = false;
    if(payload.news && payload.news == 'true'){
      news = true;
    }

    return await this.commodityCommodityService.search({
      name: payload.name || '',
      desc: payload.desc || '',
      // price: payload.price,
      priceMin: price.min || 0,
      priceMax: price.max || 100,
      // width: payload.width,
      widthMin: width.min || 0,
      widthMax: width.max || 100,
      // height: payload.height,
      heightMin: height.min || 0,
      heightMax: height.max || 100,
      // colors: payload.colors,
      colorsMin: colorsMin || 0 ,
      colorsMax: colorsMax || 16777215,
      state: payload.state || '',
      shapeId: payload.shapeId || '',
      themeId: payload.themeId || '',
      categoryId: payload.categoryId || '',
      techniqueId: payload.techniqueId || '',
      sellerId: payload.sellerId || '',
      hots,
      news,
      currentPage: payload.currentPage || 1,
      pageSize: payload.pageSize || 10,
      isLocale: payload.isLocale || false,
      locale: payload.locale || 'zh-cn'
    });
  }

  // 删除商品
  async delete(payload) {
    return await this.commodityCommodityService.delete(payload);
  }

  // 更新商品
  async update(payload) {
    console.log("commodity payload", payload)
    // 查询商品是否存在
    const commodity = await this.commodityCommodityService.hasCommodity(payload.commodityId);
    console.log("commodity", commodity)
    //  商品不存在
    if(!commodity.success){
      return {
        success: false,
        code: 10014
      }
    }
    // 更新商品属性
    const commodityUpdate = await this.commodityCommodityService.update({
      commodityId: payload.commodityId,
      state: payload.state,
      width: payload.width,
      height: payload.height
    })
    console.log("commodityUpdate", commodityUpdate)
    // 更新失败
    if (!commodityUpdate.success) {
      return commodityUpdate
    }


    // 更新商品名称
    const commodityName = await this.commodityAttributeName.updateName({
      commodityId: payload.commodityId,
      'zh-cn': payload.name['zh-cn'],
      'en-us': payload.name['en-us'],
      'ja-jp': payload.name['ja-jp'],
      'fr-fr': payload.name['fr-fr']
    })
    console.log("commodityName", commodityName)
    if(!commodityName.success) {
      return commodityName;
    }

    // 更新商品详情
    const commodityDesc = await this.commodityAttributeDesc.updateDesc({
      commodityId: payload.commodityId,
      'zh-cn': payload.desc['zh-cn'],
      'en-us': payload.desc['en-us'],
      'ja-jp': payload.desc['ja-jp'],
      'fr-fr': payload.desc['fr-fr']
    });
    console.log("commodityDesc", commodityDesc)
    if(!commodityDesc.success) {
      return commodityDesc;
    }

    // 更新商品价格
    const commodityPrice = await this.commodityAttributePrice.updatePrice({
      commodityId: payload.commodityId,
      'zh-cn': payload.price['zh-cn'],
      'en-us': payload.price['en-us'],
      'ja-jp': payload.price['ja-jp'],
      'fr-fr': payload.price['fr-fr']
    });
    console.log("commodityPrice", commodityPrice)
    if(!commodityPrice.success) {
      return commodityPrice;
    }



    // 更新商品图片
    for(let item of payload.photos){
      const commodityPhoto = await this.commodityAttributePhoto.update({
      src: item.url,
      name: item.name,
      commodityId: payload.commodityId,
      });
      console.log("commodityPhoto", commodityPhoto)
      if (!commodityPhoto.success) {
        return commodityPhoto
      }
      // 商品 关联 商品图片
      // await this.relation({
      //   name: 'photos',
      //   of: { commodityId: payload.commodityId },
      //   add: commodityPhoto.data.identifiers[0].id
      // })
    }

    // 更新商品颜色
    for(let item of payload.colors){
      const commodityColor = await this.commodityAttributeColor.update({
      ...item,
      commodityId: payload.commodityId,
      });
      console.log("commodityColor", commodityColor)
      if (!commodityColor.success) {
        return commodityColor
      }
      // 商品 关联 商品图片
      // await this.relation({
      //   name: 'colors',
      //   of: { commodityId: payload.commodityId },
      //   add: commodityColor.data.identifiers[0].id
      // })
    }

    // 更新 商品形状
    await this.commodityCommodityService.relation({
      name: 'shapes',
      of: { commodityId: payload.commodityId },
      add: payload.shape
    })

    // 更新 商品主题
    await this.commodityCommodityService.relation({
      name: 'themes',
      of: { commodityId: payload.commodityId },
      add: payload.theme
    })

    // 更新 商品类别
    await this.commodityCommodityService.relation({
      name: 'categorys',
      of: { commodityId: payload.commodityId },
      add: payload.category
    })

    // 更新 商品手法
    await this.commodityCommodityService.relation({
      name: 'techniques',
      of: { commodityId: payload.commodityId },
      add: payload.technique
    })

    // 查询商品
    return await this.commodityCommodityService.retrieve({
      commodityId: payload.commodityId
    });

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
      console.log("commodityOptionsTypeRetrieveAll", payload)
      let data: any;
    switch (payload.type) {
      case 'category':
        data = await this.commodityOptionsCategoryService.retrieveAll(payload);
        break;
      case 'shape':
        data = await this.commodityOptionsShapeService.retrieveAll(payload);
        break;
      case 'technique':
        data = await this.commodityOptionsTechniqueService.retrieveAll(payload);
        break;
      case 'theme':
        data = await this.commodityOptionsThemeService.retrieveAll(payload);
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

  /**
   * 商品评价
   */
    async commodityComment(payload) {
      return await this.commentService.home(payload);
    }
}

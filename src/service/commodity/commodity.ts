import { Inject, Provide } from '@midwayjs/decorator';
import { BaseCommodityServer } from '../base/commodity/commodity';
import { CommodityAttributeName } from './attribute/name';
import { CommodityAttributeDesc } from './attribute/desc';
import { CommodityAttributePrice } from './attribute/price';
import { CommodityAttributePhoto } from './attribute/photo';
import { CommodityAttributeColor } from './attribute/color';
import { CommodityCategoryService } from './commodity-options/category';
import { CommodityClassificationService } from './commodity-options/classification';
import { CommodityMaterialService } from './commodity-options/material';
import { CommodityModelService } from './commodity-options/model';
import { CommodityPlaceService } from './commodity-options/place';
import { CommodityRuiwuService } from './commodity-options/ruiwu';
import { CommodityShapeService } from './commodity-options/shape';
import { CommoditySpecificationService } from './commodity-options/specification';
import { CommodityStyleService } from './commodity-options/style';
import { CommodityTechniqueService } from './commodity-options/technique';
import { CommodityThemeService } from './commodity-options/theme';
import { CommodityTypeService } from './commodity-options/type';
import { CommodityUseService } from './commodity-options/use';

import { CommodityOptionService } from './commodityOption';
import { SellerService } from 'src/service/user/seller';

@Provide()
export class CommodityCommodityService {

  @Inject()
  baseCommodityServer: BaseCommodityServer;

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
  commodityCategoryService: CommodityCategoryService;

  @Inject()
  commodityClassificationService: CommodityClassificationService;

  @Inject()
  commodityMaterialService: CommodityMaterialService;

  @Inject()
  commodityModelService: CommodityModelService;

  @Inject()
  commodityPlaceService: CommodityPlaceService;

  @Inject()
  commodityRuiwuService: CommodityRuiwuService;

  @Inject()
  commodityShapeService: CommodityShapeService;

  @Inject()
  commoditySpecificationService: CommoditySpecificationService;

  @Inject()
  commodityStyleService: CommodityStyleService;

  @Inject()
  commodityTechniqueService: CommodityTechniqueService;

  @Inject()
  commodityThemeService: CommodityThemeService;

  @Inject()
  commodityTypeService: CommodityTypeService;

  @Inject()
  commodityUseService: CommodityUseService;

  @Inject()
  commodityOptionService: CommodityOptionService;

  @Inject()
  sellerService: SellerService;


  // 编辑商品
  async edit(commodityId) {
    let commodity:any = {};
    const baseCommodityServer = await this.baseCommodityServer.BaseRetrieveCommodityId(commodityId);
    if(baseCommodityServer) {
      commodity = baseCommodityServer
      if(baseCommodityServer.seller) {
        commodity.seller = baseCommodityServer.seller;
      }
    }

    // const commoditySellerService =  await this.baseCommodityServer.retrieveCommodityId(commodityId);
    // // console.log("edit commodityUseService", commodityUseService)
    // if(commodityUseService) {
    //   commodity.uses = commodityUseService.data;
    // }

    const commodityAttributeColor =  await this.commodityAttributeColor.retrieveCommodityId(commodityId);
    // console.log("edit commodityAttributeColor", commodityAttributeColor)
    if(commodityAttributeColor) {
      commodity.colors = commodityAttributeColor.data;
    }

    const commodityAttributeDesc =  await this.commodityAttributeDesc.retrieveCommodityId(commodityId);
    // console.log("edit commodityAttributeDesc", commodityAttributeDesc)
    if(commodityAttributeDesc) {
      commodity.desc = commodityAttributeDesc.data;
    }

    const commodityAttributeName =  await this.commodityAttributeName.retrieveCommodityId(commodityId);
    // console.log("edit commodityAttributeName", commodityAttributeName)
    if(commodityAttributeName) {
      commodity.name = commodityAttributeName.data;
    }

    const commodityAttributePhoto =  await this.commodityAttributePhoto.retrieveCommodityId(commodityId);
    // console.log("edit commodityAttributePhoto", commodityAttributePhoto)
    if(commodityAttributePhoto) {
      commodity.photos = commodityAttributePhoto.data;
    }

    const commodityAttributePrice =  await this.commodityAttributePrice.retrieveCommodityId(commodityId);
    // console.log("edit commodityAttributePrice", commodityAttributePrice)
    if(commodityAttributePrice) {
      commodity.price = commodityAttributePrice.data;
    }


    const commodityCategoryService =  await this.commodityCategoryService.retrieveCommodityId(commodityId);
    // console.log("edit commodityCategoryService", commodityCategoryService)
    if(commodityCategoryService) {
      commodity.categorys = commodityCategoryService.data;
    }

    const commodityClassificationService =  await this.commodityClassificationService.retrieveCommodityId(commodityId);
    // console.log("edit commodityClassificationService", commodityClassificationService)
    if(commodityClassificationService) {
      commodity.classifications = commodityClassificationService.data;
    }

    const commodityMaterialService =  await this.commodityMaterialService.retrieveCommodityId(commodityId);
    // console.log("edit commodityMaterialService", commodityMaterialService)
    if(commodityMaterialService) {
      commodity.materials = commodityMaterialService.data;
    }

    const commodityModelService =  await this.commodityModelService.retrieveCommodityId(commodityId);
    // console.log("edit commodityModelService", commodityModelService)
    if(commodityModelService) {
      commodity.models = commodityModelService.data;
    }

    const commodityPlaceService =  await this.commodityPlaceService.retrieveCommodityId(commodityId);
    // console.log("edit commodityPlaceService", commodityPlaceService)
    if(commodityPlaceService) {
      commodity.places = commodityPlaceService.data;
    }

    const commodityRuiwuService =  await this.commodityRuiwuService.retrieveCommodityId(commodityId);
    // console.log("edit commodityRuiwuService", commodityRuiwuService)
    if(commodityRuiwuService) {
      commodity.ruiwus = commodityRuiwuService.data;
    }

    const commodityShapeService =  await this.commodityShapeService.retrieveCommodityId(commodityId);
    // console.log("edit commodityShapeService", commodityShapeService)
    if(commodityShapeService) {
      commodity.shapes = commodityShapeService.data;
    }

    const commoditySpecificationService =  await this.commoditySpecificationService.retrieveCommodityId(commodityId);
    // console.log("edit commoditySpecificationService", commoditySpecificationService)
    if(commoditySpecificationService) {
      commodity.specifications = commoditySpecificationService.data;
    }

    const commodityStyleService =  await this.commodityStyleService.retrieveCommodityId(commodityId);
    // console.log("edit commodityStyleService", commodityStyleService)
    if(commodityStyleService) {
      commodity.styles = commodityStyleService.data;
    }

    const commodityTechniqueService =  await this.commodityTechniqueService.retrieveCommodityId(commodityId);
    // console.log("edit commodityTechniqueService", commodityTechniqueService)
    if(commodityTechniqueService) {
      commodity.techniques = commodityTechniqueService.data;
    }

    const commodityThemeService =  await this.commodityThemeService.retrieveCommodityId(commodityId);
    // console.log("edit commodityThemeService", commodityThemeService)
    if(commodityThemeService) {
      commodity.themes = commodityThemeService.data;
    }

    const commodityTypeService =  await this.commodityTypeService.retrieveCommodityId(commodityId);
    // console.log("edit commodityTypeService", commodityTypeService)
    if(commodityTypeService) {
      commodity.types = commodityTypeService.data;
    }

    const commodityUseService =  await this.commodityUseService.retrieveCommodityId(commodityId);
    // console.log("edit commodityUseService", commodityUseService)
    if(commodityUseService) {
      commodity.uses = commodityUseService.data;
    }






    if (commodity) {
      return {
        data: commodity,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }

  async buy(payload) {
    let commodity:any = {};
    const baseCommodityServer = await this.baseCommodityServer.BaseRetrieveCommodityId(payload.commodityId);
    // console.log("edit baseCommodityServer", baseCommodityServer)
    if(baseCommodityServer) {
      commodity = baseCommodityServer
    }

    // const commodityAttributeColor =  await this.commodityAttributeColor.retrieveCommodityId(commodityId);
    // // console.log("edit commodityAttributeColor", commodityAttributeColor)
    // if(commodityAttributeColor) {
    //   commodity.colors = commodityAttributeColor.data;
    // }

    const commodityAttributeDesc =  await this.commodityAttributeDesc.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityAttributeDesc", commodityAttributeDesc)
    if(commodityAttributeDesc) {
      commodity.desc = payload.isLocale ? commodityAttributeDesc.data[payload.locale] : commodityAttributeDesc.data;
    }

    const commodityAttributeName =  await this.commodityAttributeName.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityAttributeName", commodityAttributeName)
    if(commodityAttributeName) {
      commodity.name = payload.isLocale ? commodityAttributeName.data[payload.locale] : commodityAttributeName.data;
    }

    const commodityAttributePhoto =  await this.commodityAttributePhoto.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityAttributePhoto", commodityAttributePhoto)
    if(commodityAttributePhoto) {
      commodity.photos = commodityAttributePhoto.data;
    }

    const commodityAttributePrice =  await this.commodityAttributePrice.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityAttributePrice", commodityAttributePrice)
    if(commodityAttributePrice) {
      commodity.price = payload.isLocale ? commodityAttributePrice.data[payload.locale] : commodityAttributePrice.data;
    }


    const commodityCategoryService =  await this.commodityCategoryService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityCategoryService", commodityCategoryService)
    if(commodityCategoryService) {
      commodity.categorys = payload.isLocale ? commodityCategoryService.data.map(item => item.options[payload.locale]) : commodityCategoryService.data;
    }

    const commodityClassificationService =  await this.commodityClassificationService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityClassificationService", commodityClassificationService)
    if(commodityClassificationService) {
      commodity.classifications = payload.isLocale ? commodityClassificationService.data.map(item => item.options[payload.locale]) : commodityClassificationService.data;
    }

    const commodityMaterialService =  await this.commodityMaterialService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityMaterialService", commodityMaterialService)
    if(commodityMaterialService) {
      commodity.materials = payload.isLocale ? commodityMaterialService.data.map(item => item.options[payload.locale]) : commodityMaterialService.data;
    }

    const commodityModelService =  await this.commodityModelService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityModelService", commodityModelService)
    if(commodityModelService) {
      commodity.models = payload.isLocale ? commodityModelService.data.map(item => item.options[payload.locale]) : commodityModelService.data;
    }

    const commodityPlaceService =  await this.commodityPlaceService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityPlaceService", commodityPlaceService)
    if(commodityPlaceService) {
      commodity.places = payload.isLocale ? commodityPlaceService.data.map(item => item.options[payload.locale]) : commodityPlaceService.data;
    }

    const commodityRuiwuService =  await this.commodityRuiwuService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityRuiwuService", commodityRuiwuService)
    if(commodityRuiwuService) {
      commodity.ruiwus = payload.isLocale ? commodityRuiwuService.data.map(item => item.options[payload.locale]) : commodityRuiwuService.data;
    }

    const commodityShapeService =  await this.commodityShapeService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityShapeService", commodityShapeService)
    if(commodityShapeService) {
      commodity.shapes = payload.isLocale ? commodityShapeService.data.map(item => item.options[payload.locale]) : commodityShapeService.data;
    }

    const commoditySpecificationService =  await this.commoditySpecificationService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commoditySpecificationService", commoditySpecificationService)
    if(commoditySpecificationService) {
      commodity.specifications = payload.isLocale ? commoditySpecificationService.data.map(item => item.options[payload.locale]) : commoditySpecificationService.data;
    }

    const commodityStyleService =  await this.commodityStyleService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityStyleService", commodityStyleService)
    if(commodityStyleService) {
      commodity.styles = payload.isLocale ? commodityStyleService.data.map(item => item.options[payload.locale]) : commodityStyleService.data;
    }

    const commodityTechniqueService =  await this.commodityTechniqueService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityTechniqueService", commodityTechniqueService)
    if(commodityTechniqueService) {
      commodity.techniques = payload.isLocale ? commodityTechniqueService.data.map(item => item.options[payload.locale]) : commodityTechniqueService.data;
    }

    const commodityThemeService =  await this.commodityThemeService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityThemeService", commodityThemeService)
    if(commodityThemeService) {
      commodity.themes = payload.isLocale ? commodityThemeService.data.map(item => item.options[payload.locale]) : commodityThemeService.data;
    }

    const commodityTypeService =  await this.commodityTypeService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityTypeService", commodityTypeService)
    if(commodityTypeService) {
      commodity.types = payload.isLocale ? commodityTypeService.data.map(item => item.options[payload.locale]) : commodityTypeService.data;
    }

    const commodityUseService =  await this.commodityUseService.retrieveCommodityId(payload.commodityId);
    // console.log("edit commodityUseService", commodityUseService)
    if(commodityUseService) {
      commodity.uses = payload.isLocale ? commodityUseService.data.map(item => item.options[payload.locale]) : commodityUseService.data;
    }




    if (commodity) {
      return {
        data: commodity,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }


  async clientSearch(payload) {
    const result = await this.searchs(payload);
    let data = result[0];
    let total = result[1];
    // console.log("clientSearch", data, total)
    if(data){
        for(let item of data) {
          const commodityAttributeName =  await this.commodityAttributeName.retrieveCommodityId(item.commodityId);
          if(commodityAttributeName) {
            item.name = commodityAttributeName.data;
          }
          // const commodityAttributeDesc =  await this.commodityAttributeDesc.retrieveCommodityId(item.commodityId);
          // if(commodityAttributeDesc) {
          //   item.desc = commodityAttributeDesc.data;
          // }
          const commodityAttributePrice =  await this.commodityAttributePrice.retrieveCommodityId(item.commodityId);
          if(commodityAttributePrice) {
            item.price = commodityAttributePrice.data;
          }
          // const commodityAttributeColor =  await this.commodityAttributeColor.retrieveCommodityId(item.commodityId);
          // if(commodityAttributeColor) {
          //   item.colors = commodityAttributeColor.data;
          // }


          const commoditySeller:any =  await this.retrieveSeller(item.commodityId);
          if(commoditySeller) {
            if(commoditySeller.data.seller) {
              const commodityAttributeSeller =  await this.sellerService.sellerIdFind(commoditySeller.data.seller.sellerId);
              if(commodityAttributeSeller) {
                item.seller = commodityAttributeSeller.data;
              }

              let sellerFollowTotal = await this.sellerService.sellerFollowTotal(commoditySeller.data.seller.sellerId);
              if(sellerFollowTotal.success){
                item.sellerFollowTotal = sellerFollowTotal.data;
              }
            }
          }
        }

      if(payload.isLocale){
        data = this.searchFilter(payload.locale, data)
      }
      return {
        data: {
          list: data,
          total
        },
        success: true,
        code: 10009
      }

    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }


  async serverSearch(payload) {
    const result = await this.searchs(payload);
    let data = result[0];
    let total = result[1];
    if(data){
        for(let item of data) {
          const commodityAttributeName =  await this.commodityAttributeName.retrieveCommodityId(item.commodityId);
          if(commodityAttributeName) {
            item.name = commodityAttributeName.data;
          }
          const commodityAttributeDesc =  await this.commodityAttributeDesc.retrieveCommodityId(item.commodityId);
          if(commodityAttributeDesc) {
            item.desc = commodityAttributeDesc.data;
          }
          const commodityAttributePrice =  await this.commodityAttributePrice.retrieveCommodityId(item.commodityId);
          if(commodityAttributePrice) {
            item.price = commodityAttributePrice.data;
          }
          const commodityAttributeColor =  await this.commodityAttributeColor.retrieveCommodityId(item.commodityId);
          if(commodityAttributeColor) {
            item.colors = commodityAttributeColor.data;
          }


          const commoditySeller:any =  await this.retrieveSeller(item.commodityId);
          if(commoditySeller) {
            if(commoditySeller.data.seller) {
              const commodityAttributeSeller =  await this.sellerService.sellerIdFind(commoditySeller.data.seller.sellerId);
              if(commodityAttributeSeller.success) {
                item.seller = commodityAttributeSeller.data;
              }





            }
          }
        }

      if(payload.isLocale){
        data = this.searchFilter(payload.locale, data)
      }
      return {
        data: {
          list: data,
          total
        },
        success: true,
        code: 10009
      }

    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }




  // 创建商品
  async create(payload) {

    // 状态 state
    // 宽度 width
    // 高度 heigth
    const commodity = await this.createMetadata({
      state: payload.state || '0',
      width: payload.width || 0,
      height: payload.height || 0
    })

    if (!commodity.success) {
      return commodity
    }
    payload.commodityId = commodity.data.generatedMaps[0].commodityId;

    // 创建商品名称
    const commodityName = await this.commodityAttributeName.create({
      'zh-cn': payload.name['zh-cn'] || '',
      'en-us': payload.name['en-us'] || '',
      'ja-jp': payload.name['ja-jp'] || '',
      'fr-fr': payload.name['fr-fr'] || '',
      'es-es': payload.name['es-es'] || ''
    })
    if (!commodityName.success) {
      return commodityName
    }

    // 商品 关联 商品名称
    await this.relation({
      name: 'name',
      of: { commodityId: payload.commodityId },
      set: commodityName.data.identifiers[0].id
    })

    // 创建商品详情
    const commodityDesc = await this.commodityAttributeDesc.create({
      'zh-cn': payload.desc['zh-cn'] || '',
      'en-us': payload.desc['en-us'] || '',
      'ja-jp': payload.desc['ja-jp'] || '',
      'fr-fr': payload.desc['fr-fr'] || '',
      'es-es': payload.desc['es-es'] || ''
    })
    if (!commodityDesc.success) {
      return commodityDesc
    }

    // 商品 关联 商品详情
    await this.relation({
      name: 'desc',
      of: { commodityId: payload.commodityId },
      set: commodityDesc.data.identifiers[0].id
    })

    // 创建商品价格
    const commodityPrice = await this.commodityAttributePrice.create({
      'zh-cn': payload.price['zh-cn'] || 0,
      'en-us': payload.price['en-us'] || 0,
      'ja-jp': payload.price['ja-jp'] || 0,
      'fr-fr': payload.price['fr-fr'] || 0,
      'es-es': payload.price['es-es'] || 0
    })
    if (!commodityPrice.success) {
      return commodityPrice
    }

    // 商品 关联 商品价格
    await this.relation({
      name: 'price',
      of: { commodityId: payload.commodityId },
      set: commodityPrice.data.identifiers[0].id
    })


    // 创建商品图片
    for(let item of payload.photos){
      const commodityPhoto = await this.commodityAttributePhoto.create({
        src: item.url,
        name: item.name
      })
      if (!commodityPhoto.success) {
        return commodityPhoto
      }
      // 商品 关联 商品图片
      await this.relation({
        name: 'photos',
        of: { commodityId: payload.commodityId },
        add: commodityPhoto.data.identifiers[0].id
      })
    }

    // 创建商品颜色
    for(let item of payload.colors){
      const commodityColor = await this.commodityAttributeColor.create({
        startColor: item.startColor,
        startColorValue: item.startColor.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0),
        endColor: item.endColor,
        endColorValue: item.endColor.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0),
      })
      if (!commodityColor.success) {
        return commodityColor
      }

      await this.relation({
        name: 'colors',
        of: { commodityId: payload.commodityId },
        add: commodityColor.data.identifiers[0].id
      })
    }

    await this.relationCreate(payload);
    // 商品 关联 商家
    if(payload.seller){
      await this.relation({
        name: 'seller',
        of: commodity.data.identifiers[0].id,
        // of: { commodityId: payload.commodityId },
        set: { sellerId: payload.seller.sellerId }
      })
    }

    // return commodity
    if (commodity.data.identifiers[0].id) {
      return {
        data: {
          commodityId: payload.commodityId
        },
        success: true,
        code: 10003
      }
    } else {
      return {
        success: false,
        code: 10004
      }
    }

  }

  // 创建
  async createMetadata(payload) {
    const data = await this.baseCommodityServer.BaseCreate(payload);
    if (data.identifiers[0].id) {
      return {
        data: data,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }


  // 关联
  async relation(payload) {
    if(payload.set) {
      return await this.baseCommodityServer.BaseRelationSet({
        name: payload.name,
        of: payload.of,
        set: payload.set
      })
    }else if(payload.add) {
      return await this.baseCommodityServer.BaseRelationAdd({
        name: payload.name,
        of: payload.of,
        add: payload.add
      })
    }else if(payload.remove) {
      return await this.baseCommodityServer.BaseRelationRemove({
        name: payload.name,
        of: payload.of,
        remove: payload.remove
      })
    }

  }

  async relationCreate(payload) {
    if(payload.categorys && payload.categorys.length){
      await this.commodityCategoryService.relationCreate({
        relation: payload.categorys,
        commodityId: payload.commodityId
      })
    }

    if(payload.classifications && payload.classifications.length){
      await this.commodityClassificationService.relationCreate({
        relation: payload.classifications,
        commodityId: payload.commodityId
      })
    }

    if(payload.materials && payload.materials.length){
      await this.commodityMaterialService.relationCreate({
        relation: payload.materials,
        commodityId: payload.commodityId
      })
    }

    if(payload.models && payload.models.length){
      await this.commodityModelService.relationCreate({
        relation: payload.models,
        commodityId: payload.commodityId
      })
    }

    if(payload.places && payload.places.length){
      await this.commodityPlaceService.relationCreate({
        relation: payload.places,
        commodityId: payload.commodityId
      })
    }
    if(payload.ruiwus && payload.ruiwus.length){
      await this.commodityRuiwuService.relationCreate({
        relation: payload.ruiwus,
        commodityId: payload.commodityId
      })
    }
    if(payload.shapes && payload.shapes.length){
      await this.commodityShapeService.relationCreate({
        relation: payload.shapes,
        commodityId: payload.commodityId
      })
    }
    if(payload.specifications && payload.specifications.length){
      await this.commoditySpecificationService.relationCreate({
        relation: payload.specifications,
        commodityId: payload.commodityId
      })
    }
    if(payload.styles && payload.styles.length){
      await this.commodityStyleService.relationCreate({
        relation: payload.styles,
        commodityId: payload.commodityId
      })
    }
    if(payload.techniques && payload.techniques.length){
      await this.commodityTechniqueService.relationCreate({
        relation: payload.techniques,
        commodityId: payload.commodityId
      })
    }
    if(payload.themes && payload.themes.length){
      await this.commodityThemeService.relationCreate({
        relation: payload.themes,
        commodityId: payload.commodityId
      })
    }
    if(payload.types && payload.types.length){
      await this.commodityTypeService.relationCreate({
        relation: payload.types,
        commodityId: payload.commodityId
      })
    }
    if(payload.uses && payload.uses.length){
      await this.commodityUseService.relationCreate({
        relation: payload.uses,
        commodityId: payload.commodityId
      })
    }

  }






  async relationUpdate(payload) {

    if(payload.categorys && payload.categorys.length){
      await this.commodityCategoryService.relationUpdate({
        relation: payload.categorys,
        commodityId: payload.commodityId
      })
    }

    if(payload.classifications && payload.classifications.length){
      await this.commodityClassificationService.relationUpdate({
        relation: payload.classifications,
        commodityId: payload.commodityId
      })
    }

    if(payload.materials && payload.materials.length){
      await this.commodityMaterialService.relationUpdate({
        relation: payload.materials,
        commodityId: payload.commodityId
      })
    }

    if(payload.models && payload.models.length){
      await this.commodityModelService.relationUpdate({
        relation: payload.models,
        commodityId: payload.commodityId
      })
    }

    if(payload.places && payload.places.length){
      await this.commodityPlaceService.relationUpdate({
        relation: payload.places,
        commodityId: payload.commodityId
      })
    }
    if(payload.ruiwus && payload.ruiwus.length){
      await this.commodityRuiwuService.relationUpdate({
        relation: payload.ruiwus,
        commodityId: payload.commodityId
      })
    }
    if(payload.shapes && payload.shapes.length){
      await this.commodityShapeService.relationUpdate({
        relation: payload.shapes,
        commodityId: payload.commodityId
      })
    }
    if(payload.specifications && payload.specifications.length){
      await this.commoditySpecificationService.relationUpdate({
        relation: payload.specifications,
        commodityId: payload.commodityId
      })
    }
    if(payload.styles && payload.styles.length){
      await this.commodityStyleService.relationUpdate({
        relation: payload.styles,
        commodityId: payload.commodityId
      })
    }
    if(payload.techniques && payload.techniques.length){
      await this.commodityTechniqueService.relationUpdate({
        relation: payload.techniques,
        commodityId: payload.commodityId
      })
    }
    if(payload.themes && payload.themes.length){
      await this.commodityThemeService.relationUpdate({
        relation: payload.themes,
        commodityId: payload.commodityId
      })
    }
    if(payload.types && payload.types.length){
      await this.commodityTypeService.relationUpdate({
        relation: payload.types,
        commodityId: payload.commodityId
      })
    }
    if(payload.uses && payload.uses.length){
      await this.commodityUseService.relationUpdate({
        relation: payload.uses,
        commodityId: payload.commodityId
      })
    }



  }



  /**
   * 通过commodityId判断商品是否存在
   * @param payload
   *
   */
  async hasCommodityPhoto(payload) {
    const data = await this.baseCommodityServer.BaseHasRelation({
      type: 'photos',
      commodityId: payload.commodityId,
      id: payload.id
    });
    if (data) {
      return {
        data: data,
        success: true,
        code: 10501
      }
    } else {
      return {
        success: false,
        code: 10502
      }
    }
  }

  /**
   * 通过commodityId判断商品是否存在
   * @param payload
   *
   */
  async hasCommodityColor(payload) {
    const data = await this.baseCommodityServer.BaseHasRelation({
      type: 'colors',
      commodityId: payload.commodityId,
      id: payload.id
    });
    if (data) {
      return {
        data: data,
        success: true,
        code: 10501
      }
    } else {
      return {
        success: false,
        code: 10502
      }
    }
  }


  /**
   * 通过commodityId判断商品是否存在
   * @param payload
   *
   */
  async hasCommodityCategory(payload) {
    const data = await this.baseCommodityServer.BaseHasRelation({
      type: 'categorys',
      commodityId: payload.commodityId,
      id: payload.id
    });
    if (data) {
      return {
        data: data,
        success: true,
        code: 10501
      }
    } else {
      return {
        success: false,
        code: 10502
      }
    }
  }

  /**
   * 通过commodityId判断商品是否存在
   * @param payload
   *
   */
  async hasCommodityShape(payload) {
    const data = await this.baseCommodityServer.BaseHasRelation({
      type: 'shapes',
      commodityId: payload.commodityId,
      id: payload.id
    });
    if (data) {
      return {
        data: data,
        success: true,
        code: 10501
      }
    } else {
      return {
        success: false,
        code: 10502
      }
    }
  }

  /**
   * 通过commodityId判断商品是否存在
   * @param payload
   *
   */
  async hasCommodityTechnique(payload) {
    const data = await this.baseCommodityServer.BaseHasRelation({
      type: 'techniques',
      commodityId: payload.commodityId,
      id: payload.id
    });
    if (data) {
      return {
        data: data,
        success: true,
        code: 10501
      }
    } else {
      return {
        success: false,
        code: 10502
      }
    }
  }

  /**
   * 通过commodityId判断商品是否存在
   * @param payload
   *
   */
  async hasCommodityTheme(payload) {
    const data = await this.baseCommodityServer.BaseHasRelation({
      type: 'themes',
      commodityId: payload.commodityId,
      id: payload.id
    });
    if (data) {
      return {
        data: data,
        success: true,
        code: 10501
      }
    } else {
      return {
        success: false,
        code: 10502
      }
    }
  }


  /**
   * 查找商品-
   * @param payload
   * 通过商品名称
   * 通过商品id
   */
  async retrieve(payload) {
    let data = await this.baseCommodityServer.BaseRetrieve(payload.commodityId);

    if (data) {
      if(payload.isLocale) {
        const filterData = this.filter(payload.locale || 'zh-cn', [data]);
        data = filterData[0];
      }
      return {
        data: data,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }




  /**
   * 查找商品-所有商品
   * @param payload
   */
    async retrieveAll(payload) {
      // 商品Id查找商品
      let result = await this.baseCommodityServer.BaseRetrieveAll(payload);
      let data = result[0];
      let total = result[1];

      if (data) {
        if(payload.isLocale){
          data = this.searchFilter(payload.locale, data)
        }
        return {
          data: {
            list: data,
            total
          },
          success: true,
          code: 10009
        }
      } else {
        return {
          success: false,
          code: 10010
        }
      }
    }

    async retrievePhoto(payload) {
      let result = await this.baseCommodityServer.BaseRetrievePhoto(payload);
      let data = result[0];
      let total = result[1];

      if (data) {
        if(payload.isLocale){
          data = this.searchFilter(payload.locale, data)
        }
        return {
          data: {
            list: data,
            total
          },
          success: true,
          code: 10009
        }
      } else {
        return {
          success: false,
          code: 10010
        }
      }
    }

    async retrieveSeller(commodityId) {
      let data = await this.baseCommodityServer.BaseRetrieveSeller(commodityId);
      if (data) {
        return {
          data: data,
          success: true,
          code: 10009
        }
      } else {
        return {
          success: false,
          code: 10010
        }
      }
    }

    async retrieveCategory(id) {
      let data = await this.baseCommodityServer.BaseRetrieveCategory(id);

      if (data) {
        return {
          data: data,
          success: true,
          code: 10009
        }
      } else {
        return {
          success: false,
          code: 10010
        }
      }
    }


  /**
   * 筛选商品
   * @param  payload
   * @param type
   */
    filter(type, payload) {

      return payload.map(item => {
        let name = item.name ? item.name[type] : '';

        let desc = item.desc ? item.desc[type] : '';
        // let price = item.price ? item.price[type] : '';
        let price = item.price;
        let shapes = item.shapes ? item.shapes.map(item => {return {id: item.id, name: item[type]}}) : '';
        let themes = item.themes ? item.themes.map(item => {return {id: item.id, name: item[type]}})  : '';
        let categorys = item.categorys ? item.categorys.map(item => {return {id: item.id, name: item[type]}})  : '';
        let techniques = item.techniques ? item.techniques.map(item => {return {id: item.id, name: item[type]}})  : '';

        return {
          commodityId: item.commodityId,
          state: item.state,
          colors: item.colors,
          width: item.width,
          height: item.height,
          photos: item.photos,
          name,
          desc,
          price,
          shapes,
          themes,
          categorys,
          techniques,
          seller: item.seller|| '',
          createdDate: item.createdDate
        }
      })
    }


  // 搜索商品
  async search(payload) {
    let result = await this.baseCommodityServer.BaseSearch(payload);
    let data = result[0];
    let total = result[1];

    if (data) {
      if(payload.isLocale){
        data = this.filter(payload.locale, data)
      }
      return {
        data: {
          list: data,
          total
        },
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }

  async searchs(payload) {
    console.log("searchs payload", payload)
    let searchAll = true;

    if (payload.id) {
      searchAll = false;
    }

    if (payload.commodityId) {
      searchAll = false;
    }

    if (payload.sellerId) {
      searchAll = false;
    }

    if (payload.state) {
      searchAll = false;
    }

    if(payload.name){
      searchAll = false;
    }
    if(payload.desc){
      searchAll = false;
    }
    if(payload.price) {
      searchAll = false;

      let price = payload.price.split(',')

      if(price.length === 1) {
        payload.price = {
          min: 0,
          max: price[0]
        }
      }else if(price.length === 2) {
        payload.price = {
          min: price[0],
          max: price[1]
        }
      }

    }else{
      payload.price = ''
    }

    if(payload.colors){
      searchAll = false;
      if(payload.colors.substr(1) == '#'){
        payload.colors = payload.colors.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
      }else{
        payload.colors = payload.colors.toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0);
      }


    }


    if(payload.categorys){
      searchAll = false;
      if(typeof payload.categorys == 'string'){
        payload.categorys = payload.categorys.split(',');
      }
    }else{
      payload.categorys = []
    }

    if(payload.classifications){
      searchAll = false;
      if(typeof payload.classifications == 'string'){
        payload.classifications = payload.classifications.split(',');
      }
    }else{
      payload.classifications = []
    }

    if(payload.materials){
      searchAll = false;
      if(typeof payload.materials == 'string'){
        payload.materials = payload.materials.split(',');
      }
    }else{
      payload.materials = []
    }

    if(payload.models){
      searchAll = false;
      if(typeof payload.models == 'string'){
        payload.models = payload.models.split(',');
      }
    }else{
      payload.models = []
    }

    if(payload.places){
      searchAll = false;
      if(typeof payload.places == 'string'){
        payload.places = payload.places.split(',');
      }
    }else{
      payload.places = []
    }

    if(payload.ruiwus){
      searchAll = false;
      if(typeof payload.ruiwus == 'string'){
        payload.ruiwus = payload.ruiwus.split(',');
      }
    }else{
      payload.ruiwus = []
    }

    if(payload.shapes){
      searchAll = false;
      if(typeof payload.shapes == 'string'){
        payload.shapes = payload.shapes.split(',');
      }
    }else{
      payload.shapes = []
    }

    if(payload.specifications){
      searchAll = false;
      if(typeof payload.specifications == 'string'){
        payload.specifications = payload.specifications.split(',');
      }
    }else{
      payload.specifications = []
    }

    if(payload.techniques){
      searchAll = false;
      if(typeof payload.techniques == 'string'){
        payload.techniques = payload.techniques.split(',');
      }
    }else{
      payload.techniques = []
    }

    if(payload.themes){
      searchAll = false;
      if(typeof payload.themes == 'string'){
        payload.themes = payload.themes.split(',');
      }
    }else{
      payload.themes = []
    }

    if(payload.types){
      searchAll = false;
      if(typeof payload.types == 'string'){
        payload.types = payload.types.split(',');
      }
    }else{
      payload.types = []
    }

    if(payload.uses){
      searchAll = false;
      if(typeof payload.uses == 'string'){
        payload.uses = payload.uses.split(',');
      }
    }else{
      payload.uses = []
    }

    let result;
    console.log("searchAll", searchAll)
    if(searchAll){
      result = await this.baseCommodityServer.BaseRetrieveAll(payload);
    }else{
      result = await this.baseCommodityServer.BaseSearchs(payload);
    }
    // console.log("searchs result", result)


    return result;
    // let data = result[0];
    // let total = result[1];

    // if (data) {
    //   if(payload.isLocale){
    //     data = this.searchFilter(payload.locale, data)
    //   }
    //   return {
    //     data: {
    //       list: data,
    //       total
    //     },
    //     success: true,
    //     code: 10009
    //   }
    // } else {
    //   return {
    //     success: false,
    //     code: 10010
    //   }
    // }
  }

  searchFilter(locale, data) {
    return data.map((item) => {

      if(item.name){
        item.name = item.name[locale]
      }

      if(item.desc){
        item.desc = item.desc[locale]
      }

      if(item.price){
        item.price = item.price[locale]
      }

      if(item.photos) {
        item.photos = item.photos.map(item => item.src)
      }
      return item;
    });
  }

  // 删除商品

  async deleteCommodityId(commodityId) {
    const data = await this.baseCommodityServer.BaseDeleteCommodityId(commodityId);
    if (data.affected) {
      return {
        success: true,
        code: 10005
      }
    } else {
      return {
        success: false,
        code: 10006
      }
    }
  }
  // 删除全部商品
  async deleteAll() {
    const data = await this.baseCommodityServer.BaseDeleteAll();
    if (data.affected) {
      return {
        success: true,
        code: 10005
      }
    } else {
      return {
        success: false,
        code: 10006
      }
    }
  }

  async hasCommodity(commodityId) {
    const data = await this.baseCommodityServer.BaseHas(commodityId);
    if (data) {
      return {
        data: data,
        success: true,
        code: 10501
      }
    } else {
      return {
        success: false,
        code: 10502
      }
    }
  }



  async update(payload) {
    const data = await this.baseCommodityServer.BaseUpdate(payload);
    if (data.affected) {
      return {
        data: data,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }


  }


  async retrieveCommmoditySellerId(sellerId) {
    const data = await this.baseCommodityServer.baseRetrieveCommmodity(sellerId);
    if (data) {
      return {
        data: data,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }



}

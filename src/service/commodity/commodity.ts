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

  // 创建商品
  async create(payload) {
    console.log("create", payload)

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
    // console.log("商品 关联 商家", { commodityId: payload.commodityId, sellerId: payload.sellerId })
    // 商品 关联 商家
    if(payload.sellerId){
      await this.relation({
        name: 'seller',
        of: commodity.data.identifiers[0].id,
        // of: { commodityId: payload.commodityId },
        set: { sellerId: payload.sellerId }
      })
    }
    return commodity

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
    console.log("commodity retrieve", payload)
    let data = await this.baseCommodityServer.BaseRetrieve(payload.commodityId);
    console.log("commodity retrieve data", data)
    if(payload.isLocale) {
      const filterData = this.filter(payload.locale || 'zh-cn', [data]);
      data = filterData[0];
    }
    // console.log("data", data)
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
   * 查找商品-所有商品
   * @param payload
   */
    async retrieveAll(payload) {
      // 商品Id查找商品
      let result = await this.baseCommodityServer.BaseRetrieveAll(payload);
      console.log("retrieveAll", result)
      let data = result[0];
      let total = result[1];
      if(payload.isLocale){
        data = this.filter(payload.locale, data)
      }
      if (data) {
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

    async retrieveCategory(id) {
      let data = await this.baseCommodityServer.BaseRetrieveCategory(id);

      // console.log("data", data)
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
    // console.log("search", result)
    let data = result[0];
    let total = result[1];
    if(payload.isLocale){
      data = this.filter(payload.locale, data)
    }
    if (data) {
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






}

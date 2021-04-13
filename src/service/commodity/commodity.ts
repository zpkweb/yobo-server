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
      of: { commodityId: commodity.data.generatedMaps[0].commodityId },
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
      of: { commodityId: commodity.data.generatedMaps[0].commodityId },
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
      of: { commodityId: commodity.data.generatedMaps[0].commodityId },
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
        of: { commodityId: commodity.data.generatedMaps[0].commodityId },
        add: commodityPhoto.data.identifiers[0].id
      })
    }

    // 创建商品颜色
    for(let item of payload.colors){
      const commodityColor = await this.commodityAttributeColor.create({
        name: item.name,
        value: item.name.substr(1).toLowerCase().split('').reduce( (result, ch) => result !== '#' ? result * 16 + '0123456789abcdefgh'.indexOf(ch) : 0, 0)
      })
      if (!commodityColor.success) {
        return commodityColor
      }
      // 商品 关联 商品图片
      await this.relation({
        name: 'colors',
        of: { commodityId: commodity.data.generatedMaps[0].commodityId },
        add: commodityColor.data.identifiers[0].id
      })
    }



    console.log("commodity", commodity.data)


    // 商品 关联 商品形状
    // for(let item of payload.shapes){
    //   await this.relation({
    //     name: 'shapes',
    //     of: { commodityId: commodity.data.generatedMaps[0].commodityId },
    //     add: item.id
    //   })
    // }


    // 商品 关联 商品主题
    // for(let item of payload.themes){
    //   await this.relation({
    //     name: 'themes',
    //     of: { commodityId: commodity.data.generatedMaps[0].commodityId },
    //     add: item.id
    //   })
    // }


    // 商品 关联 商品类别
    // for(let item of payload.categorys){
    //   await this.relation({
    //     name: 'categorys',
    //     of: { commodityId: commodity.data.generatedMaps[0].commodityId },
    //     add: item.id
    //   })
    // }


    // 商品 关联 商品手法
    // for(let item of payload.techniques){
    //   await this.relation({
    //     name: 'techniques',
    //     of: { commodityId: commodity.data.generatedMaps[0].commodityId },
    //     add: item.id
    //   })
    // }



    for(let item of payload.categorys){
      const categorys = await this.commodityCategoryService.create({
        commodityName: payload.name['zh-cn'],
        categoryName: item['zh-cn']
      })
      if (!categorys.success) {
        return categorys
      }
      await this.commodityCategoryService.relation({
        name: 'commoditys',
        of: categorys.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityCategoryService.relation({
        name: 'categorys',
        of:  categorys.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.classifications){
      const classifications = await this.commodityClassificationService.create({
        commodityName: payload.name['zh-cn'],
        classificationName: item['zh-cn']
      })
      if (!classifications.success) {
        return classifications
      }
      await this.commodityClassificationService.relation({
        name: 'commoditys',
        of: classifications.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityClassificationService.relation({
        name: 'classifications',
        of:  classifications.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.materials){
      const materials = await this.commodityMaterialService.create({
        commodityName: payload.name['zh-cn'],
        materialName: item['zh-cn']
      })
      if (!materials.success) {
        return materials
      }
      await this.commodityMaterialService.relation({
        name: 'commoditys',
        of: materials.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityMaterialService.relation({
        name: 'materials',
        of:  materials.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.models){
      const models = await this.commodityModelService.create({
        commodityName: payload.name['zh-cn'],
        modelName: item['zh-cn']
      })
      if (!models.success) {
        return models
      }
      await this.commodityModelService.relation({
        name: 'commoditys',
        of: models.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityModelService.relation({
        name: 'models',
        of:  models.data.identifiers[0].id,
        set: item.id
      })
    }
    console.log("payload.places", payload.places)
    for(let item of payload.places){
      const places = await this.commodityPlaceService.create({
        commodityName: payload.name['zh-cn'],
        placeName: item['zh-cn']
      })
      console.log("places", places)
      if (!places.success) {
        return places
      }
      await this.commodityPlaceService.relation({
        name: 'commoditys',
        of: places.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityPlaceService.relation({
        name: 'places',
        of:  places.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.ruiwus){
      const ruiwus = await this.commodityRuiwuService.create({
        commodityName: payload.name['zh-cn'],
        ruiwuName: item['zh-cn']
      })
      if (!ruiwus.success) {
        return ruiwus
      }
      await this.commodityRuiwuService.relation({
        name: 'commoditys',
        of: ruiwus.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityRuiwuService.relation({
        name: 'ruiwus',
        of:  ruiwus.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.shapes){
      const shapes = await this.commodityShapeService.create({
        commodityName: payload.name['zh-cn'],
        shapeName: item['zh-cn']
      })
      if (!shapes.success) {
        return shapes
      }
      await this.commodityShapeService.relation({
        name: 'commoditys',
        of: shapes.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityShapeService.relation({
        name: 'shapes',
        of:  shapes.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.specifications){
      const specifications = await this.commoditySpecificationService.create({
        commodityName: payload.name['zh-cn'],
        specificationName: item['zh-cn']
      })
      if (!specifications.success) {
        return specifications
      }
      await this.commoditySpecificationService.relation({
        name: 'commoditys',
        of: specifications.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commoditySpecificationService.relation({
        name: 'specifications',
        of:  specifications.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.styles){
      const styles = await this.commodityStyleService.create({
        commodityName: payload.name['zh-cn'],
        styleName: item['zh-cn']
      })
      if (!styles.success) {
        return styles
      }
      await this.commodityStyleService.relation({
        name: 'commoditys',
        of: styles.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityStyleService.relation({
        name: 'styles',
        of:  styles.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.techniques){
      const techniques = await this.commodityTechniqueService.create({
        commodityName: payload.name['zh-cn'],
        techniqueName: item['zh-cn']
      })
      if (!techniques.success) {
        return techniques
      }
      await this.commodityTechniqueService.relation({
        name: 'commoditys',
        of: techniques.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityTechniqueService.relation({
        name: 'techniques',
        of:  techniques.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.themes){
      const themes = await this.commodityThemeService.create({
        commodityName: payload.name['zh-cn'],
        themeName: item['zh-cn']
      })
      if (!themes.success) {
        return themes
      }
      await this.commodityThemeService.relation({
        name: 'commoditys',
        of: themes.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityThemeService.relation({
        name: 'themes',
        of:  themes.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.types){
      const types = await this.commodityTypeService.create({
        commodityName: payload.name['zh-cn'],
        typeName: item['zh-cn']
      })
      if (!types.success) {
        return types
      }
      await this.commodityTypeService.relation({
        name: 'commoditys',
        of: types.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityTypeService.relation({
        name: 'types',
        of:  types.data.identifiers[0].id,
        set: item.id
      })
    }
    for(let item of payload.uses){
      const uses = await this.commodityUseService.create({
        commodityName: payload.name['zh-cn'],
        useName: item['zh-cn']
      })
      if (!uses.success) {
        return uses
      }
      await this.commodityUseService.relation({
        name: 'commoditys',
        of: uses.data.identifiers[0].id,
        set: { commodityId: commodity.data.generatedMaps[0].commodityId }
      })
      await this.commodityUseService.relation({
        name: 'uses',
        of:  uses.data.identifiers[0].id,
        set: item.id
      })
    }



    console.log("商品 关联 商家", { commodityId: commodity.data.generatedMaps[0].commodityId, sellerId: payload.sellerId })
    // 商品 关联 商家
    if(payload.sellerId){
      await this.relation({
        name: 'seller',
        of: commodity.data.identifiers[0].id,
        // of: { commodityId: commodity.data.generatedMaps[0].commodityId },
        set: { sellerId: payload.sellerId }
      })
    }



    return commodity


    // const data = await this.baseCommodityServer.BaseRetrieveCommodityId({
    //   commodityId: commodity.data.generatedMaps[0].commodityId
    // })
    // if (data) {
    //   return {
    //     data: data,
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
    console.log("retrieve", payload)
    let data = await this.baseCommodityServer.BaseRetrieve(payload.commodityId);
    console.log("data", data)
    if(payload.isLocale) {
      const filterData = this.filter(payload.locale || 'zh-cn', [data]);
      data = filterData[0];
    }
    console.log("data", data)
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

      console.log("data", data)
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
    console.log("search", result)
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

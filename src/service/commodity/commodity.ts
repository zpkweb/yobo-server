import { Inject, Provide } from '@midwayjs/decorator';
import { BaseCommodityServer } from '../base/commodity/commodity';
import { CommodityAttributeName } from './attribute/name';
import { CommodityAttributeDesc } from './attribute/desc';
import { CommodityAttributePrice } from './attribute/price';
import { CommodityAttributePhoto } from './attribute/photo';
import { CommodityAttributeColor } from './attribute/color';
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
      'zh-cn': payload.price['zh-cn'],
      'en-us': payload.price['en-us'],
      'ja-jp': payload.price['ja-jp'],
      'fr-fr': payload.price['fr-fr'],
      'es-es': payload.price['es-es']
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
    for(let item of payload.shapes){
      await this.relation({
        name: 'shapes',
        of: { commodityId: commodity.data.generatedMaps[0].commodityId },
        add: item.id
      })
    }


    // 商品 关联 商品主题
    for(let item of payload.themes){
      await this.relation({
        name: 'themes',
        of: { commodityId: commodity.data.generatedMaps[0].commodityId },
        add: item.id
      })
    }


    // 商品 关联 商品类别
    for(let item of payload.categorys){
      await this.relation({
        name: 'categorys',
        of: { commodityId: commodity.data.generatedMaps[0].commodityId },
        add: item.id
      })
    }


    // 商品 关联 商品手法
    for(let item of payload.techniques){
      await this.relation({
        name: 'techniques',
        of: { commodityId: commodity.data.generatedMaps[0].commodityId },
        add: item.id
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
  async delete(payload) {
    const data = await this.baseCommodityServer.BaseDelete(payload.commodityId);
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

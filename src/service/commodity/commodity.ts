import { Inject, Provide } from '@midwayjs/decorator';
import { BaseCommodityServer } from '../base/commodity/commodity';
import { CommodityAttributeName } from './attribute/name';
import { CommodityAttributeDesc } from './attribute/desc';
import { CommodityAttributePrice } from './attribute/price';
import { CommodityAttributePhoto } from './attribute/photo';
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

  // 创建商品
  async create(payload) {
    console.log("create", payload)

    // 状态 state
    // 颜色 colors
    // 大小 size
    const commodity = await this.createMetadata({
      state: payload.state || '0',
      colors: payload.state || ['000', 'fff'],
      size: payload.size || []
    })

    if (!commodity.success) {
      return commodity
    }

    // 创建商品名称
    const commodityName = await this.commodityAttributeName.create({
      'zh-cn': payload.name['zh-cn'],
      'en-us': payload.name['en-us'],
      'ja-jp': payload.name['ja-jp'],
      'fr-fr': payload.name['fr-fr']
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
      'zh-cn': payload.desc['zh-cn'],
      'en-us': payload.desc['en-us'],
      'ja-jp': payload.desc['ja-jp'],
      'fr-fr': payload.desc['fr-fr']
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
      'fr-fr': payload.price['fr-fr']
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
      const commodityPhoto = await this.commodityAttributePhoto.create(item)
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



    console.log("commodity", commodity.data)
    // 商品 关联 商品形状
    await this.relation({
      name: 'shapes',
      of: { commodityId: commodity.data.generatedMaps[0].commodityId },
      add: payload.shape
    })

    // 商品 关联 商品主题
    await this.relation({
      name: 'themes',
      of: { commodityId: commodity.data.generatedMaps[0].commodityId },
      add: payload.theme
    })

    // 商品 关联 商品类别
    await this.relation({
      name: 'categorys',
      of: { commodityId: commodity.data.generatedMaps[0].commodityId },
      add: payload.category
    })

    // 商品 关联 商品手法
    await this.relation({
      name: 'techniques',
      of: { commodityId: commodity.data.generatedMaps[0].commodityId },
      add: payload.technique
    })

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

  //







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

    if(!payload.edit) {
      const filterData = this.filter(payload.lang || 'zh-cn', [data]);
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
      const data = await this.baseCommodityServer.BaseRetrieveAll()
      console.log("retrieveAll", data)
      const filterData = this.filter(payload.lang || 'zh-cn', data)
      if (data) {
        return {
          data: filterData,
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
        let price = item.price ? item.price[type] : '';

        let shapes = item.shapes ? item.shapes.map(item => {return {id: item.id, name: item[type]}}) : '';
        let themes = item.themes ? item.themes.map(item => {return {id: item.id, name: item[type]}})  : '';
        let categorys = item.categorys ? item.categorys.map(item => {return {id: item.id, name: item[type]}})  : '';
        let techniques = item.techniques ? item.techniques.map(item => {return {id: item.id, name: item[type]}})  : '';

        return {
          commodityId: item.commodityId,
          state: item.state,
          colors: item.colors,
          size: item.size,
          name,
          desc,
          price,
          photos: item.photos,
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

  async hasId(commodityId) {
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

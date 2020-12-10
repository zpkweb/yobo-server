import { Inject, Provide } from '@midwayjs/decorator';
import { BaseCommodityServer } from '../base/commodity/commodity';
import { BaseCommodityNameServer } from '../base/commodity/attribute/name';
import { BaseCommodityDescServer } from '../base/commodity/attribute/desc';
import { BaseCommodityPriceServer } from '../base/commodity/attribute/price';
import { BaseCommodityPhotoServer } from '../base/commodity/attribute/photo';
@Provide()
export class CommodityCommodityService {

  @Inject()
  baseCommodityServer: BaseCommodityServer;

  @Inject()
  baseCommodityNameServer: BaseCommodityNameServer;

  @Inject()
  baseCommodityDescServer: BaseCommodityDescServer;

  @Inject()
  baseCommodityPriceServer: BaseCommodityPriceServer;

  @Inject()
  baseCommodityPhotoServer: BaseCommodityPhotoServer;

  // 创建商品
  async create(payload) {
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
    const commodityName = await this.createName({
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
      of: commodity.data.identifiers[0].id,
      set: commodityName.data.identifiers[0].id
    })

    // 创建商品详情
    const commodityDesc = await this.createDesc({
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
      of: commodity.data.identifiers[0].id,
      set: commodityDesc.data.identifiers[0].id
    })

    // 创建商品价格
    const commodityPrice = await this.createPrice({
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
      of: commodity.data.identifiers[0].id,
      set: commodityPrice.data.identifiers[0].id
    })


    // 创建商品图片
    // for(let i=0; i< payload.photos.length; i++){
      for(let item of payload.photos){
      const commodityPhoto = await this.createPhoto(item)
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




    // 商品 关联 商品形状
    await this.relation({
      name: 'shape',
      of: commodity.data.identifiers[0].id,
      set: payload.shape
    })

    // 商品 关联 商品主题
    await this.relation({
      name: 'theme',
      of: commodity.data.identifiers[0].id,
      set: payload.theme
    })

    // 商品 关联 商品类别
    await this.relation({
      name: 'category',
      of: commodity.data.identifiers[0].id,
      set: payload.category
    })

    // 商品 关联 商品手法
    await this.relation({
      name: 'technique',
      of: commodity.data.identifiers[0].id,
      set: payload.technique
    })

    // 商品Id查找商品
    return await this.retrieveId({
      commodityId: commodity.data.generatedMaps[0].commodityId
    })
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

  // 创建名称
  async createName(payload) {
    const data = await this.baseCommodityNameServer.BaseCreate(payload);
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

  // 创建详情
  async createDesc(payload) {
    const data = await this.baseCommodityDescServer.BaseCreate(payload);
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

  // 创建价格
  async createPrice(payload) {
    const data = await this.baseCommodityPriceServer.BaseCreate(payload);
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

  // 创建图片
  async createPhoto(payload) {
    const data = await this.baseCommodityPhotoServer.BaseCreate(payload);
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
   * 查找商品-通过商品名称
   * @param payload
   */
  async retrieve(payload) {
    const data = await this.baseCommodityNameServer.BaseRetrieve(payload);
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
   * 查找商品-通过商品id
   * @param payload
   */
  async retrieveId(payload) {
    // 商品Id查找商品
    const data = await this.baseCommodityServer.BaseRetrieveId({
      commodityId: payload.commodityId
    })
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
    async retrieveAll() {
      // 商品Id查找商品
    const data = await this.baseCommodityServer.BaseRetrieveAll()
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

  // 搜索商品
  async search(payload) {

  }

  // 删除商品
  async delete() {

  }

  // 更新商品
  async update() {

  }

}

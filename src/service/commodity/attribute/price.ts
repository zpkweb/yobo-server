import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityPriceService } from '../../base/commodity/attribute/price';

@Provide()
export class CommodityAttributePrice {

  @Inject()
  baseCommodityPriceService: BaseCommodityPriceService;

  // 创建价格
  async create(payload) {
    const data = await this.baseCommodityPriceService.BaseCreate(payload);
    if (data.identifiers[0].id) {
      return {
        data: data,
        id: data.identifiers[0].id,
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
   * 通过commodityId判断商品是否存在
   * @param payload
   *
   */
  async hasId(commodityId) {
    const data = await this.baseCommodityPriceService.BaseHas(commodityId);
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

  async retrieveCommodityId(commodityId) {
    const data = await this.baseCommodityPriceService.BaseRetrieveCommodityId(commodityId);
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


  // 更新商品价格
  async update(payload) {
    const data = await this.baseCommodityPriceService.BaseUpdate(payload);
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

  async updatePrice(payload) {
    const updatePrice = await this.hasId(payload.commodityId);
    if(updatePrice.success){
      return await this.update(payload)
    }else{
      return await this.create(payload)
    }
  }

  async search(payload) {
    const data = await this.baseCommodityPriceService.BaseSearch(payload);
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

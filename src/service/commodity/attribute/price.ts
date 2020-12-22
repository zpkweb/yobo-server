import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityPriceServer } from '../../base/commodity/attribute/price';

@Provide()
export class CommodityAttributePrice {

  @Inject()
  baseCommodityPriceServer: BaseCommodityPriceServer;

  // 创建价格
  async create(payload) {
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

  /**
   * 通过commodityId判断商品是否存在
   * @param payload
   *
   */
  async hasId(commodityId) {
    const data = await this.baseCommodityPriceServer.BaseHas(commodityId);
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
    const data = await this.baseCommodityPriceServer.BaseUpdate(payload);
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

}

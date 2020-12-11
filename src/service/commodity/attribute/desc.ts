import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityDescServer } from '../../base/commodity/attribute/desc';

@Provide()
export class CommodityAttributeDesc {

  @Inject()
  baseCommodityDescServer: BaseCommodityDescServer;

  // 创建详情
  async create(payload) {
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

  /**
   * 通过commodityId判断商品是否存在
   * @param payload
   *
   */
  async hasId(payload) {
    const data = await this.baseCommodityDescServer.BaseHas(payload.commodityId);
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

  // 更新商品详情
  async update(payload) {
    const data = await this.baseCommodityDescServer.BaseUpdate(payload);
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

  async updateDesc(payload) {
    const updateDesc = await this.hasId({
      commodityId: payload.commodityId
    });
    if(updateDesc.success){
      return await this.update(payload)
    }else{
      return await this.create(payload)
    }
  }

}

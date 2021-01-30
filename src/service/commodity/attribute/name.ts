import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityNameServer } from '../../base/commodity/attribute/name';

@Provide()
export class CommodityAttributeName {

  @Inject()
  baseCommodityNameServer: BaseCommodityNameServer;

  // 创建名称
  async create(payload) {
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

  /**
   * 通过name判断商品是否存在
   * @param payload
   *
   */
  async hasName(payload) {
    const data = await this.baseCommodityNameServer.BaseRetrieve({
      'zh-cn': payload['zh-cn'] || '',
      'en-us': payload['en-us'] || '',
      'ja-jp': payload['ja-jp'] || '',
      'fr-fr': payload['fr-fr'] || '',
      'es-es': payload['es-es'] || ''
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
  async hasId(commodityId) {
    const data = await this.baseCommodityNameServer.BaseHas(commodityId);
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

  // 更新商品名称
  async update(payload) {
    const data = await this.baseCommodityNameServer.BaseUpdate(payload);
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

  async updateName(payload) {
    const updateName = await this.hasId(payload.commodityId);
    if(updateName.success){
      return await this.update(payload)
    }else{
      return await this.create(payload)
    }
  }

}

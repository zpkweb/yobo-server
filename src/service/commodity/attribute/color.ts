import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityColorServer } from '../../base/commodity/attribute/color';

@Provide()
export class CommodityAttributeColor {

  @Inject()
  baseCommodityColorServer: BaseCommodityColorServer;

  // 创建颜色
  async create(payload) {
  //   function hexToDec(hex) {
  //     return hex.toLowerCase().split('').reduce( (result, ch) =>
  //         result * 16 + '0123456789abcdefgh'.indexOf(ch), 0);
  // }
    // const hex = await payload.name.toLowerCase().split('').reduce( (result, ch) => result * 16 + '0123456789abcdefgh'.indexOf(ch), 0);

    const data = await this.baseCommodityColorServer.BaseCreate(payload);
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
    const data = await this.baseCommodityColorServer.BaseHas(commodityId);
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
   * 通过commodityId获取商品
   * @param payload
   */
    async getCommodity(commodityId) {
      const data = await this.baseCommodityColorServer.BaseRetrieveCommodityId(commodityId);
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


  // 更新商品颜色
  async update(payload) {
    const data = await this.baseCommodityColorServer.BaseUpdate(payload);
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

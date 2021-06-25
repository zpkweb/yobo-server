import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityColorService } from '../../base/commodity/attribute/color';

@Provide()
export class CommodityAttributeColor {

  @Inject()
  baseCommodityColorService: BaseCommodityColorService;

  // 创建颜色
  async create(payload) {
  //   function hexToDec(hex) {
  //     return hex.toLowerCase().split('').reduce( (result, ch) =>
  //         result * 16 + '0123456789abcdefgh'.indexOf(ch), 0);
  // }
    // const hex = await payload.name.toLowerCase().split('').reduce( (result, ch) => result * 16 + '0123456789abcdefgh'.indexOf(ch), 0);

    const data = await this.baseCommodityColorService.BaseCreate(payload);
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
    const data = await this.baseCommodityColorService.BaseHas(commodityId);
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
    async getCommodityId(commodityId) {
      const data = await this.baseCommodityColorService.BaseRetrieveCommodityId(commodityId);
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
      const data = await this.baseCommodityColorService.BaseRetrieveCommodityId(commodityId);
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
    const data = await this.baseCommodityColorService.BaseUpdate(payload);
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

  async search(payload) {
    const data = await this.baseCommodityColorService.BaseSearch(payload);
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

  async updateColor(payload) {
    const updateDesc = await this.hasId(payload.commodityId);
    if(updateDesc.success){
      return await this.update(payload)
    }else{
      return await this.create(payload)
    }
  }


}

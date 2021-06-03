import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityVideoServer } from '../../base/commodity/attribute/video';

@Provide()
export class CommodityAttributeVideo {

  @Inject()
  baseCommodityVideoServer: BaseCommodityVideoServer;

  // 创建
  async create(payload) {
    const data = await this.baseCommodityVideoServer.BaseCreate(payload);
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
    const data = await this.baseCommodityVideoServer.BaseHas(commodityId);
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
      const data = await this.baseCommodityVideoServer.BaseRetrieveCommodityId(commodityId);
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
      const data = await this.baseCommodityVideoServer.BaseRetrieveCommodityId(commodityId);
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


  // 更新商品
  async update(payload) {
    const data = await this.baseCommodityVideoServer.BaseUpdate(payload);
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

  async delete(id) {
    const data = await this.baseCommodityVideoServer.BaseDelete(id);
    if (data.affected) {
      return {
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

import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityDetailsService } from 'src/service/base/commodity/attribute/details';

@Provide()
export class CommodityAttributeDetails {

  @Inject()
  baseCommodityDetailsService: BaseCommodityDetailsService;

  // 创建
  async create(payload) {
    const data = await this.baseCommodityDetailsService.BaseCreate(payload);
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
   * 通过commodityId判断是否存在
   * @param payload
   *
   */
  async hasId(commodityId) {
    const data = await this.baseCommodityDetailsService.BaseHas(commodityId);
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
    const data = await this.baseCommodityDetailsService.BaseRetrieveCommodityId(commodityId);
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

  async search(payload) {
    const data = await this.baseCommodityDetailsService.BaseSearch(payload);
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

  // 更新
  async update(payload) {
    const data = await this.baseCommodityDetailsService.BaseUpdate(payload);
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

  async updateDetails(payload) {
    const updateDetails = await this.hasId(payload.commodityId);
    if(updateDetails.success){
      return await this.update(payload)
    }else{
      return await this.create(payload)
    }
  }

}

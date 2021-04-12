import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityRuiwuServer } from 'src/service/base/commodity/commodity-options/ruiwu';

@Provide()
export class CommodityRuiwuService {

  @Inject()
  baseCommodityRuiwuServer: BaseCommodityRuiwuServer;

  async create(payload) {
    const data = await this.baseCommodityRuiwuServer.BaseCreate(payload);
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

  async retrieve(payload) {
    const data = await this.baseCommodityRuiwuServer.BaseRetrieve(payload);
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

  async relation(payload) {
    return await this.baseCommodityRuiwuServer.BaseRelationSet(payload)
  }

}

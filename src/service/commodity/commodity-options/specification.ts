import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommoditySpecificationServer } from 'src/service/base/commodity/commodity-options/specification';

@Provide()
export class CommoditySpecificationService {

  @Inject()
  baseCommoditySpecificationServer: BaseCommoditySpecificationServer;

  async create(payload) {
    const data = await this.baseCommoditySpecificationServer.BaseCreate(payload);
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
    const data = await this.baseCommoditySpecificationServer.BaseRetrieve(payload);
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
    return await this.baseCommoditySpecificationServer.BaseRelationSet(payload)
  }

}

import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityClassificationServer } from 'src/service/base/commodity/commodity-options/classification';

@Provide()
export class CommodityClassificationService {

  @Inject()
  baseCommodityClassificationServer: BaseCommodityClassificationServer;

  async create(payload) {
    const data = await this.baseCommodityClassificationServer.BaseCreate(payload);
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
    const data = await this.baseCommodityClassificationServer.BaseRetrieve(payload);
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
    return await this.baseCommodityClassificationServer.BaseRelationSet(payload)
  }

}

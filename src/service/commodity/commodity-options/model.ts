import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityModelServer } from 'src/service/base/commodity/commodity-options/model';

@Provide()
export class CommodityModelService {

  @Inject()
  baseCommodityModelServer: BaseCommodityModelServer;

  async create(payload) {
    const data = await this.baseCommodityModelServer.BaseCreate(payload);
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
    const data = await this.baseCommodityModelServer.BaseRetrieve(payload);
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
    return await this.baseCommodityModelServer.BaseRelationSet(payload)
  }

}

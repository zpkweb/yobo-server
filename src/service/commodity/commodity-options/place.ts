import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityPlaceServer } from 'src/service/base/commodity/commodity-options/place';

@Provide()
export class CommodityPlaceService {

  @Inject()
  baseCommodityPlaceServer: BaseCommodityPlaceServer;

  async create(payload) {
    const data = await this.baseCommodityPlaceServer.BaseCreate(payload);
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
    const data = await this.baseCommodityPlaceServer.BaseRetrieve(payload);
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
    return await this.baseCommodityPlaceServer.BaseRelationSet(payload)
  }

}

import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityShapeServer } from 'src/service/base/commodity/commodity-options/shape';

@Provide()
export class CommodityShapeService {

  @Inject()
  baseCommodityShapeServer: BaseCommodityShapeServer;

  async create(payload) {
    const data = await this.baseCommodityShapeServer.BaseCreate(payload);
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
    const data = await this.baseCommodityShapeServer.BaseRetrieve(payload);
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
    return await this.baseCommodityShapeServer.BaseRelationSet(payload)
  }

}

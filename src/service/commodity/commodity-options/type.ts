import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityTypeServer } from 'src/service/base/commodity/commodity-options/type';

@Provide()
export class CommodityTypeService {

  @Inject()
  baseCommodityTypeServer: BaseCommodityTypeServer;

  async create(payload) {
    const data = await this.baseCommodityTypeServer.BaseCreate(payload);
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
    const data = await this.baseCommodityTypeServer.BaseRetrieve(payload);
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
    return await this.baseCommodityTypeServer.BaseRelationSet(payload)
  }

}

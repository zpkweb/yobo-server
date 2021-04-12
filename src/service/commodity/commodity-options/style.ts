import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityStyleServer } from 'src/service/base/commodity/commodity-options/style';

@Provide()
export class CommodityStyleService {

  @Inject()
  baseCommodityStyleServer: BaseCommodityStyleServer;

  async create(payload) {
    const data = await this.baseCommodityStyleServer.BaseCreate(payload);
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
    const data = await this.baseCommodityStyleServer.BaseRetrieve(payload);
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
    return await this.baseCommodityStyleServer.BaseRelationSet(payload)
  }

}

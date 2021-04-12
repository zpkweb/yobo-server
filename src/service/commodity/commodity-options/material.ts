import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityMaterialServer } from 'src/service/base/commodity/commodity-options/material';

@Provide()
export class CommodityMaterialService {

  @Inject()
  baseCommodityMaterialServer: BaseCommodityMaterialServer;

  async create(payload) {
    const data = await this.baseCommodityMaterialServer.BaseCreate(payload);
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
    const data = await this.baseCommodityMaterialServer.BaseRetrieve(payload);
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
    return await this.baseCommodityMaterialServer.BaseRelationSet(payload)
  }

}

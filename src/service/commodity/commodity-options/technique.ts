import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityTechniqueServer } from 'src/service/base/commodity/commodity-options/technique';

@Provide()
export class CommodityTechniqueService {

  @Inject()
  baseCommodityTechniqueServer: BaseCommodityTechniqueServer;

  async create(payload) {
    const data = await this.baseCommodityTechniqueServer.BaseCreate(payload);
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
    const data = await this.baseCommodityTechniqueServer.BaseRetrieve(payload);
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
    return await this.baseCommodityTechniqueServer.BaseRelationSet(payload)
  }

}

import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityCategoryServer } from 'src/service/base/commodity/commodity-options/category';

@Provide()
export class CommodityCategoryService {

  @Inject()
  baseCommodityCategoryServer: BaseCommodityCategoryServer;

  async create(payload) {
    const data = await this.baseCommodityCategoryServer.BaseCreate(payload);
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
    const data = await this.baseCommodityCategoryServer.BaseRetrieve(payload);
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
    return await this.baseCommodityCategoryServer.BaseRelationSet(payload)
  }

}

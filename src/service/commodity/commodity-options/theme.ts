import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityThemeServer } from 'src/service/base/commodity/commodity-options/theme';

@Provide()
export class CommodityThemeService {

  @Inject()
  baseCommodityThemeServer: BaseCommodityThemeServer;

  async create(payload) {
    const data = await this.baseCommodityThemeServer.BaseCreate(payload);
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
    const data = await this.baseCommodityThemeServer.BaseRetrieve(payload);
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
    return await this.baseCommodityThemeServer.BaseRelationSet(payload)
  }

}

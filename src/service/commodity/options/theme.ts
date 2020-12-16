import { Inject, Provide } from '@midwayjs/decorator';
import { BaseCommodityOptionsThemeServer } from '../../base/commodity/options/theme';

@Provide()
export class CommodityOptionsThemeService {

  @Inject()
  baseCommodityOptionsThemeServer: BaseCommodityOptionsThemeServer;

  /**
   * 创建商品选项
   */
  async create(payload) {
    const data = await this.baseCommodityOptionsThemeServer.BaseCreate(payload);
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

  /**
   * 查询商品选项
   */
  async retrieve(payload) {
    const data = await this.baseCommodityOptionsThemeServer.BaseRetrieve(payload);
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

  /**
   * 查询商品选项
   */
  async retrieveId(payload) {
    const data = await this.baseCommodityOptionsThemeServer.BaseRetrieveId(payload);
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

  /**
   * 查询商品所有选项
   */
  async retrieveAll(payload) {
    let data = await this.baseCommodityOptionsThemeServer.BaseRetrieveAll();
    if(payload.isLocale){
      data = this.filter(payload.locale || 'zh-cn', data)
    }
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


  /**
   * 修改商品选项
   */
  async update(payload) {
    const data = await this.baseCommodityOptionsThemeServer.BaseUpdate(payload);
    if (data.affected) {
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


  /**
   * 删除商品选项
   */
  async delete(payload) {
    const data = await this.baseCommodityOptionsThemeServer.BaseDelete(payload);
    if (data.affected) {
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
  /**
   * 筛选商品
   * @param  payload
   * @param type
   */
  filter(type, payload) {
    return payload.map(item => {
      return {id: item.id, name: item[type]}
    })
  }
}

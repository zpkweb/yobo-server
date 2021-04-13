/**商品选项
 *
 */
import { Inject, Provide } from '@midwayjs/decorator';
import { BaseCommodityOptionsThemeServer } from 'src/service/base/commodity/options/theme';

@Provide()
export class CommodityOptionsThemeService {

  @Inject()
  baseCommodityOptionsThemeServer: BaseCommodityOptionsThemeServer;

  /**
   * 创建
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
   * 查询
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
   * 查询
   */
  async retrieveId(id) {
    const data = await this.baseCommodityOptionsThemeServer.BaseRetrieveId(id);
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
   * 查询所有
   */
  async retrieveAll({
    isLocale = false,
    locale = 'zh-cn'
  } = {}) {
    console.log("查询所有", isLocale)
    let data = await this.baseCommodityOptionsThemeServer.BaseRetrieveAll();
    if(isLocale){
      data = this.filter(locale, data)
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
   * 修改
   */
  async update(payload) {
    const data = await this.baseCommodityOptionsThemeServer.BaseUpdate(payload);
    if (data.affected) {
      return {
        // data: data,
        success: true,
        code: 10007
      }
    } else {
      return {
        success: false,
        code: 10008
      }
    }
  }


  /**
   * 删除
   */
  async delete(id) {
    const data = await this.baseCommodityOptionsThemeServer.BaseDelete(id);
    if (data.affected) {
      return {
        // data: data,
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
   * 筛选
   * @param  payload
   * @param type
   */
  filter(type, payload) {
    return payload.map(item => {
      const { id, img } = item;
      return {id, img, name: item[type]}
    })
  }

}

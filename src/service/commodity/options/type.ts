/**商品选项
 *
 */
import { Inject, Provide } from '@midwayjs/decorator';
import { BaseCommodityOptionsTypeService } from 'src/service/base/commodity/options/type';

@Provide()
export class CommodityOptionsTypeService {

  @Inject()
  baseCommodityOptionsTypeService: BaseCommodityOptionsTypeService;

  /**
   * 创建
   */
  async create(payload) {
    const data = await this.baseCommodityOptionsTypeService.BaseCreate(payload);
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
  async retrieve(id) {
    const data = await this.baseCommodityOptionsTypeService.BaseRetrieve(id);
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
  async retrieveId(payload) {
    const data = await this.baseCommodityOptionsTypeService.BaseRetrieveId(payload);
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
    let data = await this.baseCommodityOptionsTypeService.BaseRetrieveAll();
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
    const data = await this.baseCommodityOptionsTypeService.BaseUpdate(payload);
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
    const data = await this.baseCommodityOptionsTypeService.BaseDelete(id);
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

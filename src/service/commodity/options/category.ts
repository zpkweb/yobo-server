import { Inject, Provide } from '@midwayjs/decorator';
import { BaseCommodityOptionsCategoryServer } from '../../base/commodity/options/category';

@Provide()
export class CommodityOptionsCategoryService {

  @Inject()
  baseCommodityOptionsCategoryServer: BaseCommodityOptionsCategoryServer;

  /**
   * 创建商品选项
   */
  async create(payload) {
    const data = await this.baseCommodityOptionsCategoryServer.BaseCreate(payload);
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
    const data = await this.baseCommodityOptionsCategoryServer.BaseRetrieve(payload);
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
    const data = await this.baseCommodityOptionsCategoryServer.BaseRetrieveId(payload);
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
    let data = await this.baseCommodityOptionsCategoryServer.BaseRetrieveAll();
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
    const data = await this.baseCommodityOptionsCategoryServer.BaseUpdate(payload);
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
   * 删除商品选项
   */
  async delete(payload) {
    const data = await this.baseCommodityOptionsCategoryServer.BaseDelete(payload);
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
   * 筛选商品
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

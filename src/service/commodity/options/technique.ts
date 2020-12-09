import { Inject, Provide } from '@midwayjs/decorator';
import { BaseCommodityOptionsTechniqueServer } from '../../base/commodity/options/technique';

@Provide()
export class CommodityOptionsTechniqueService {

  @Inject()
  baseCommodityOptionsTechniqueServer: BaseCommodityOptionsTechniqueServer;

  /**
   * 创建商品选项
   */
  async create(payload) {
    const data = await this.baseCommodityOptionsTechniqueServer.BaseCreate(payload);
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
  async retrieve(payload) {
    const data = await this.baseCommodityOptionsTechniqueServer.BaseRetrieve(payload);
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
    const data = await this.baseCommodityOptionsTechniqueServer.BaseRetrieveId(payload);
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
   * 查询商品所有f选项
   */
  async retrieveAll() {
    const data = await this.baseCommodityOptionsTechniqueServer.BaseRetrieveAll();
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
    const data = await this.baseCommodityOptionsTechniqueServer.BaseUpdate(payload);
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
   * 删除商品选项
   */
  async delete(payload) {
    const data = await this.baseCommodityOptionsTechniqueServer.BaseDelete(payload);
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
}

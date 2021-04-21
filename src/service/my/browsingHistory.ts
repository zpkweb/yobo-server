import { Inject, Provide } from "@midwayjs/decorator";
import { BaseBrowsingHistoryServer } from '../base/my/browsingHistory';
import { BaseCommodityBrowsingCountServer } from '../base/commodity/commodityBrowsingCount';

@Provide()
export class MyBrowsingHistoryService {

  @Inject()
  baseBrowsingHistoryServer: BaseBrowsingHistoryServer;

  @Inject()
  baseCommodityBrowsingCountServer: BaseCommodityBrowsingCountServer;

  // 添加我的商品浏览记录
  async addBrowsingHistory(payload) {

    // 查找商品浏览记录
    let browsingHistory:any = await this.hasBrowsingHistory({
      userId: payload.userId,
      commodityId: payload.commodityId
    });
    if(browsingHistory.success){
      // 浏览数加一
      // 更新商品浏览数
      const browsingHistoryCountUpdate = await this.updateBrowsingHistoryCount({
        userId: payload.userId,
        commodityId: payload.commodityId,
        count: browsingHistory.data.count+1
      })
      if(!browsingHistoryCountUpdate.success){
        return browsingHistoryCountUpdate;
      }
    }else{
      // 创建商品浏览记录
      browsingHistory = await this.createBrowsingHistory({
        count: 1,
      });
      if(!browsingHistory.success) {
        return browsingHistory
      }
      // 关联 用户
      await this.relationUser({
        of: browsingHistory.data.identifiers[0].id,
        set: payload.userId
      })
      // 关联 商品
      await this.relationCommodity({
        of: browsingHistory.data.identifiers[0].id,
        set: payload.commodityId
      })
    }

    // 查找商品浏览数是否存在
    const browsingCount = await this.retrieveBrowsingCount(payload.commodityId);
    if(browsingCount.success){
      // 更新商品浏览数
      const browsingCountUpdate = await this.updateBrowsingCount({
        commodityId: payload.commodityId,
        count: browsingCount.data.count+1
      })
      if(!browsingCountUpdate.success){
        return browsingCountUpdate;
      }
    }else{
      // 创建商品浏览数
      const browsingCountCreate = await this.createBrowsingCount();
      if(!browsingCountCreate.success){
        return browsingCountCreate;
      }
      // 关联 商品
      await this.relationBrowsingCountCommodity({
        of: browsingCountCreate.data.identifiers[0].id,
        set: payload.commodityId
      })
    }

    // 我的浏览历史-商品

    // return await this.retrieveBrowsingHistory(payload.userId)
    return browsingHistory;
  }


  /**
   * 创建浏览历史-商品
   * @param payload
   */
  async createBrowsingHistory(payload) {
    const data = await this.baseBrowsingHistoryServer.BaseCreate(payload);
    if (data.identifiers[0].id) {
      return {
        data: data,
        success: true,
        code: 10003
      }
    } else {
      return {
        success: false,
        code: 10004
      }
    }
  }
  /**
   * 浏览历史是否存在
   *
   * @param {*} payload
   * @return {*}
   * @memberof MyBrowsingHistoryService
   */
  async hasBrowsingHistory(payload) {
    const data = await this.baseBrowsingHistoryServer.BaseHas(payload);
    if (data) {
      return {
        data: data,
        success: true,
        code: 10003
      }
    } else {
      return {
        success: false,
        code: 10004
      }
    }
  }

  /**
   * 更新商品浏览数
   * @param commodityId
   */
  async updateBrowsingHistoryCount(payload) {
    const data = await this.baseBrowsingHistoryServer.BaseUpdate(payload)
    if(data){
      return {
        data: data,
        success: true,
        code: 10007
      }
    }else{
      return {
        success: false,
        code: 10008
      }
    }
  }

  /**
   * 查询我的浏览历史-商品
   * @param payload
   */
  async retrieveBrowsingHistory(payload) {
    let result = await this.baseBrowsingHistoryServer.BaseRetrieve({
      userId: payload.userId,
      currentPage: payload.currentPage,
      pageSize: payload.pageSize
    });
    if(result){


      let data = result[0];
        let total = result[1];

      if(data){
        if(payload.isLocale) {
          data = this.filter(payload.locale, data);
        }
        return {
          data: {
            list: data,
            total
          },
          success: true,
          code: 10009
        }
      }else{
        return {
          success: false,
          code: 10010
        }
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
      let name = item.name ? item.name[type] : '';

      let desc = item.desc ? item.desc[type] : '';
      // let price = item.price ? item.price[type] : '';
      let price = item.price;
      let shapes = item.shapes ? item.shapes.map(item => {return {id: item.id, name: item[type]}}) : '';
      let themes = item.themes ? item.themes.map(item => {return {id: item.id, name: item[type]}})  : '';
      let categorys = item.categorys ? item.categorys.map(item => {return {id: item.id, name: item[type]}})  : '';
      let techniques = item.techniques ? item.techniques.map(item => {return {id: item.id, name: item[type]}})  : '';
      return Object.assign(item,{
        name,
        desc,
        price,
        shapes,
        themes,
        categorys,
        techniques,
      })
    })
  }


  /**
   * 关联 用户
   */
  async relationUser(payload) {
    await this.baseBrowsingHistoryServer.BaseRelation({
      name: 'user',
      of: payload.of,
      set: { userId: payload.set }
    })
  }
  /**
   * 关联 商品
   */
  async relationCommodity(payload) {
    await this.baseBrowsingHistoryServer.BaseRelation({
      name: 'commodity',
      of: payload.of,
      set: { commodityId: payload.set }
    })
  }


  /**
   * 创建商品浏览数
   * @param commodityId
   */
  async createBrowsingCount() {
    const data = await this.baseCommodityBrowsingCountServer.BaseCreate()
    if(data){
      return {
        data: data,
        success: true,
        code: 10003
      }
    }else{
      return {
        success: false,
        code: 10004
      }
    }
  }

  /**
   * 查找商品浏览数
   * @param commodityId
   */
  async retrieveBrowsingCount(commodityId) {
    const data = await this.baseCommodityBrowsingCountServer.BaseRetrieve(commodityId)
    if(data){
      return {
        data: data,
        success: true,
        code: 10009
      }
    }else{
      return {
        success: false,
        code: 10010
      }
    }
  }

  /**
   * 更新商品浏览数
   * @param commodityId
   */
  async updateBrowsingCount(payload) {
    const data = await this.baseCommodityBrowsingCountServer.BaseUpdate(payload)
    if(data){
      return {
        data: data,
        success: true,
        code: 10007
      }
    }else{
      return {
        success: false,
        code: 10008
      }
    }
  }

  /**
   * 关联 商品
   */
  async relationBrowsingCountCommodity(payload) {
    await this.baseCommodityBrowsingCountServer.BaseRelation({
      name: 'commodity',
      of: payload.of,
      set: { commodityId: payload.set }
    })
  }


}

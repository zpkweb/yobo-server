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
    console.log("set", payload)
    // 创建商品浏览记录
    const browsingHistory = await this.createBrowsingHistory(payload);
    console.log("browsingHistory", browsingHistory)
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
    // 查找商品浏览数是否存在
    const browsingCount = await this.retrieveBrowsingCount(payload.commodityId);
    console.log("browsingCount", browsingCount)
    if(browsingCount.success){
      // 更新商品浏览数
      const browsingCountUpdate = await this.updateBrowsingCount({
        commodityId: payload.commodityId,
        count: browsingCount.data.count+1
      })
      console.log("browsingCountUpdate", browsingCountUpdate)
      if(!browsingCountUpdate.success){
        return browsingCountUpdate;
      }
    }else{
      // 创建商品浏览数
      const browsingCountCreate = await this.createBrowsingCount();
      console.log("browsingCountCreate", browsingCountCreate)
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
   * 查询我的浏览历史-商品
   * @param payload
   */
  async retrieveBrowsingHistory(userId) {
    const data = await this.baseBrowsingHistoryServer.BaseRetrieve(userId);
    console.log("data", data)
    if(data){
      return {
        data,
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
    console.log("retrieveBrowsingCount", data)
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

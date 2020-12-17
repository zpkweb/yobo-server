import { Inject, Provide } from '@midwayjs/decorator';
import { MyLikeSellerService } from './likeSeller'
import { MyLikeCommodityService } from './likeCommodity';

@Provide()
export class MyService {

  @Inject()
  myLikeSellerService: MyLikeSellerService;

  @Inject()
  myLikeCommodityService: MyLikeCommodityService;


  // 添加我喜欢的商家
  async setSeller(payload) {
    return await this.myLikeSellerService.addMyLikeSeller(payload)
  }

  // 删除我喜欢的商家
  async delSeller(payload) {
    return await this.myLikeSellerService.delMyLikeSeller(payload)
  }

  async delSellerAll(userId) {
    return await this.myLikeSellerService.delLikeSellerAll(userId)
  }

  // 查找我喜欢的商家
  async getSeller(userId) {
    return await this.myLikeSellerService.myLikeSeller(userId)
  }

  // 查找我喜欢的商家
  async hasSeller(payload) {
    return await this.myLikeSellerService.hasMyLikeSeller(payload)
  }

  // 添加我喜欢的商家
  async setCommodity(payload) {
    return await this.myLikeCommodityService.addMyLikeCommodity(payload)
  }

  // 删除我喜欢的商家
  async delCommodity(payload) {
    return await this.myLikeCommodityService.delMyLikeCommodity(payload)
  }

  async delCommodityAll(userId) {
    return await this.myLikeCommodityService.delLikeCommodityAll(userId)
  }

  // 查找我喜欢的商家
  async getCommodity(userId) {
    return await this.myLikeCommodityService.myLikeCommodity(userId)
  }

  // 查找我喜欢的商家
  async hasCommodity(payload) {
    return await this.myLikeCommodityService.hasMyLikeCommodity(payload)
  }




  // 查找我的浏览记录
  async findBrowsingHistory() {

  }


  // 查找我的订单
  async findOrder() {

  }

  // 查找我的购物车
  async findShoppingCart() {

  }


}

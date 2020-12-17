import { Inject, Controller, Post, Provide, Get, Body, ALL, Query } from '@midwayjs/decorator';
import { MyService } from 'src/service/my';

@Provide()
@Controller('/api/my')
export class MyController {

  @Inject()
  myService: MyService;

  // 添加我喜欢的商家
  @Post('/seller')
  async setSeller(@Body(ALL) sellerBody) {
    return await this.myService.setSeller(sellerBody);
  }

  // 查找我喜欢的商家
  @Get('/seller')
  async getSeller(@Query() userId) {
    return await this.myService.getSeller(userId);
  }

  // 查找我喜欢的商家是否存在
  @Get('/seller/has')
  async hasSeller(@Query(ALL) sellerQuery) {
    return await this.myService.hasSeller(sellerQuery);
  }

  // 删除我喜欢的商家
  @Post('/seller/del')
  async delSeller(@Body(ALL) sellerBody) {
    return await this.myService.delSeller(sellerBody);
  }

  // 删除我喜欢的所有商家
  @Post('/seller/delAll')
  async delSellerAll(@Body() userId) {
    return await this.myService.delSellerAll(userId);
  }



  // 添加我喜欢的商家
  @Post('/commodity')
  async setCommodity(@Body(ALL) commodityBody) {
    return await this.myService.setCommodity(commodityBody);
  }

  // 查找我喜欢的商家
  @Get('/commodity')
  async getCommodity(@Query() userId) {
    return await this.myService.getCommodity(userId);
  }

  // 查找我喜欢的商家是否存在
  @Get('/commodity/has')
  async hasCommodity(@Query(ALL) commodityQuery) {
    return await this.myService.hasCommodity(commodityQuery);
  }

  // 删除我喜欢的商家
  @Post('/commodity/del')
  async delCommodity(@Body(ALL) commodityBody) {
    return await this.myService.delCommodity(commodityBody);
  }

  // 删除我喜欢的所有商家
  @Post('/commodity/delAll')
  async delCommodityAll(@Body() userId) {
    return await this.myService.delCommodityAll(userId);
  }




  // 查找我的浏览记录
  @Post('/browsingHistory')
  async findBrowsingHistory() {
    return  await this.myService.findBrowsingHistory();
  }




  // 查找我的订单
  @Get('/order')
  async findOrder() {
    return await this.myService.findOrder();
  }

  // 查找我的购物车
  @Get('/shoppingCart')
  async findShoppingCart() {
    return await this.myService.findShoppingCart();
  }

}

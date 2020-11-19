import { Inject, Controller, Post, Provide, Get } from '@midwayjs/decorator';
import { MyService } from '../../service/My';

@Provide()
@Controller('/my')
export class MyController {

  @Inject()
  MyService: MyService;

  // 查找我的浏览记录
  @Post('/browsingHistory')
  async findBrowsingHistory() {
    return  await this.MyService.findBrowsingHistory();
  }

  // 查找我喜欢的商品
  @Post('/likeCommodity')
  async findLikeCommodity() {
    return await this.MyService.findLikeCommodity();
  }

  // 查找我喜欢的商家
  @Post('/likeSeller')
  async findLikeSeller() {
    return await this.MyService.findLikeSeller();
  }

  // 查找我的订单
  @Get('/order')
  async findOrder() {
    return await this.MyService.findOrder();
  }

  // 查找我的购物车
  @Get('/shoppingCart')
  async findShoppingCart() {
    return await this.MyService.findShoppingCart();
  }

}

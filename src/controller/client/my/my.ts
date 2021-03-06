import { Inject, Controller, Post, Provide, Get, Body, ALL, Query, Config } from '@midwayjs/decorator';
import { MyService } from 'src/service/my';

@Provide()
@Controller('/api/my', {tagName: '前端-我的'})
export class MyController {

  @Inject()
  myService: MyService;

  @Config('pagination')
  pagination;

  // 添加我喜欢的商家
  @Post('/seller',{summary: '添加我喜欢的商家'})
  async setSeller(@Body(ALL) sellerBody) {
    return await this.myService.setSeller(sellerBody);
  }

  // 查找我喜欢的商家
  @Get('/seller',{summary: '查找我喜欢的商家'})
  async getSeller(@Query() userId) {
    return await this.myService.getSeller(userId);
  }

  // 查找我喜欢的商家是否存在
  @Get('/seller/has',{summary:'查找我喜欢的商家是否存在'})
  async hasSeller(@Query(ALL) sellerQuery) {
    return await this.myService.hasSeller(sellerQuery);
  }

  // 删除我喜欢的商家
  @Post('/seller/del',{summary:'删除我喜欢的商家'})
  async delSeller(@Body(ALL) sellerBody) {
    return await this.myService.delSeller(sellerBody);
  }

  // 删除我喜欢的所有商家
  @Post('/seller/delAll',{summary:'删除我喜欢的所有商家'})
  async delSellerAll(@Body() userId) {
    return await this.myService.delSellerAll(userId);
  }



  // 添加我喜欢的商品
  @Post('/commodity',{summary:'添加我喜欢的商品'})
  async setCommodity(@Body(ALL) commodityBody) {
    return await this.myService.setCommodity(commodityBody);
  }

  // 查找我喜欢的商品
  @Get('/commodity',{summary:'查找我喜欢的商品'})
  async getCommodity(@Query(ALL) query) {
    return await this.myService.getCommodity({
      ...query,
      isLocale: true,
      locale: query.locale || 'zh-cn'
    });
  }

  // 查找我喜欢的商品是否存在
  @Get('/commodity/has',{summary:'查找我喜欢的商品是否存在'})
  async hasCommodity(@Query(ALL) commodityQuery) {
    return await this.myService.hasCommodity(commodityQuery);
  }

  // 删除我喜欢的商品
  @Post('/commodity/del',{summary:'删除我喜欢的商品'})
  async delCommodity(@Body(ALL) commodityBody) {
    return await this.myService.delCommodity(commodityBody);
  }

  // 删除我喜欢的所有商品
  @Post('/commodity/delAll',{summary:'删除我喜欢的所有商品'})
  async delCommodityAll(@Body() userId) {
    return await this.myService.delCommodityAll(userId);
  }




  // 添加我的浏览记录
  @Post('/browsingHistory',{summary:'添加我的浏览记录'})
  async addBrowsingHistory(@Body(ALL) browsingHistoryBody) {
    return  await this.myService.addBrowsingHistory({
      userId: browsingHistoryBody.userId,
      userName: browsingHistoryBody.userName || '',
      commodityId: browsingHistoryBody.commodityId,
      commodityName: browsingHistoryBody.commodityName || ''
    });
  }

  // 查找我的浏览记录
  @Get('/browsingHistory',{summary:'查找我的浏览记录'})
  async findBrowsingHistory(@Query(ALL) findQuery) {
    const { pageSize, currentPage, ...query } = findQuery;
    const getPageSize = Number(pageSize) || this.pagination.pageSize;
    const getCurrentPage = Number(currentPage) || this.pagination.currentPage;
    let data:any;

    data =  await this.myService.findBrowsingHistory({
      ...query,
      pageSize: getPageSize,
      currentPage: getCurrentPage,
      isLocale: true
    });

    if(data.success){
      data.data.pageSize = pageSize;
      data.data.currentPage = currentPage;
    }
    return data;

  }




  // 查找我的订单
  @Get('/order',{summary:'查找我的订单'})
  async findOrder() {
    return await this.myService.findOrder();
  }

  // 查找我的购物车
  @Get('/shoppingCart',{summary:'查找我的购物车'})
  async findShoppingCart() {
    return await this.myService.findShoppingCart();
  }

}

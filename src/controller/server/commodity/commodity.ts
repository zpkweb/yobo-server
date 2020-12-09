import { Inject, Controller, Post, Provide, Get, Param, Body, ALL } from '@midwayjs/decorator';
import { CommodityService } from 'src/service/commodity/commodity';
import { Context } from 'egg';

@Provide()
@Controller('/api/admin/commodity')
export class CommodityAdminController {

  @Inject()
  commodityService: CommodityService;

  @Inject()
  ctx: Context;

  // 添加商品
  @Post('/create')
  async createCommodity() {
    return  await this.commodityService.createCommodity();
  }

  // 删除商品
  @Get('/remove')
  async removeCommodity() {
    return await this.commodityService.removeCommodity();
  }

  // 更新商品
  @Post('/update')
  async updateCommodity() {
    // return await this.commodityService.({});
  }

  // 添加商品选项
  @Post('/options/:type/create')
  async optionsCreate(@Param() type, @Body(ALL) optionsBody) {
    return await this.commodityService.commodityOptionsCreate({type, options: optionsBody});
  }

  // 更新商品选项
  @Post('/options/:type/update')
  async optionsUpdate(@Param() type, @Body(ALL) optionsBody) {
    return await this.commodityService.commodityOptionsUpdate({type, ...optionsBody});
  }

  // 删除商品选项
  @Post('/options/:type/delete')
  async optionsDelete(@Param() type, @Body(ALL) optionsBody) {
    return await this.commodityService.commodityOptionsDelete({type, ...optionsBody});
  }

}

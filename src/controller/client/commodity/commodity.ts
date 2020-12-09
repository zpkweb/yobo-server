import { Inject, Controller, Provide, Get, Param, ALL } from '@midwayjs/decorator';
import { CommodityService } from 'src/service/commodity/commodity';
import { Context } from 'egg';

@Provide()
@Controller('/api/commodity')
export class CommodityController {

  @Inject()
  commodityService: CommodityService;

  @Inject()
  ctx: Context;

  // 查找商品
  @Get()
  async find(@Param(ALL) findParams) {
    return await this.commodityService.commodityFind(findParams);
  }

  // 查找商品选项-形状
  @Get('/options/:type')
  async optionsShape(@Param() type) {
    return await this.commodityService.commodityOptionsTypeRetrieveAll({
      type
    });
  }

}

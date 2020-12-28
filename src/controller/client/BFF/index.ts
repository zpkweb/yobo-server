import { Inject, Controller, Provide, Get, Query, ALL } from '@midwayjs/decorator';
import { CommodityService } from 'src/service/commodity';
import { Context } from 'egg';
import { BFFService } from 'src/service/BFF';

@Provide()
@Controller('/api')
export class BFFController {

  @Inject()
  commodityService: CommodityService;

  @Inject()
  bffService: BFFService;

  @Inject()
  ctx: Context;

  // 首页
  @Get('/home')
  async home(@Query(ALL) homeQuery) {
    return await this.bffService.home(homeQuery);
  }

  // 购买
  @Get('/buy')
  async buy() {
    return 'buy'
  }
}

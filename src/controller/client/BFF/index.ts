import { Inject, Controller, Provide, Get, Query, ALL } from '@midwayjs/decorator';
import { CommodityService } from 'src/service/commodity';
import { Context } from 'egg';
import { BFFService } from 'src/service/BFF';

@Provide()
@Controller('/api/BFF', {tagName:'整合前端接口'})
export class BFFController {

  @Inject()
  commodityService: CommodityService;

  @Inject()
  bffService: BFFService;

  @Inject()
  ctx: Context;

  // 首页
  @Get('/home', {summary: '首页' })
  async home(@Query(ALL) query) {
    return await this.bffService.home(query);
  }

  // 购买
  @Get('/commodity', {summary: '购买' })
  async commodity(@Query(ALL) query) {
    return await this.bffService.clientCommodity({
      ...query,
      locale: 'zh-cn'
    })
  }

  //  艺术品选项
  @Get('/artwork/options', {summary: '艺术品选项' })
  async artworkOptions(@Query() locale) {
    return await this.bffService.artworkOptions({
      locale,
      isLocale: true
    });
  }
}

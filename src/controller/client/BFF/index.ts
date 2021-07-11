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
      locale: query.locale || 'zh-cn'
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

  // 资讯详情
  @Get('/informationDetail', { summary: "资讯详情" })
  async informationDetail(@Query(ALL) query) {
    // const isLocale = (Boolean(query.isLocale) && query.isLocale == 'true') ? true : false;
    return await this.bffService.informationDetail({
      informationId: query.informationId,
      isLocale: true,
      locale: query.locale || 'zh-cn'
    })
  }

}

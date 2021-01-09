import { Inject, Controller, Provide, Get, Param, Query, ALL, Config } from '@midwayjs/decorator';
import { CommodityService } from 'src/service/commodity';
import { Context } from 'egg';

@Provide()
@Controller('/api/commodity')
export class CommodityController {

  @Inject()
  commodityService: CommodityService;

  @Inject()
  ctx: Context;

  @Config('pagination')
  pagination;

  // 查找商品
  @Get()
  async find(@Query(ALL) findQuery) {
    const pageSize = Number(findQuery.pageSize) || this.pagination.pageSize;
    const currentPage = Number(findQuery.currentPage) || this.pagination.currentPage;
    const data:any = await this.commodityService.findAll({
      ...findQuery,
      pageSize: pageSize,
      currentPage: currentPage,
      isLocale: true
    });
    if(data.success){
      data.data.pageSize = pageSize;
      data.data.currentPage = currentPage;
    }
    return data;
  }

  // 搜索
  @Get('/search')
  async search(@Query(ALL) searchQuery) {
    const pageSize = Number(searchQuery.pageSize) || this.pagination.pageSize;
    const currentPage = Number(searchQuery.currentPage) || this.pagination.currentPage;
    const data:any = await this.commodityService.search({
      ...searchQuery,
      pageSize: pageSize,
      currentPage: currentPage,
      isLocale: true
    });
    if(data.success){
      data.data.pageSize = pageSize;
      data.data.currentPage = currentPage;
    }
    return data;
  }


  // 查找商品选项-形状
  @Get('/options/:type')
  async optionsShape(@Param() type) {
    return await this.commodityService.commodityOptionsTypeRetrieveAll({
      type,
      isLocale: true
    });
  }



}

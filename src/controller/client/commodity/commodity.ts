import { Inject, Controller, Provide, Get, Param, Query, ALL, Config } from '@midwayjs/decorator';
import { CommodityService } from 'src/service/commodity';
import { Context } from 'egg';

@Provide()
@Controller('/api/commodity', {tagName: '前端-商品'})
export class CommodityController {

  @Inject()
  commodityService: CommodityService;

  @Inject()
  ctx: Context;

  @Config('pagination')
  pagination;

  // 查找商品
  @Get('',{summary: '查找商品'})
  async find(@Query(ALL) findQuery) {
    const { pageSize, currentPage, ...query } = findQuery;
    const getPageSize = Number(pageSize) || this.pagination.pageSize;
    const getCurrentPage = Number(currentPage) || this.pagination.currentPage;
    let data:any;
    if(query && Object.keys(query).length){
      data = await this.commodityService.find({
        ...findQuery,
        isLocale: true
      });
    }else{
      data = await this.commodityService.findAll({
        ...findQuery,
        pageSize: getPageSize,
        currentPage: getCurrentPage,
        isLocale: true
      });
    }
    if(data.success){
      data.data.pageSize = pageSize;
      data.data.currentPage = currentPage;
    }
    return data;
  }

  // 搜索
  @Get('/search', { summary: '搜索商品'})
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

  @Get('/searchs', { summary: '搜索商品'})
  async searchs(@Query(ALL) searchQuery) {
    const pageSize = Number(searchQuery.pageSize) || this.pagination.pageSize;
    const currentPage = Number(searchQuery.currentPage) || this.pagination.currentPage;
    const data:any = await this.commodityService.searchs({
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
  @Get('/options/:type', { summary: '查找商品选项'})
  async options(@Param() type) {
    return await this.commodityService.retrieveOptionAll({
      type,
      isLocale: true
    });
  }



}

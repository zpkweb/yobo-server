import { Inject, Controller, Post, Provide, Get, Param, Body, ALL, Query, Config } from '@midwayjs/decorator';
import { CommodityService } from 'src/service/commodity';
import { Context } from 'egg';

@Provide()
@Controller('/api/admin/commodity',{tagName:'后台管理-商品'})
export class AdminCommodityController {

  @Inject()
  commodityService: CommodityService;

  @Inject()
  ctx: Context;

  @Config('pagination')
  pagination;

  // 添加商品
  @Post('/create',{summary:'添加商品'})
  async createCommodity(@Body(ALL) createBody) {
    return  await this.commodityService.create(createBody);
  }

  // 查找商品
  @Get('/',{summary:'查找商品'})
  async find(@Query(ALL) findParams) {
    const pageSize = Number(findParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(findParams.currentPage) || this.pagination.currentPage;
    const data:any = await this.commodityService.find({
      ...findParams,
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

  // 编辑商品
  @Get('/edit',{summary:'编辑商品'})
  async edit(@Query(ALL) queryAll) {

    const data: any = await this.commodityService.edit(queryAll);

    return data;
  }

  //  查询所有商品
  @Get('/all',{summary:'查询所有商品'})
  async findAll(@Query(ALL) findAllParams) {
    const pageSize = Number(findAllParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(findAllParams.currentPage) || this.pagination.currentPage;
    const data: any = await this.commodityService.findAll({
      ...findAllParams,
      pageSize: pageSize,
      currentPage: currentPage,
    });
    if(data.success){
      data.data.pageSize = pageSize;
      data.data.currentPage = currentPage;
    }
    return data;
  }


  // 搜索
  @Get('/search',{summary:'搜索'})
  async search(@Query(ALL) searchParams) {
    const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
    const news = (Boolean(searchParams.news) && searchParams.news == 'true') ? true : false;
    const data:any = await this.commodityService.search({
      ...searchParams,
      news,
      pageSize: pageSize,
      currentPage: currentPage,
    });
    if(data.success){
      data.data.pageSize = pageSize;
      data.data.currentPage = currentPage;
    }
    return data;
  }

  @Get('/searchs',{summary:'搜索'})
  async searchs(@Query(ALL) searchParams) {
    const pageSize = Number(searchParams.pageSize) || this.pagination.pageSize;
    const currentPage = Number(searchParams.currentPage) || this.pagination.currentPage;
    const news = (Boolean(searchParams.news) && searchParams.news == 'true') ? true : false;
    const data:any = await this.commodityService.ServiceSearch({
      ...searchParams,
      isLocale: true,
      news,
      locale: searchParams.locale || 'zh-cn',
      pageSize: pageSize,
      currentPage: currentPage,
    });
    if(data.success){
      data.data.pageSize = pageSize;
      data.data.currentPage = currentPage;
    }
    return data;
  }



  // 删除商品

  @Post('/delete',{summary:'删除商品'})
  async delete(@Body() commodityId) {
    return await this.commodityService.delete(commodityId);
  }

  // 更新商品
  @Post('/update',{summary:'更新商品'})
  async updateCommodity(@Body(ALL) updateBody) {
    return await this.commodityService.update(updateBody)
  }



  // 添加商品选项
  @Post('/create/:type',{summary:'添加商品选项'})
  async createOptions(@Param() type, @Body(ALL) optionsBody) {
    return await this.commodityService.createOptions({type, options: optionsBody});
  }

  // 查询所有商品选项
  @Get('/options',{summary:'查询所有商品选项'})
  async retrieveOptions(@Query(ALL) param) {
    return await this.commodityService.retrieveOptions({
      ...param,
      isLocale: true
    });
  }

  // 查找商品选项
  @Get('/retrieve/:type',{summary:'查找商品选项'})
  async retrieveOption(@Param() type) {
    return await this.commodityService.retrieveOptionAll({type});
  }

  // 查找商品选项
  @Get('/retrieve/:type/:id',{summary:'查找商品选项'})
  async retrieveOptionId(@Param(ALL) param) {
    return await this.commodityService.retrieveOptionId({
      type: param.type,
      id: param.id
    });
  }



  // 更新商品选项
  @Post('/update/:type',{summary:'更新商品选项'})
  async updateOptions(@Param() type, @Body(ALL) optionsBody) {
    return await this.commodityService.updateOptions({
      type,
      id: optionsBody.id,
      img: optionsBody.img,
      zhcn: optionsBody['zh-cn'],
      enus: optionsBody['en-us'],
      jajp: optionsBody['ja-jp'],
      eses: optionsBody['es-es']
    });
  }

  // 删除商品选项
  @Post('/delete/:type',{summary:'删除商品选项'})
  async deleteOptions(@Param() type, @Body(ALL) optionsBody) {
    return await this.commodityService.deleteOptions({type, ...optionsBody});
  }

}

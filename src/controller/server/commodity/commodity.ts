import { Inject, Controller, Post, Provide, Get, Param, Body, ALL, Query, Config } from '@midwayjs/decorator';
import { CommodityService } from 'src/service/commodity';
import { Context } from 'egg';

@Provide()
@Controller('/api/admin/commodity')
export class CommodityAdminController {

  @Inject()
  commodityService: CommodityService;

  @Inject()
  ctx: Context;

  @Config('pagination')
  pagination;

  // 添加商品
  @Post('/create')
  async createCommodity(@Body(ALL) createBody) {
    return  await this.commodityService.create(createBody);
  }

  // 查找商品
  @Get()
  async find(@Query(ALL) findParams) {
    const data:any = await this.commodityService.find({
      ...findParams,
      pageSize: this.pagination.pageSize,
      currentPage: this.pagination.currentPage,
      isLocale: true
    });
    if(data.success){
      data.data.pageSize = this.pagination.pageSize;
      data.data.currentPage = this.pagination.currentPage;
    }
    return data;
  }

  // 编辑商品
  @Get('/edit')
  async finEdit(@Query(ALL) findParams) {
    const data: any = await this.commodityService.find({
      ...findParams,
      pageSize: this.pagination.pageSize,
      currentPage: this.pagination.currentPage
    });
    if(data.success){
      data.data.pageSize = this.pagination.pageSize;
      data.data.currentPage = this.pagination.currentPage;
    }
    return data;
  }

  //  查询所有商品
  @Get('/all')
  async findAll(@Query(ALL) findAllParams) {
    const data: any = await this.commodityService.findAll({
      ...findAllParams,
      pageSize: this.pagination.pageSize,
      currentPage: this.pagination.currentPage,
    });
    if(data.success){
      data.data.pageSize = this.pagination.pageSize;
      data.data.currentPage = this.pagination.currentPage;
    }
    return data;
  }


  // 搜索
  @Get('/search')
  async search(@Query(ALL) searchParams) {
    const data:any = await this.commodityService.search(searchParams);
    if(data.success){
      data.data.pageSize = this.pagination.pageSize;
      data.data.currentPage = this.pagination.currentPage;
    }
    return data;
  }

  // 删除商品
  @Post('/delete')
  async delete(@Body(ALL) deleteBody) {
    return await this.commodityService.delete({
      commodityId: deleteBody.commodityId
    });
  }

  // 更新商品
  @Post('/update')
  async updateCommodity(@Body(ALL) updateBody) {
    return await this.commodityService.update(updateBody)
  }

  // 查找商品选项-形状
  @Get('/options/:type')
  async optionsShape(@Param() type) {
    return await this.commodityService.commodityOptionsTypeRetrieveAll({
      type
    });
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

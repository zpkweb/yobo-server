import { Inject, Controller, Post, Provide, Get, Param, Body, ALL, Query } from '@midwayjs/decorator';
import { CommodityService } from 'src/service/commodity';
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
  async createCommodity(@Body(ALL) createBody) {
    return  await this.commodityService.create(createBody);
  }

  // 查找商品
  @Get()
  async find(@Query(ALL) findParams) {
    return await this.commodityService.find(findParams);
  }

  // 查找商品
  @Get('/edit')
  async finEdit(@Query(ALL) findParams) {
    return await this.commodityService.finEdit(findParams);
  }

  //  查询所有商品
  @Get('/all')
  async findAll(@Query(ALL) findParams) {
    return await this.commodityService.findAll(findParams);
  }

  // 搜索
  @Get('/search')
  async search(@Query(ALL) searchParams) {
    return await this.commodityService.search(searchParams);
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

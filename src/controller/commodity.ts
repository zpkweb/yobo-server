import { Inject, Controller, Post, Provide, Get } from '@midwayjs/decorator';
import { CommodityService } from '../service/commodity';

@Provide()
@Controller('/commodity')
export class CommodityController {

  @Inject()
  CommodityService: CommodityService;

  // 添加用户
  @Post('/create')
  async createCommodity() {
    return  await this.CommodityService.createCommodity();
  }

  // 删除用户
  @Post('/remove')
  async removeCommodity() {
    return await this.CommodityService.removeCommodity();
  }

  // 更新用户
  @Post('/update')
  async updateCommodity() {
    return await this.CommodityService.updateCommodity();
  }

  // 查找所有用户
  @Get('/find')
  async findAllCommodity() {
    return await this.CommodityService.findAllCommodity();
  }

  // 查找某个用户
  @Get('/find/:ID')
  async findCommodity() {
    return await this.CommodityService.findCommodity();
  }

}

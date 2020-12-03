import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL, Get, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserRegisterService } from 'src/service/user/register';
import { SellerService } from 'src/service/user/seller';

@Provide()
@Controller('/api/admin/user/seller')
export class ServerUserSellerController {

  @Inject()
  userRegisterService: UserRegisterService;

  @Inject()
  sellerService: SellerService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;



  // 获取商家详细信息
  @Get()
  async find(@Query(ALL) findQuery) {
    return await this.sellerService.find(findQuery)
  }

  // 更新商家信息
  @Post('/update')
  async register(@Body(ALL) registerBody) {
    let data:any =  await this.userRegisterService.register(registerBody);
    if(!data.code){
      data.token = await this.jwt.sign({
        ...data
    }, this.jwtConfig.secret);
    }
    return data;
  }

  // 艺术家申请 registerList
  @Get('/applyList')
  async applyList(@Query(ALL) findQuery) {
    return await this.sellerService.applyList(findQuery)
  }

  /**
   * 设置艺术家状态
   * @param stateBody sellerId state
   */
  @Post('/setState')
  async updateSellerState(@Body(ALL) stateBody) {
    return await this.sellerService.updateSellerState(stateBody);
  }

  // 艺术家搜索
  @Get('/search')
  async applySearch(@Query(ALL) searchQuery) {
    console.log('search', searchQuery)
    return await this.sellerService.search(searchQuery);
  }




}

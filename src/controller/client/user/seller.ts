import { Inject, Controller, Get, Provide, Config, Plugin, ALL, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { SellerService } from 'src/service/user/seller';

@Provide()
@Controller('/api/user/seller')
export class UserSellerController {

  @Inject()
  sellerService: SellerService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  // 搜索商家
  @Get('/search')
  async search(@Query(ALL) searchQuery) {
    let data:any =  await this.sellerService.search(searchQuery);

    console.log("search data", data)
    return data;

  }
}

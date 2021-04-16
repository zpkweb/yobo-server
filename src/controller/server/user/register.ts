import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL, Validate } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserRegisterService } from 'src/service/user/register';
// import { AdminUserRegisterDTO } from 'src/dto/user/register';
@Provide()
@Controller('/api/admin/user',{tagName:'后台管理-注册'})
export class AdminUserRegisterController {

  @Inject()
  userRegisterService: UserRegisterService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  // 注册用户
  @Post('/register',{summary:'注册用户'})
  @Validate()
  async register(@Body(ALL) registerBody) {
    return await this.userRegisterService.adminRegister(registerBody);
    // if(!data.code){
    //   data.token = await this.jwt.sign({
    //     ...data
    //   }, this.jwtConfig.secret);
    // }
    // return data;
  }

  // 添加管理员
  @Post('/admin/register',{summary:'添加管理员'})
  async adminRegister(@Body(ALL) registerBody) {
    return await this.userRegisterService.createAdmin(registerBody);
    // if(!data.code){
    //   data.token = await this.jwt.sign({
    //     ...data
    // }, this.jwtConfig.secret);
    // }
    // return data;

  }

  // 添加客服
  @Post('/customerService/register',{summary:'添加客服'})
  async customerServiceRegister(@Body(ALL) registerBody) {
    let data:any =  await this.userRegisterService.createCustomerService(registerBody);
    if(!data.code){
      data.token = await this.jwt.sign({
        ...data
    }, this.jwtConfig.secret);
    }
    return data;

  }

  // 申请成为艺术家
  @Post('/seller/apply',{summary:'申请成为艺术家'})
  async apply(@Body(ALL) applySellerBody) {
    const data =  await this.userRegisterService.applySeller(applySellerBody);
    return data;

  }



}

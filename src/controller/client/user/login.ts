import { Inject, Controller, Post, Provide, Config, Plugin, Body, ALL, Get, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { LoginService } from 'src/service/user/login';
import { UserRegisterService } from 'src/service/user/register';
import { UserService } from 'src/service/user/user';
import { SellerService } from 'src/service/user/seller';

@Provide()
@Controller('/api/user',{tagName: '登录'})
export class UserLoginController {

  @Inject()
  loginService: LoginService;

  @Inject()
  userRegisterService: UserRegisterService;

  @Inject()
  userService: UserService;

  @Inject()
  sellerService: SellerService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  @Config('email')
  email;

  // 注册成为普通用户
  @Post('/register',{summary: '注册成为普通用户'})
  async register(@Body(ALL) registerBody) {
    let data:any =  await this.userRegisterService.registerUser(registerBody);
    if(data.success){
      data.data.token = await this.jwt.sign({
        ...data,
        identitys: data.identitys
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

  // 登录
  @Post('/login',{summary:'登录'})
  async login(@Body(ALL) loginBody) {
    let data:any =  await this.loginService.login(loginBody);
    if(data.success){
      data.data.token = await this.jwt.sign({
        ...data,
        identitys: data.identitys
      }, this.jwtConfig.secret);
    }
    return data;

  }


  /**
   * 找回密码：发送验证码
   * @param retrievePasswordBody
   */
  @Post('/password/retrieve/code/send',{summary:'找回密码：发送验证码'})
  async passwordRetrieveCodeSend(@Body(ALL) codeSendBody) {
    const code = Math.random().toString().slice(-6);

    return await this.userService.passwordRetrieveCodeSend({
      sendMail: {
        title: 'yobo-找回密码的验证码',
        code,
        codeTime: 1000*60*10,
        codeTimeText: '10分钟内有效',
      },
      ...this.email,
      ...codeSendBody
    })

  }

  /**
   * 找回密码：验证验证码
   * @param retrievePasswordBody
   */
  @Post('/password/retrieve/code/verify',{summary:'找回密码：验证验证码'})
  async passwordRetrieveCodeVerify(@Body(ALL) codeVerifyBody) {

    return await this.userService.passwordRetrieveCodeVerify({
      ...codeVerifyBody
    })

  }

  // 搜索商家
  @Get('/seller/search',{summary:'搜索商家'})
  async search(@Query(ALL) searchQuery) {
    let data:any =  await this.sellerService.searchSeller(searchQuery);
    return data;
  }

}

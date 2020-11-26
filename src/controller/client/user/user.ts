import { Inject, Controller, Post, Provide, Get, Config, Plugin, Body, ALL } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from 'src/service/user/user'

@Provide()
@Controller('/api/user', { middleware: [ 'authorizeMiddleware' ] })
export class UserController {

  @Inject()
  userService: UserService;

  @Inject()
  ctx: Context;

  @Config('email')
  email;


  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  @Plugin()
  redis;
  /**
   * 查找个人信息
   */
  @Get('/self')
  async self() {
    return await this.userService.findSelf(this.ctx.state.user.userId);
  }

  /**
   * 修改密码
   * @param changePasswordBody
   */
  @Post('/password/update')
  async changePassword(@Body(ALL) changePasswordBody){
    return await this.userService.changePassword(changePasswordBody);
  }

  /**
   * 找回密码：发送验证码
   * @param retrievePasswordBody
   */
  @Post('/password/retrieve/code/send')
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
  @Post('/password/retrieve/code/verify')
  async passwordRetrieveCodeVerify(@Body(ALL) codeVerifyBody) {

    return await this.userService.passwordRetrieveCodeVerify({
      ...codeVerifyBody
    })

  }


  /**
   * 更新个人信息
   * @param updateBody
   */
  @Post('/update')
  async updateUser(@Body(ALL) updateBody) {
    return await this.userService.update({
      userId: this.ctx.state.user.userId,
      ...updateBody
    });
  }

  /**
   * 获取用户地址
   * @param addressBody
   */
  @Get('/address')
  async getAddress(@Body(ALL) addressBody) {
    return await this.userService.getAddress({
      userId: this.ctx.state.user.userId
    });
  }

  /**
   * 添加用户地址
   * @param addressBody
   */
  @Post('/address')
  async address(@Body(ALL) addressBody) {
    return await this.userService.address(addressBody);
  }

  /**
   * 更新用户地址
   * @param addressBody
   */
  @Post('/address/update')
  async addressUpdate(@Body(ALL) addressBody) {
    return await this.userService.addressUpdate(addressBody);
  }

  /**
   * 删除用户地址
   * @param addressBody
   */
  @Post('/address/remove')
  async addressRemove(@Body(ALL) addressBody) {
    return await this.userService.addressRemove(addressBody);
  }



}

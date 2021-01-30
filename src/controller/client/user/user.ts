import { Inject, Controller, Post, Provide, Get, Config, Plugin, Body, ALL, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from 'src/service/user/user';
import { SellerService } from 'src/service/user/seller';
import UserAddressService from 'src/service/user/address';

@Provide()
// @Controller('/api/user',  { tagName: 'user', middleware: [ 'authorizeMiddleware' ] })
@Controller('/api/user')
export class UserController {

  @Inject()
  userService: UserService;

  @Inject()
  sellerService: SellerService;

  @Inject()
  userAddressService: UserAddressService;

  @Inject()
  ctx: Context;

  @Config('email')
  email;


  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;


  /**
   * 查找个人信息
   */
  @Get('/info')
  async info(@Query() userId) {
    return await this.userService.findInfo(userId);
  }

  @Get('/self')
  async self(@Query() userId) {
    return await this.userService.findSelf(userId);
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
   * 更新个人信息
   * @param updateBody
   */
  @Post('/update')
  async updateUser(@Body(ALL) updateBody) {
    return await this.userService.update({
      userId: updateBody.userId,
      ...updateBody
    });
  }

  /**
   * 获取用户地址
   * @param addressBody
   */
  @Get('/address')
  async getAddress(@Body() userId) {
    return await this.userAddressService.retrieve(userId);
  }

  /**
   * 添加用户地址
   * @param addressBody
   */
  @Post('/address')
  async address(@Body(ALL) addressBody) {
    return await this.userAddressService.create(addressBody);
  }

  /**
   * 更新用户地址
   * @param addressBody
   */
  @Post('/address/update')
  async addressUpdate(@Body(ALL) addressBody) {
    return await this.userAddressService.updateAddress(addressBody);
  }

  /**
   * 删除用户地址
   * @param addressBody
   */
  @Post('/address/remove')
  async addressRemove(@Body() userId) {
    return await this.userAddressService.remove(userId);
  }



}

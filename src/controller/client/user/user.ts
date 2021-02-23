import { Inject, Controller, Post, Provide, Get, Config, Plugin, Body, ALL, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from 'src/service/user/user';
import { SellerService } from 'src/service/user/seller';
import UserAddressService from 'src/service/user/address';

@Provide()
// @Controller('/api/user',  { tagName: 'user', middleware: [ 'authorizeMiddleware' ] })
@Controller('/api/user',{tagName: '用户'})
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
  @Get('/info',{summary:'查找个人信息'})
  async info(@Query() userId) {
    return await this.userService.findInfo(userId);
  }

  @Get('/self',{summary:'查找个人信息'})
  async self(@Query() userId) {
    return await this.userService.findSelf(userId);
  }

  /**
   * 修改密码
   * @param changePasswordBody
   */
  @Post('/password/update',{summary:'修改密码'})
  async changePassword(@Body(ALL) changePasswordBody){
    return await this.userService.changePassword(changePasswordBody);
  }




  /**
   * 更新个人信息
   * @param updateBody
   */
  @Post('/update',{summary:'更新个人信息'})
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
  @Get('/address',{summary:'获取用户地址'})
  async getAddress(@Body() userId) {
    return await this.userAddressService.retrieve(userId);
  }

  /**
   * 添加用户地址
   * @param addressBody
   */
  @Post('/address',{summary:'添加用户地址'})
  async address(@Body(ALL) addressBody) {
    return await this.userAddressService.create(addressBody);
  }

  /**
   * 更新用户地址
   * @param addressBody
   */
  @Post('/address/update',{summary:'更新用户地址'})
  async addressUpdate(@Body(ALL) addressBody) {
    return await this.userAddressService.updateAddress(addressBody);
  }

  /**
   * 删除用户地址
   * @param addressBody
   */
  @Post('/address/remove',{summary:'删除用户地址'})
  async addressRemove(@Body() userId) {
    return await this.userAddressService.remove(userId);
  }



}

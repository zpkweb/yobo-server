import { Provide, Plugin, Config } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserIdentityEntity } from 'src/entity/user/identity/identity';
import { UserIdentityListEntity } from 'src/entity/user/identity/list';
import { UserAddressEntity } from 'src/entity/user/address';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';
import { BaseSellerServer } from '../base/seller';

@Provide()
export class UserService extends BaseSellerServer {

  @Plugin()
  redis;

  @Config('email')
  email;

  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;


  @InjectEntityModel(UserIdentityEntity)
  userIdentityEntity: Repository<UserIdentityEntity>;

  @InjectEntityModel(UserIdentityListEntity)
  userIdentityListEntity: Repository<UserIdentityListEntity>;

  @InjectEntityModel(UserAddressEntity)
  userAddressEntity: Repository<UserAddressEntity>;

  /**
   * 搜索用户通过：name, email, phone
   * @param payload
   */
  async search(payload) {
    let user: UserEntity | UserEntity[];
    if(payload && Object.keys(payload).length){
      user = await this.baseSearchUser(payload)
    }else{
      user = await this.baseRetrieveUserAll()
    }
    if(user){
      return {
        data: user,
        success: true,
        code : 10009
      }
    }else{
      return {
        success: false,
        code : 10010
      }
    }
  }

  /**
   * 查找用户
   * @param payload type userId
   * type: identitys
   */
  async find(payload) {
    let user: UserEntity | UserEntity[];
    if(payload && Object.keys(payload).length){
      user = await this.baseRetrieveUser(payload)
    }else{
      user = await this.baseRetrieveUserAll()
    }
    if(user){
      return {
        data: user,
        success: true,
        code : 10009
      }
    }else{
      return {
        success: false,
        code : 10010
      }
    }
  }

  // 删除用户
  async remove(payload) {
    let user;
    if(payload && Object.keys(payload).length){
      user = await this.baseDeleteUser(payload)
    }else{
      user = await this.baseDeleteUserAll()
    }

    if(user.affected){
      return {
        data: user,
        success: true,
        code : 10005
      }
    }else{
      return {
        success: false,
        code : 10006
      }
    }
  }


  /**
   * 查找个人信息
   * @param userId
   */
  async findSelf(userId) {
    const user =  await this.baseRetrieveSelf({
      userId
    })
      if(user){
        return {
          data: user,
          success: true,
          code : 10009
        }
      }else{
        return {
          success: false,
          code : 10010
        }
      }
  }

  /**
   * 修改密码
   */

  async changePassword(payload) {
    // 查找用户
    const user = await this.baseRetrieveUser(payload)
    if(!user){
      // 找不到用户
      return{
        success: false,
        code: 10202
      }
    }
    const passwordMd5 = crypto.createHash('md5').update(payload.passwordOld).digest('hex');
    if(passwordMd5 !== user.password){
      // 用户密码不正确
      return {
        success: false,
        code : 10204
      }
    }
    const changeUser = await this.baseUpdateUser({
      userId: user.userId,
      password: payload.passwordNew
    })


    if(changeUser.affected){
      return {
        success: true,
        code : 10007
      }
    }else{
      return {
        success: false,
        code : 10008
      }
    }

  }

  /**
   * 发送找回密码验证码的邮件
   * @param payload
   */
  async passwordRetrieveCodeSend(payload) {
    let transporter = nodemailer.createTransport({
      // host: "smtp.qq.com",
      service: this.email.service,
      port: 465,
      secureConnection: true,
      auth: {
        user: this.email.user,
        pass: this.email.pass
      },
    });

    // send mail with defined transport object
    const data =  await transporter.sendMail({
      from: this.email.user,
      to: payload.email,
      subject: payload.sendMail.title,
      html: `<p>`+payload.sendMail.title+`：<span style="font-size: 18px; color: red">` + payload.sendMail.code + `</span></p><p style="font-size: 14px;color:#666;">`+ payload.sendMail.codeTimeText +`</p>`
    });

    if(data.messageId){
      await this.redis.set(`emailCode-${payload.userId}`, payload.code)
      setTimeout(() => {
        this.redis.del(`emailCode-${payload.userId}`).then((results) => {
          console.log("del", results)
        });
      }, payload.codeTime)
      return {
        success: true,
        code : 10405
      }
    }else{
      return {
        success: false,
        code : 10406
      }
    }
  }

  /**
   * 验证验证码
   * @param payload
   */
  async passwordRetrieveCodeVerify(payload) {
    const redisEmailCode = await this.redis.get(`emailCode-${payload.userId}`);
    if(redisEmailCode && redisEmailCode === payload.code){
      // 验证成功
      return {
        success: true,
        code : 10407
      }
    }else{
      // 验证失败
      return {
        success: false,
        code : 10408
      }
    }
  }


  /**
   * 更新用户
   * @param payload
   */
  async update(payload) {
    // 查找用户
    const user = await this.baseRetrieveUser(payload);
    if(!user){
      return {
        success: false,
        code: 10202
      }
    }
    const userUpdate = await this.baseUpdateUser(payload);

    if(userUpdate.affected){
      // 修改成功
      return {
        success: true,
        code : 10007
      }
    }else{
      // 修改失败
      return {
        success: false,
        code : 10008
      }
    }

  }




  /**
   * 获取用户地址
   * @param payload
   */
  async getAddress(payload) {
    const address =  await this.baseRetrieveUserAddress(payload);

    if(address){
      return{
        data: address,
        success: true,
        code: 10009
      }
    }else{
      return{
        success: false,
        code: 10010
      }
    }
  }

  /**
   * 创建用户地址
   * @param payload
   */
  async address(payload) {
    let address = await this.baseCreateUserAddress(payload);

    if(address.identifiers[0].id){

      await this.userAddressEntity
      .createQueryBuilder()
      .relation(UserAddressEntity, "user")
      .of(address.identifiers[0].id)
      .set({userId: payload.userId})

    let userAddress = await this.baseRetrieveUserAddress(payload);
    if(userAddress){
      return {
        data: userAddress,
        success: true,
        code : 10003
      }
    }else{
      return{
        success: false,
        code: 10010
      }
    }

    }else{
      return {
        success: false,
        code : 10004
      }
    }


  }

  /**
   * 更新用户地址
   * @param payload
   */
  async addressUpdate(payload) {

    const address = await this.baseUpdateUserAddress({
      name: payload.address.name || '',
        phone: payload.address.email || '',
        city: payload.address.phone || '',
        address: payload.address.address || ''
    })
      if(address.affected){
        let user = await this.baseRetrieveUserAddress(payload)
        if(user){
          return {
            data: user,
            success: true,
            code : 10007
          }
        }else{
          return{
            success: false,
            code: 10010
          }
        }

      }else{
        return {
          success: false,
          code : 10008
        }
      }
  }

  /**
   * 删除用户地址
   * @param payload
   */
  async addressRemove(payload) {
    const address = await this.baseDeleteUserAddress(payload);
      if(address.affected){
        return {
          success: true,
          code : 10005
        }
      }else{
        return {
          success: false,
          code : 10006
        }
      }
  }

}

import { Provide, Config, Inject } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';
import { BaseUserService } from '../base/user/user';

import { BaseIdentityService } from 'src/service/base/user/identity'
import { IdentityService } from 'src/service/user/identity';
@Provide()
export class UserService{

  @Config('email')
  email;

  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  @Inject()
  baseUserService: BaseUserService;

  @Inject()
  baseIdentityService: BaseIdentityService;

  @Inject()
  identityService: IdentityService;

  async create(payload) {
    // 查询姓名是否存在
    if(payload.name){
      const hasUserName = await this.baseUserService.baseRetrieveUserName(payload.name);
      if(hasUserName) {
        return {
          success: false,
          code: 10208
        }
      }
    }else{
      return {
        success: false,
        code: 10104
      }
    }

    // 查询邮箱是否已已存在
    if(payload.email){
      const hasUserEmail = await this.baseUserService.baseRetrieveUserEmail(payload.email);
      if(hasUserEmail) {
        return {
          success: false,
          code: 10210
        }
      }
    }else{
      return {
        success: false,
        code: 10104
      }
    }

    // 查询手机号是否已存在
    if(payload.Phone){
      const hasUserPhone = await this.baseUserService.baseRetrieveUserPhone(payload.Phone);
      if(hasUserPhone) {
        return {
          success: false,
          code: 10212
        }
      }
    }

    // 创建用户
    const user = await this.baseUserService.baseCreateUser({
      avatar: payload.avatar || '',
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password ? crypto.createHash('md5').update(payload.password).digest('hex') : '123456'
    });
    if(user){
      const userId = user.generatedMaps[0].userId;
      if(userId && payload.identityList && payload.identityList.length) {
        for(let item of payload.identityList) {
            // console.log(item);
            const userIdentity = await this.identityService.retrieveUserIdentityList({
              userId: userId,
              identityIndex: item.value
            });
            if(userIdentity.success) {
              if(!item.check){
                // delete
                const deleteIdentity = await this.identityService.deleteUserIdIdentityId({
                  userId: userId,
                  identityIndex: item.value
                })
                if(deleteIdentity.success) {

                }
              }
            }else{
              if(item.check){
                // create
                const identity = await this.identityService.create({
                  userId: userId,
                  identityIndex: item.value
                })
                if(identity.success) {

                }
              }
            }

        }
      }
      return {
        success: true,
        code: 10003,
      }
    }else{
      return {
        success: false,
        code: 10004
      }
    }

  }



  /**
   * 搜索用户通过：name, email, phone
   * @param payload
   */
  async search(payload) {
    let user: UserEntity | UserEntity[];

    if(payload && Object.keys(payload).length){
      let isParams = false;
      Object.keys(payload).forEach((item) => {
        if(payload[item]){
          isParams = true;
        }

      })
      if(isParams){
        let result = await this.baseUserService.baseSearchUser(payload);
          let data = result[0];
          let total = result[1];
          if (data) {
            return {
              data: {
                list: data,
                total
              },
              success: true,
              code: 10009
            }
          } else {
            return {
              success: false,
              code: 10010
            }
          }

      }else{
        user = await this.baseUserService.baseRetrieveUserAll()
      }

    }else{
      user = await this.baseUserService.baseRetrieveUserAll()
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
    let user:any;
    if(payload && Object.keys(payload).length){
      user = await this.baseUserService.baseRetrieveUserId(payload.userId)
    }else{
      user = await this.baseUserService.baseRetrieveUserAll()
    }
    if(user){
          // 通过用户 userId 获取身份信息
          const identityList:any = await this.baseIdentityService.baseRetrieveUserIdentity(payload.userId)
          if(identityList) {
            let identityLists = new Set();
            for(let item of identityList){
              identityLists.add(item.identityIndex)
            }
            user.identityList = [...identityLists];
          }


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
  async retrieveUserId(userId) {
    const user = await this.baseUserService.baseRetrieveUserId(userId);
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

  async edit(userId) {
    const user = await this.baseUserService.baseRetrieveUserId(userId)
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
  async remove(userId) {
    const user = await this.baseUserService.baseDeleteUser(userId)
    // let user;
    // if(payload && Object.keys(payload).length){
    //   user = await this.baseUserService.baseDeleteUser(payload)
    // }else{
    //   user = await this.baseUserService.baseDeleteUserAll()
    // }

    if(user.affected){
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


  /**
   * 查找个人信息
   * @param userId
   */
  async findInfo(userId) {
    let user:any;
    // base
    const base =  await this.baseUserService.baseRetrieveUserId(userId)
    if(base){
      user = base;
    }else{
      return {
        success: false,
        code : 10010
      }
    }
    // identitys
    const identitys =  await this.baseUserService.baseRetrieveUserId(userId)
    if(identitys){
      user = identitys;
    }else{
      return {
        success: false,
        code : 10010
      }
    }
    // address

    // seller

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
  // async findSelf(userId) {
  //   const user =  await this.baseUserService.baseRetrieveSelf(userId)

  //     if(user){
  //       return {
  //         data: user,
  //         success: true,
  //         code : 10009
  //       }
  //     }else{
  //       return {
  //         success: false,
  //         code : 10010
  //       }
  //     }
  // }

  /**
   * 查找用户是否存在
   * @param userId
   */
  async hasUser(userId) {
    const user =  await this.baseUserService.BaseHas(userId)
      if(user){
        return {
          data: user,
          success: true,
          code : 10201
        }
      }else{
        return {
          success: false,
          code : 10202
        }
      }
  }

  /**
   * 修改密码
   */

  async changePassword(payload) {
    // 查找用户
    const user = await this.baseUserService.baseRetrieveUser(payload)
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
    const changeUser = await this.baseUserService.baseUpdateUser({
      userId: user.userId,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: crypto.createHash('md5').update(payload.passwordNew).digest('hex')
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
    // 通过邮箱查找用户
    const user = await this.baseUserService.baseRetrieveUser(payload);
    if(!user) {
      return {
        success: false,
        code: 10413
      }
    }

    let transporter = nodemailer.createTransport({
      // host: "smtp.qq.com",
      service: this.email.service,
      port: this.email.port,
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
      // html: `<p>`+payload.sendMail.title+`：<span style="font-size: 18px; color: red">` + payload.sendMail.code + `</span></p><p style="font-size: 14px;color:#666;">`+ payload.sendMail.codeTimeText +`</p>`
      html: `<p>`+payload.sendMail.title+`：<span style="font-size: 18px; color: red">` + payload.sendMail.code + `</span></p>`
    });

    if(data.messageId){
      // await this.redis.set(`emailCode-${payload.userId}`, payload.code)
      global[`emailCode-${user.userId}`] = payload.sendMail.code
      // setTimeout(() => {
      //   // this.redis.del(`emailCode-${payload.userId}`).then((results) => {
      //   // });
      //   global[`emailCode-${user.userId}-${payload.sendMail.code}`] = null;
      // }, payload.codeTime)
      return {
        data: user,
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
    // const emailCode = await this.redis.get(`emailCode-${payload.userId}`);
    const emailCode = global[`emailCode-${payload.userId}`];
    if(emailCode && emailCode === payload.code){
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
    const user:any = await this.baseUserService.baseRetrieveUserPass(payload.userId);
    if(!user){
      return {
        success: false,
        code: 10202
      }
    }

    // 密码
    let password = '';
    if(payload.password){
      password = crypto.createHash('md5').update(payload.password).digest('hex')
    }else{
      password = user.password
    }

    // 身份
    if(payload.identityList && payload.identityList.length) {
      for(let item of payload.identityList) {

          // 查找
          const userIdentity = await this.identityService.retrieveUserIdentityList({
            userId: payload.userId,
            identityIndex: item.value
          });
          console.log("userIdentity", userIdentity);
          if(userIdentity.success) {
            if(!item.check){
              // delete
              const deleteIdentity = await this.identityService.deleteUserIdIdentityId({
                userId: payload.userId,
                identityIndex: item.value
              })
              console.log("deleteIdentity", deleteIdentity)
              if(deleteIdentity.success) {

              }
            }
          }else{
            if(item.check){
              // create
              const identity = await this.identityService.create({
                userId: payload.userId,
                identityIndex: item.value
              })
              console.log("identity", identity)
              if(identity.success) {

              }
            }
          }

      }
    }


    const userUpdate = await this.baseUserService.baseUpdateUser({
      userId: user.userId,
      avatar: payload.avatar || user.avatar,
      name: payload.name || user.name,
      email: payload.email || user.email,
      phone: payload.phone || user.phone,
      password: password
    });

    if(userUpdate.affected){
      // 获取用户
      // const user = await this.baseUserService.baseRetrieveUser(payload);
        // 修改成功
        return {
          // data: user,
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
   * 删除用户身份
   * @param payload
   * identity
   * userId
   */
  async deleteUserIdentity(payload) {
    const userIdentity = await this.baseUserService.baseDeleteUserIdentity(payload);
    if(userIdentity.affected){
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

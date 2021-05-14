import { Inject, Provide, Config } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserSellerEntity } from 'src/entity/user/seller/seller';
import { UserSellerMetadataEntity } from 'src/entity/user/seller/metadata';
import { UserSellerStudioEntity } from 'src/entity/user/seller/studio';
import { UserSellerResumeEntity } from 'src/entity/user/seller/resume';
import { UserIdentityEntity } from 'src/entity/user/identity/identity';
import { UserAdminEntity } from 'src/entity/user/admin/admin';
import { UserCustomerServiceEntity } from 'src/entity/user/customerService/customerService';
import { BaseUserServer } from "../base/user/user";
import { BaseSellerServer } from '../base/user/seller';
import { BaseIdentityListServer } from '../base/user/identity/list';
import * as nodemailer from 'nodemailer';

@Provide()
export class UserRegisterService {

  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  @InjectEntityModel(UserSellerEntity)
  userSellerEntity: Repository<UserSellerEntity>;

  @InjectEntityModel(UserSellerMetadataEntity)
  userSellerMetadataEntity: Repository<UserSellerMetadataEntity>;

  @InjectEntityModel(UserSellerStudioEntity)
  userSellerStudioEntity: Repository<UserSellerStudioEntity>;

  @InjectEntityModel(UserSellerResumeEntity)
  userSellerResumeEntity: Repository<UserSellerResumeEntity>;

  @InjectEntityModel(UserIdentityEntity)
  userIdentityEntity: Repository<UserIdentityEntity>;


  @InjectEntityModel(UserAdminEntity)
  userAdminEntity: Repository<UserAdminEntity>;

  @InjectEntityModel(UserCustomerServiceEntity)
  userCustomerServiceEntity: Repository<UserCustomerServiceEntity>;

  @Inject()
  baseUserServer: BaseUserServer;

  @Inject()
  baseSellerServer: BaseSellerServer;

  @Inject()
  baseIdentityListServer: BaseIdentityListServer;

  @Config('email')
  email;

  /**
   * 注册普通用户 80
   * @param payload
   */
  async registerUser(payload) {
    const registerUser = await this.register(Object.assign({}, {
      sourceType: 'user',
      identityIndex: 80,
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || '',
      avatar: payload.avatar || '',
    }, payload));

    if(registerUser.success){
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
      await transporter.sendMail({
        from: this.email.user,
        to: payload.email,
        subject: 'yobo-注册成功',
        // html: `<p>`+payload.sendMail.title+`：<span style="font-size: 18px; color: red">` + payload.sendMail.code + `</span></p><p style="font-size: 14px;color:#666;">`+ payload.sendMail.codeTimeText +`</p>`
        html: `<p><img src="http://39.105.190.188:7001/images/user-success.jpg" /></p><p style="font-size:16px;">尊贵的阁下，欢迎加入永宝YOROART！</p><p style="font-size:16px;">您可以点击此链接<span style="font-size: 12px; color: red">开启您的艺术之旅+（连接<a href="http://39.105.190.188:8088/">http://39.105.190.188:8088/</a>)</span></p><p style="font-size:16px;">我们始终致力于为用户带来灵活便利的服务体验，通过YOBOART连接彼此、获取灵感以及拓展业务。我们希望您能够充分享受您的会籍权益，再次感谢您成为我们的会员。在我们的心目中，您也是永宝大家庭中的一员。</p>`
      });

      // if(data.messageId){
      //   return {
      //     success: true,
      //     code : 10405
      //   }
      // }else{
      //   return {
      //     success: false,
      //     code : 10406
      //   }
      // }
    }

    return registerUser;
  }

  /**
   * 申请成为商家 5
   * @param payload
   */
  async applySeller(payload) {
    let userId = payload.userId;
    // 判断用户身份
    if(payload.email){
      const user = await this.hasUserEmail(payload.email);
      if(user.success){
        userId = user.data.userId;
      }
    }

    if(userId) {
      // const changeUser = await this.baseUserServer.baseUpdateUser({
      //   userId: payload.userId,
      // })

      // 用户是否关联艺术家信息
      const applySeller = await this.baseSellerServer.baseApplySeller(userId);
      if(applySeller){
        return {
          success: false,
          code: 10411
        }
      }

      // if(!changeUser.affected){
      //   return {
      //     success: false,
      //     code : 10008
      //   }
      // }
    }


    return await this.register(Object.assign({}, {
      sourceType: 'user',
      identityIndex: 5,
      banner: payload.banner || '',
      name: payload.firstname + payload.lastname || '',
      firstname: payload.firstname || '',
      lastname: payload.lastname || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || '',
      state: 0,
      avatar: payload.avatar || '',
    }, payload));

  }

  /**
   * 后台管理 注册 用户
   * @param payload
   */
  async adminRegister(payload) {
    let adminRegister;
    switch(payload.identity){
      case 'ordinary':
        adminRegister = await this.adminRegisterUser(payload);
        break;
      case 'seller':
        adminRegister = await this.registerSeller(payload);
        break;
      case 'customerService':
        adminRegister = await this.createCustomerService(payload);
        break;
      case 'admin':
        adminRegister = await this.createAdmin(payload);
        break;
      case 'superAdmin':
        adminRegister = await this.createSuperAdmin(payload);
        break;
    }
    return adminRegister;

  }

  /**
   * 注册普通用户 80
   * @param payload
   */
  async adminRegisterUser(payload) {
    return await this.register(Object.assign({}, {
      sourceType: 'admin',
      identityIndex: 80,
      avatar: payload.avatar || '',
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || '',
    }, payload));
  }

  /**
   * 管理员 注册 商家 5
   * @param payload
   */
  async registerSeller(payload) {
    return await this.register(Object.assign({}, {
      sourceType: 'admin',
      identityIndex: 5,
      banner: payload.banner || '',
      avatar: payload.avatar || '',
      name: payload.firstname + payload.lastname || '',
      firstname: payload.firstname || '',
      lastname: payload.lastname || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || '',
      state: payload.state || 1,
    }, payload));

  }

  /**
   * 创建客服 3
   * @param payload
   */
  async createCustomerService(payload) {
    return await this.register(Object.assign({}, {
      sourceType: 'admin',
      identityIndex: 3,
      avatar: payload.avatar || '',
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || '',
    }, payload));
  }

  /**
   * 注册成为管理员 2
   * @param payload
   */
  async createAdmin(payload) {
    return await this.register(Object.assign({}, {
      sourceType: 'admin',
      identityIndex: 2,
      avatar: payload.avatar || '',
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || '',
    }, payload));
  }


  /**
   * 注册成为超级管理员 2
   * @param payload
   */
  async createSuperAdmin(payload) {
    return await this.register(Object.assign({}, {
      sourceType: 'superAdmin',
      identityIndex: 1,
      avatar: payload.avatar || '',
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || '',
    }, payload));
  }



  /**
   * 注册账号
   * @param payload
   */
  async register(payload) {
    let user:any;
    let userName:any;
    let userEmail:any;
    let newUser:any;
    // 已有用户
    if(payload.userId) {

      newUser = {
        success: true,
        userId: payload.userId
      }

    }else{
      // 判断用户是否存在
      user = await this.hasUser(payload);
      userName = await this.hasUserName(payload.name);
      userEmail = await this.hasUserEmail(payload.email);

      if(userName.success && payload.identityIndex !== 5) {
        return Object.assign({}, userName, {success:false})
      }

      if(userEmail.success && payload.identityIndex !== 5) {
        return Object.assign({}, userEmail, {success:false})
      }

      // 添加用户
      newUser = await this.addUser(payload, userEmail);
      if(!newUser.success){
        return newUser;
      }
    }


    let identityIndexs = [];
    switch(payload.identityIndex){
      case 1:
      case 2:
      case 3:
      case 5:
        identityIndexs = ["80", payload.identityIndex];
        break;
      case 70:
      case 80:
      case 90:
      default:
        identityIndexs = [payload.identityIndex]
        break;

    }
    // 添加身份
    const userIdentity:any = await this.addUserIdentitys({
      identityIndexs: identityIndexs,
      userId: newUser.userId,
      userName: payload.name,
      userEmail: payload.email,
      userPhone: payload.phone
    });
    if(!userIdentity.success) {
      return userIdentity;
    }

    // 添加商家信息
    if(payload.identityIndex === 5){
      let seller: any = await this.addSeller({
        ...payload,
        userId: newUser.userId
      });
      if(!seller.success){
        return seller;
      }
    }


    // 返回用户关联身份
    if(newUser.success){
      // 获取用户
      user = await this.baseUserServer.baseRetrieveUserId(newUser.userId)

      return {
        data: user,
        success: true,
        code : 10003
      }
    }else{
      return {
        success: false,
        code : 10004
      }
    }
  }

  /**
   * 判断用户是否存在
   * @param payload
   */
    async hasUser(payload) {
      const user:any = await this.baseUserServer.baseRetrieveUser(payload);
      if(user){
        return {
          data: user,
          success: true,
          code: 10201
        }
      }else{
        return {
          success: false,
          code: 10202
        }
      }
    }
  /**
   * 判断用户名是否存在
   * @param payload
   */
   async hasUserName(name) {
    const user:any = await this.baseUserServer.baseRetrieveUserName(name);
    if(user){
      return {
        data: user,
        success: true,
        code: 10208
      }
    }else{
      return {
        success: false,
        code: 10209
      }
    }
  }
  /**
   * 判断用户邮箱是否存在
   * @param payload
   */
   async hasUserEmail(email) {
    const user:any = await this.baseUserServer.baseRetrieveUserEmail(email);
    if(user){
      return {
        data: user,
        success: true,
        code: 10210
      }
    }else{
      return {
        success: false,
        code: 10211
      }
    }
  }
  /**
   * 添加用户
   * @param payload
   */
    async addUser(payload, user) {
      if(user.success){
        if(payload.identityIndex == '5'){
          return {
            userId: user.data.userId,
            success: true,
            code: 10201
          }
        }else{
          return {
            success: false,
            code: 10201
          }
        }

      }else{
        // 创建用户
        let newUser: any = await this.baseUserServer.baseCreateUser(payload);
        if(newUser.generatedMaps[0].userId){
          return {
            userId: newUser.generatedMaps[0].userId,
            success: true,
            code: 10003
          }
        }else{
          return {
            success: false,
            code: 10004
          }
        }
      }
    }
  /**
   * addUserIdentitys
   * @param payload
   */

   async addUserIdentitys(payload) {
    for(let item of payload.identityIndexs) {
      let userIdentity = await this.addUserIdentity({
        identityIndex: item,
        userId: payload.userId,
        userName: payload.userName,
        userEmail: payload.userEmail,
        userPhone: payload.userPhone
      });

      if(!userIdentity.success){
        return userIdentity;
      }
    }

    return {
      success: true,
      code: 10009
    };;
   }
  /**
   * 创建身份
   * @param payload
   */
    async addUserIdentity(payload) {
      // 通过用户身份列表获取 用户身份
      let identityList = await this.baseIdentityListServer.baseRetrieveIdentityList({
        index: payload.identityIndex
      });
      if(!identityList){
        return {
          success: false,
          code: 10010
        };
      }
      let identity: any;
      // 查询用户身份
      identity = await this.baseUserServer.baseRetrieveUserIdentity({
        userId: payload.userId,
        zhcn: identityList['zh-cn']
      });
      if(identity){

      }else{
        // 创建用户的身份
        identity = await this.baseUserServer.baseCreateUserIdentity({
          ...identityList,
          userName: payload.userName,
          userEmail: payload.userEmail,
          userPhone: payload.userPhone
        });
        if(!identity){
          return {
            success: false,
            code: 10010
          };
        }

        // 用户身份 关联 用户身份列表

        await this.userIdentityEntity
          .createQueryBuilder()
          .relation(UserIdentityEntity, "identityList")
          .of(identity.identifiers[0].id)
          .set(identityList.id);


        // 用户身份 关联 用户

        await this.userIdentityEntity
          .createQueryBuilder()
          .relation(UserIdentityEntity, "user")
          .of(identity.identifiers[0].id)
          .set({ userId: payload.userId })
      }


      return {
        success: true,
        code: 10009
      };
    }

  /**
   * 添加 商家
   * @param payload
   */
    async addSeller(payload){
      // 添加商家信息
      const seller = await this.baseSellerServer.baseCreateSeller({
        state: payload.state,
        type: payload.type || 0,
        banner: payload.banner || '',
        typeName: payload.typeName || '',
        firstname: payload.firstname || '',
        lastname: payload.lastname || '',
        tags: payload.tags || [],
        label: payload.label || '',
        gender: payload.gender || '',
        country: payload.country || '',
      });
      if(!seller.identifiers[0].id){
        return {
          success: false,
          code: 10004
        };
      }
      // 添加商家基本信息
      const sellerMetadata = await this.baseSellerServer.baseCreateSellerMetadata({
        language: payload.language || '',
        findUs: payload.findUs || '',
        isFullTime: payload.isFullTime || '',
        onlineSell: payload.onlineSell || '',
        sold: payload.sold || '',
        channel: payload.channel || '',
        gallery: payload.gallery || '',
        medium: payload.medium || '',
        galleryInfo: payload.galleryInfo || '',
        recommend: payload.recommend || '',
        prize: payload.prize || '',
        website: payload.website || '',
        profile: payload.profile || '',
      });
      if(!sellerMetadata.identifiers[0].id){
        return {
          success: false,
          code: 10004
        };
      }
      // 商家 关联 商家基本信息
      await this.userSellerEntity
        .createQueryBuilder()
        .relation(UserSellerEntity, "metadata")
        .of({ sellerId: seller.generatedMaps[0].sellerId })
        .set(sellerMetadata.identifiers[0].id);
      // 商家 关联 用户
      await this.userSellerEntity
        .createQueryBuilder()
        .relation(UserSellerEntity, "user")
        .of(seller.identifiers[0].id)
        .set({ userId: payload.userId });
      return {
        success: true,
        code: 10003
      };
    }





















}


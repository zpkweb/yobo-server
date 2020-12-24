import { Inject, Provide } from '@midwayjs/decorator';
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

  /**
   * 注册普通用户 80
   * @param payload
   */
  async registerUser(payload) {
    return await this.register(Object.assign({}, {
      sourceType: 'user',
      identityIndex: 80,
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || ''
    }, payload));
  }

  /**
   * 申请成为商家 5
   * @param payload
   */
  async applySeller(payload) {
    return await this.register(Object.assign({}, {
      sourceType: 'user',
      identityIndex: 5,
      name: payload.firstname + payload.lastname || '',
      firstname: payload.firstname || '',
      lastname: payload.lastname || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || '',
      state: 0
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
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || ''
    }, payload));
  }

  /**
   * 管理员 注册 商家 5
   * @param payload
   */
  async registerSeller(payload) {
    console.log("registerSeller", payload)
    return await this.register(Object.assign({}, {
      sourceType: 'admin',
      identityIndex: 5,
      name: payload.firstname + payload.lastname || '',
      firstname: payload.firstname || '',
      lastname: payload.lastname || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || '',
      state: payload.state || 1
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
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || ''
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
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || ''
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
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || ''
    }, payload));
  }



  /**
   * 注册账号
   * @param payload
   */
  async register(payload) {
    console.log("register", payload)
    // 判断用户是否存在
    const user:any = await this.hasUser(payload);
    console.log("user", user)

    // 添加用户
    const newUser:any = await this.addUser(payload, user);
    console.log("newUser", newUser)
    if(!newUser.success){
      return newUser;
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
    console.log("identityIndexs", identityIndexs)
    // 添加身份
    const userIdentity:any = await this.addUserIdentitys({
      identityIndexs: identityIndexs,
      userId: newUser.userId
    });
    console.log("userIdentity", userIdentity)
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
    if(user){
      return {
        data: newUser,
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
      console.log("user", user)
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
   * 添加用户
   * @param payload
   */
    async addUser(payload, user) {

      if(user.success){
        if(payload.identityIndex === '5'){
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
        let newUser: any = await this.baseUserServer.baseCreateUser(Object.assign({
          name: '',
          email: '',
          phone: '',
          password: ''
        }, payload));
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
      console.log(item)
      let userIdentity = await this.addUserIdentity({
        identityIndex: item,
        userId: payload.userId
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
      console.log("identityList", identityList)
      if(!identityList){
        return {
          success: false,
          code: 10010
        };
      }

      // 创建用户的身份
      let identity: any = await this.baseUserServer.baseCreateUserIdentity(identityList);
      console.log("identity", identity)
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
        firstname: payload.firstname || '',
        lastname: payload.lastname || '',
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


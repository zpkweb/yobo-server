import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserSellerEntity } from 'src/entity/user/seller/seller';
import { UserSellerMetadataEntity } from 'src/entity/user/seller/metadata';
import { UserSellerStudioEntity } from 'src/entity/user/seller/studio';
import { UserSellerResumeEntity } from 'src/entity/user/seller/resume';
import { UserIdentityEntity } from 'src/entity/user/identity/identity';
import { UserIdentityListEntity } from 'src/entity/user/identity/list';
import { UserAdminEntity } from 'src/entity/user/admin/admin';
import { UserCustomerServiceEntity } from 'src/entity/user/customerService/customerService';
import * as crypto from 'crypto';
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

  @InjectEntityModel(UserIdentityListEntity)
  userIdentityListEntity: Repository<UserIdentityListEntity>;

  @InjectEntityModel(UserAdminEntity)
  userAdminEntity: Repository<UserAdminEntity>;

  @InjectEntityModel(UserCustomerServiceEntity)
  userCustomerServiceEntity: Repository<UserCustomerServiceEntity>;



  // 创建商家
  async createSeller(payload) {
    const seller = await this.userSellerEntity
      .createQueryBuilder()
      .insert()
      .into(UserSellerEntity)
      .values({
        state: payload.state,
        firstname: payload.firstname || '',
        lastname: payload.lastname || '',
        label: payload.label || '',
        gender: payload.gender || '',
        country: payload.country || '',
      })
      .execute()
      if (seller.identifiers[0].id) {
        return seller
      }else{
        return {
          success: false,
          code: 10004
        }
      }
  }
  // 创建商家基本信息
  async createSellerMetadata(payload) {
    const sellerMetadata =  await this.userSellerMetadataEntity
      .createQueryBuilder()
      .insert()
      .into(UserSellerMetadataEntity)
      .values({
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

      })
      .execute()
      if (sellerMetadata.identifiers[0].id) {
        return sellerMetadata
      }else{
        return {
          success: false,
          code: 10004
        }
      }
  }
  /**
   * 查找身份列表
   * @param id
   */
  async findIdentityList(index) {
    let identityList;
    if (index) {
      // 根据id返回身份列表
      identityList = await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .where("identityList.index = :index", { index: index })
        .getOne();
    } else {
      // 返回身份列表
      identityList = await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .getMany();
    }
    if (identityList) {
      return identityList;
    }else{
      // 不存在这个用户身份
      return {
        success: false,
        code: 10207
      }
    }

  }

  // 创建用户的身份
  async createUserIdentity(payload) {
    const userIdentity = await this.userIdentityEntity
      .createQueryBuilder()
      .insert()
      .into(UserIdentityEntity)
      .values({
        name: payload.name,
        ename: payload.ename,
        index: payload.index
      })
      .execute()
      if (userIdentity.identifiers[0].id) {
        return userIdentity
      }else{
        return {
          success: false,
          code: 10004
        }
      }
  }

  // 查找用户
  async getUser(payload) {
    console.log("getuser", payload)
    if (payload.email && payload.phone) {
      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.identitys', 'identitys')
        .where("user.email = :email OR user.phone = :phone", { email: payload.email, phone: payload.phone })
        .getOne();
    } else if (payload.email && !payload.phone) {
      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.identitys', 'identitys')
        .where("user.email = :email", { email: payload.email })
        .getOne();
    } else if (!payload.email && payload.phone) {
      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.identitys', 'identitys')
        .where("user.phone = :phone", { phone: payload.phone })
        .getOne();
    }

  }
  // 创建用户
  async createUser(payload) {
    // 判断用户是否存在
    const user = await this.getUser(payload);
    console.log("createUser", user)
    if (user) {
      return {
        success: false,
        code: 10201
      }
    }
    // 创建用户
    const newUser =  await this.userEntity
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        password: payload.password ? crypto.createHash('md5').update(payload.password).digest('hex') : ''
      })
      .execute()
      if (newUser.identifiers[0].id) {
        return newUser
      }else{
        return {
          success: false,
          code: 10004
        }
      }

  }

  async register(payload) {
    console.log("register", payload)
    // 创建用户
    let user: any = await this.createUser(payload);
    if(user.code){
      return user;
    }
    console.log("user", user)
    // 通过用户身份列表获取用户身份
    let identityList = await this.findIdentityList(payload.identityIndex);
    if(identityList.code){
      return identityList;
    }
    console.log("identityList", identityList)
    // 创建用户的身份
    let identity: any = await this.createUserIdentity(identityList);
    if(identity.code){
      return identity;
    }
    if(payload.identityIndex === 5){
      // 创建商家
      let seller: any = await this.createSeller(payload);
      if(seller.code){
        return seller;
      }
      console.log("seller", seller)

      // 创建商家基本信息
      let sellerMetadata: any = await this.createSellerMetadata(payload);
      console.log("sellerMetadata", sellerMetadata)
      if(sellerMetadata.code){
        return sellerMetadata;
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
        .set({ userId: user.generatedMaps[0].userId });

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
      .set({ userId: user.generatedMaps[0].userId })
    console.log("user.id", user.identifiers[0].id)

    // 返回用户关联身份
    const getUser =  await this.getUser(payload);
    if(getUser){
      return {
        data: getUser,
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

  // 注册普通用户 80
  async registerUser(payload) {
    return await this.register(Object.assign({}, {
      identityIndex: 80,
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || ''
    }, payload));


  }



  // 申请成为商家 5
  async applySeller(payload) {
    return await this.register(Object.assign({}, {
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

  // 管理员 注册 商家 5
  async registerSeller(payload) {
    return await this.register(Object.assign({}, {
      identityIndex: 5,
      name: payload.firstname + payload.lastname || '',
      firstname: payload.firstname || '',
      lastname: payload.lastname || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || '',
      state: payload.state || 0
    }, payload));

  }


  // 创建客服 3
  async createCustomerService(payload) {
    return await this.register(Object.assign({}, {
      identityIndex: 3,
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || ''
    }, payload));





  }

  // 注册成为管理员 2
  async createAdmin(payload) {
    return await this.register(Object.assign({}, {
      identityIndex: 2,
      name: payload.name || '',
      phone: payload.phone || '',
      email: payload.email || '',
      password: payload.password || ''
    }, payload));

  }

  // 后台管理 注册 用户
  async adminRegister(payload) {
    let adminRegisterUser;
    switch(payload.identity){
      case 'ordinary':
        adminRegisterUser = await this.registerUser(payload);
        break;
      case 'seller':
        adminRegisterUser = await this.registerSeller(Object.assign({
          state: 1
        }, payload));
        break;
      case 'customerService':
        adminRegisterUser = await this.createCustomerService(payload);
        break;
      case 'admin':
        adminRegisterUser = await this.createAdmin(payload);
        break;
    }
    return adminRegisterUser;

  }

}


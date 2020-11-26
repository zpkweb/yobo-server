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

  // 创建用户
  async createUser(payload) {
    // 创建用户
    let user = await this.userEntity
    .createQueryBuilder()
    .insert()
    .into(UserEntity)
    .values({
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      password:  payload.password ? crypto.createHash('md5').update(payload.password).digest('hex') : ''
    })
    .execute();
    return user;
  }

  // 创建普通用户 80
  async register(payload) {
    console.log("createUser")
    console.log(payload)

    // 查找用户
    let user: any = await this.userEntity
      .createQueryBuilder('user')
      .where("user.email = :email OR user.phone = :phone", { email: payload.email, phone: payload.phone })
      .getOne();
    console.log(user)

    if(user){
      return {
        code : 10101,
        data: user
      }
    }else{
      // 创建用户
      let user = await this.createUser({
        name: payload.name || '',
        phone: payload.phone || '',
        email: payload.email || '',
        password: payload.password || ''
      });

      console.log("user", user)
      // 通过用户身份列表获取普通用户身份
      let identityList: any = await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .where("identityList.index = :index", {index: 80})
        .getOne();
      console.log("identityList", identityList)

      // 创建普通用户身份
      let identity: any = await this.userIdentityEntity
        .createQueryBuilder()
        .insert()
        .into(UserIdentityEntity)
        .values({
          name: identityList.name,
          index: identityList.index
        })
        .execute()
        // .then((res) => {
        //   console.log(res)
        //   identity = res.identifiers[0];
        // })
      console.log("identity", identity)
      console.log(identity.identifiers[0].id, identityList.id, user.identifiers[0].id)

      await this.userIdentityEntity
        .createQueryBuilder()
        .relation(UserIdentityEntity, "identityList")
        .of(identity.identifiers[0].id)
        .set(identityList.id);

      await this.userIdentityEntity
        .createQueryBuilder()
        .relation(UserIdentityEntity, "user")
        .of(identity.identifiers[0].id)
        .set({userId: user.generatedMaps[0].userId})

      console.log("user.id", user.identifiers[0].id)

      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.identitys', 'identitys')
        .where("user.id = :id", { id: user.identifiers[0].id })
        .getOne();

        // this.userEntity
        // .createQueryBuilder('user')
        // .where("user.userId = :userId", { userId: userId })
        // .getOne();
    }

  }

  // 申请成为商家 5
  async registerSeller(payload) {
    // 查找用户
    let user: any = await this.userEntity
      .createQueryBuilder('user')
      .where("user.email = :email OR user.phone = :phone", { email: payload.email, phone: payload.phone })
      .getOne();
    console.log(user)

    if(user){
      return {
        code : 10101,
        data: user
      }
    }else{
      // 创建用户
      let user = await this.createUser({
        name: payload.firstname + payload.lastname || '',
        phone: payload.phone || '',
        email: payload.email || '',
        password: ''
      });
      console.log("user", user)

      // 通过用户身份列表获取商家身份
      let identityList: any = await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .where("identityList.index = :index", { index: 5 })
        .getOne();
      console.log("identityList", identityList)



      // 创建商家
      let seller = await this.userSellerEntity
        .createQueryBuilder()
        .insert()
        .into(UserSellerEntity)
        .values({
          state: 0,
          firstname: payload.firstname || '',
          lastname: payload.lastname || '',
          label: payload.label || '',
          gender: payload.gender || '',
          country: payload.country || ''
        })
        .execute()
        console.log("seller", seller)

      // 创建商家基本信息
      let sellerMetadata = await this.userSellerMetadataEntity
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
        console.log("sellerMetadata", sellerMetadata)

      // 创建商家身份
      let identity: any = await this.userIdentityEntity
        .createQueryBuilder()
        .insert()
        .into(UserIdentityEntity)
        .values({
          name: identityList.name,
          index: identityList.index
        })
        .execute()

      // 身份关联商家身份
      await this.userIdentityEntity
      .createQueryBuilder()
      .relation(UserIdentityEntity, "identityList")
      .of(identity.identifiers[0].id)
      .set(identityList.id);

      // 身份关联用户
      await this.userIdentityEntity
        .createQueryBuilder()
        .relation(UserIdentityEntity, "user")
        .of(identity.identifiers[0].id)
        .set({userId: user.generatedMaps[0].userId})

      // 商家关联商家基本信息

      await this.userSellerEntity
        .createQueryBuilder()
        .relation(UserSellerEntity, "metadata")
        .of({sellerId: seller.generatedMaps[0].sellerId})
        .set(sellerMetadata.identifiers[0].id);

      // 商家关联用户
      await this.userSellerEntity
      .createQueryBuilder()
      .relation(UserSellerEntity, "user")
      .of(seller.identifiers[0].id)
      .set({userId: user.generatedMaps[0].userId});
      // await this.userEntity
      // .createQueryBuilder()
      // .relation(UserSellerEntity, "user")
      // .of({userId: user.generatedMaps[0].userId})
      // .set({sellerId: seller.generatedMaps[0].sellerId})

      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.identitys', 'identitys')
        .leftJoinAndSelect('user.seller', 'seller')
        .where("user.id = :id", { id: user.identifiers[0].id })
        .getOne();

    }
  }

  // 注册成为客服 3
  async registerAdmin(payload) {
    console.log("createUser")
    console.log(payload)

    // 查找用户
    let user: any = await this.userEntity
      .createQueryBuilder('user')
      .where("user.email = :email OR user.phone = :phone", { email: payload.email, phone: payload.phone })
      .getOne();
    console.log(user)

    if(user){
      return {
        code : 10101,
        data: user
      }
    }else{
      // 创建用户
      let user = await this.createUser({
        name: payload.name || '',
        phone: payload.phone || '',
        email: payload.email || '',
        password: payload.password || ''
      });
      console.log("user", user)
      // 通过用户身份列表获取客服身份
      let identityList: any = await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .where("identityList.index = :index", {index: 3})
        .getOne();
      console.log("identityList", identityList)

      // 创建 客服身份
      let identity: any = await this.userIdentityEntity
        .createQueryBuilder()
        .insert()
        .into(UserIdentityEntity)
        .values({
          name: identityList.name,
          index: identityList.index
        })
        .execute()
        // .then((res) => {
        //   console.log(res)
        //   identity = res.identifiers[0];
        // })
      console.log("identity", identity)
      console.log(identity.identifiers[0].id, identityList.id, user.identifiers[0].id)

      await this.userIdentityEntity
        .createQueryBuilder()
        .relation(UserIdentityEntity, "identityList")
        .of(identity.identifiers[0].id)
        .set(identityList.id);

      await this.userIdentityEntity
        .createQueryBuilder()
        .relation(UserIdentityEntity, "user")
        .of(identity.identifiers[0].id)
        .set({userId: user.generatedMaps[0].userId})

      console.log("user.id", user.identifiers[0].id)

      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.identitys', 'identitys')
        .where("user.id = :id", { id: user.identifiers[0].id })
        .getOne();

        // this.userEntity
        // .createQueryBuilder('user')
        // .where("user.userId = :userId", { userId: userId })
        // .getOne();
    }

  }

  // 注册成为管理员2
  async registerCustomerServer(payload) {
    console.log("createUser")
    console.log(payload)

    // 查找用户
    let user: any = await this.userEntity
      .createQueryBuilder('user')
      .where("user.email = :email OR user.phone = :phone", { email: payload.email, phone: payload.phone })
      .getOne();
    console.log(user)

    if(user){
      return {
        code : 10101,
        data: user
      }
    }else{
      // 创建用户
      let user = await this.createUser({
        name: payload.name || '',
        phone: payload.phone || '',
        email: payload.email || '',
        password: payload.password || ''
      });
      console.log("user", user)
      // 通过用户身份列表获取管理员身份
      let identityList: any = await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .where("identityList.index = :index", {index: 2})
        .getOne();
      console.log("identityList", identityList)

      // 创建管理员身份
      let identity: any = await this.userIdentityEntity
        .createQueryBuilder()
        .insert()
        .into(UserIdentityEntity)
        .values({
          name: identityList.name,
          index: identityList.index
        })
        .execute()
        // .then((res) => {
        //   console.log(res)
        //   identity = res.identifiers[0];
        // })
      console.log("identity", identity)
      console.log(identity.identifiers[0].id, identityList.id, user.identifiers[0].id)

      await this.userIdentityEntity
        .createQueryBuilder()
        .relation(UserIdentityEntity, "identityList")
        .of(identity.identifiers[0].id)
        .set(identityList.id);

      await this.userIdentityEntity
        .createQueryBuilder()
        .relation(UserIdentityEntity, "user")
        .of(identity.identifiers[0].id)
        .set({userId: user.generatedMaps[0].userId})

      console.log("user.id", user.identifiers[0].id)

      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.identitys', 'identitys')
        .where("user.id = :id", { id: user.identifiers[0].id })
        .getOne();

        // this.userEntity
        // .createQueryBuilder('user')
        // .where("user.userId = :userId", { userId: userId })
        // .getOne();
    }

  }






}

import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository, Like } from "typeorm";
import { UserEntity } from "src/entity/user/user";
import * as crypto from 'crypto';
import { UserIdentityEntity } from 'src/entity/user/identity/identity';
import { UserAddressEntity } from 'src/entity/user/address';


@Provide()
export class BaseUserService {

  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  @InjectEntityModel(UserIdentityEntity)
  userIdentityEntity: Repository<UserIdentityEntity>;

  @InjectEntityModel(UserAddressEntity)
  userAddressEntity: Repository<UserAddressEntity>;

  /**
   * 增加用户
   * @param payload
   * name
   * phone
   * email
   * password
   */
  async baseCreateUser(payload) {
    return await this.userEntity
      .createQueryBuilder()
      .insert()
      .into(UserEntity)
      .values({
        avatar: payload.avatar,
        name: payload.name,
        phone: payload.phone,
        email: payload.email,
        password: payload.password,
      })
      .execute();
  }
  /**
   * 添加用户身份
   * @param payload
   */
  async baseCreateUserIdentity(payload) {
    return await this.userIdentityEntity
      .createQueryBuilder()
      .insert()
      .into(UserIdentityEntity)
      .values({
        identityIndex: payload.index
      })
      .execute()
  }
  /**
   * 查询用户身份
   * @param payload
   */
   async baseRetrieveUserIdentity(userId) {
    return await this.userIdentityEntity
    .createQueryBuilder('userIdentity')
    .where('userIdentity.userId = :userId', { userId: userId })
    // .andWhere("userIdentity.zh-cn = :zhcn", { zhcn: payload.zhcn })
    .getOne();
  }
  /**
   * 删除用户身份
   * @param payload
   */
    async baseDeleteUserIdentity(payload) {
      return await this.userIdentityEntity
      .createQueryBuilder()
      .delete()
      .where("userId = :userId", { userId: payload.userId })
      // .orWhere("identityList.zh-cn = :zhcn", { zhcn: payload['zh-cn'] })
      // .orWhere("identityList.en-us = :enus", { enus: payload['en-us'] })
      // .orWhere("identityList.ja-jp = :jajp", { jajp: payload['ja-jp'] })
      // .orWhere("identityList.fr-fr = :frfr", { frfr: payload['fr-fr'] })
      // .orWhere("identityList.es-es = :eses", { eses: payload['es-es'] })
      .execute();
    }

  /**
   * 用户登录
   * @param payload
   */
    async baseLoginUser(payload) {
      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.identitys', 'identitys')
        .leftJoinAndSelect('user.seller', 'seller')
        .where("user.name = :name", { name: payload.name })
        .orWhere("user.email = :email", { email: payload.name })
        .orWhere("user.phone = :phone", { phone: payload.name })
        .getOne();
    }

    /**
   * 用户登录
   * @param payload
   */
    async baseLoginAdmin(payload) {
      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.identitys', 'identitys')
        .where("user.name = :name", { name: payload.name })
        .orWhere("user.email = :email", { email: payload.name })
        .orWhere("user.phone = :phone", { phone: payload.name })
        .getOne();
    }

  /**
   * 验证密码是否正确
   * @param payload
   * userId
   * password
   */
  async baseValidatePassword(payload) {
    return await this.userEntity
    .createQueryBuilder('user')
    .addSelect("user.password")
    .where("user.userId = :userId", { userId: payload.userId })
    .andWhere("user.password = :password", { password: crypto.createHash('md5').update(payload.password).digest('hex') })
    .getOne();
  }


  /**
   * 判断用户是否存在
   * @param payload
   */
  async BaseHas(userId) {
    return await this.userEntity
    .createQueryBuilder('user')
    .where('user.userId = :userId', { userId: userId })
    .getOne();
  }

  /**
   * 检索用户
   * @param payload
   * name
   * email
   * phone
   * userId
   */
   async baseRetrieveUserName(name) {
    return await this.userEntity
      .createQueryBuilder('user')
      .where("user.name = :name", { name: name })
      .getOne();
  }

  async baseRetrieveUserEmail(email) {
    return await this.userEntity
      .createQueryBuilder('user')
      .where("user.email = :email", { email: email })
      .getOne();
  }

  async baseRetrieveUserPhone(phone) {
    return await this.userEntity
      .createQueryBuilder('user')
      .where("user.phone = :phone", { phone: phone })
      .getOne();
  }


  async baseRetrieveUser(payload) {
    return await this.userEntity
      .createQueryBuilder('user')
      // .leftJoinAndSelect('user.identitys', 'identitys')
      // .leftJoinAndSelect('user.seller', 'seller')
      .where("user.name = :name", { name: payload.name })
      .andWhere("user.email = :email", { email: payload.email })
      // .orWhere("user.phone = :phone", { phone: payload.phone })
      // .orWhere("user.userId = :userId", { userId: payload.userId })
      .getOne();
  }



  async baseRetrieveUserId(userId) {
    return await this.userEntity
      .createQueryBuilder('user')
      // .leftJoinAndSelect('user.identitys', 'identitys')
      // .leftJoinAndSelect('user.seller', 'seller')
      .where("user.userId = :userId", { userId: userId })
      // .orWhere("user.email = :email", { email: payload.email })
      // .orWhere("user.phone = :phone", { phone: payload.phone })
      .getOne();
  }

  async baseRetrieveUserPass(userId) {
    return await this.userEntity
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.identitys', 'identitys')
      .addSelect("user.password")
      .where("user.userId = :userId", { userId: userId })
      .getOne();
  }

  async baseRetrieveUserAll() {
    return await this.userEntity
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.identitys', 'identitys')
      .getMany();
  }

  /**
   * 查找个人信息
   * @param payload
   */
  // async baseRetrieveInfo(userId) {
  //   return await this.userEntity
  //   .createQueryBuilder('user')
  //   // .leftJoinAndSelect('user.identitys', 'identitys')
  //   // .leftJoinAndSelect('user.address', 'address')
  //   // .leftJoinAndSelect('user.seller', 'seller')
  //   .where("user.userId = :userId", { userId: userId })
  //   .getOne();
  // }
    // async baseRetrieveSelf(userId) {
    //   return await this.userEntity
    //   .createQueryBuilder('user')
    //   .leftJoinAndSelect('user.identitys', 'identitys')
    //   .leftJoinAndSelect('user.seller', 'seller')
    //   .leftJoinAndSelect('user.address', 'address')
    //   .leftJoinAndSelect('user.likeSellers', 'likeSellers')
    //   .leftJoinAndSelect('user.likeCommoditys', 'likeCommoditys')
    //   .leftJoinAndSelect('user.browsingHistory', 'browsingHistory')
    //   .where("user.userId = :userId", { userId: userId })
    //   .getOne();
    // }

  /**
   * 模糊查询 添加seller 判断用户是否关联seller
   * @param payload
   * name
   * email
   * phone
   * userId
   */
  async baseSearchUser(payload) {
    const where: any = {};
    if (payload.name) {
      where.name = Like(`%${payload.name}%`);
    }
    if (payload.email) {
      where.email = Like(`%${payload.email}%`);
    }
    if (payload.phone) {
      where.phone = Like(`%${payload.phone}%`);
    }

    return await this.userEntity
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.seller', 'seller')
      // .where("user.name like :name", { name: `%${payload.name}%` })
      // .andWhere("user.email like :email", { email: `%${payload.email}%` })
      // .andWhere("user.phone like :phone", { phone: `%${payload.phone}%` })
      .where(where)
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();

  }


  /**
   * 更新
   * @param payload
   */
  async baseUpdateUser(payload) {
    const { userId, ...setData} = payload;
    return await this.userEntity
      .createQueryBuilder()
      .update(UserEntity)
      .set(setData)
      .where("user.userId = :userId", { userId: userId })
      .execute();

  }

  /**
   * 删除
   * @param payload
   */
    async baseDeleteUser(userId) {
      return await this.userEntity
        .createQueryBuilder()
        .delete()
        .where("userId = :userId", { userId: userId })
        .execute();
    }
    async baseDeleteUserAll() {
      return await this.userEntity
        .createQueryBuilder()
        .delete()
        .execute();
    }




  /**
   * 获取用户地址
   *
   */
    async baseRetrieveUserAddress(userId) {
      return await this.userAddressEntity
        .createQueryBuilder('address')
        .leftJoinAndSelect('address.user', 'user')
        .where('user.userId = :userId', { userId : userId})
        .getOne();
    }
  /**
   * 创建用户地址记录
   */
    async baseCreateUserAddress(payload) {
      return await this.userAddressEntity
      .createQueryBuilder()
      .insert()
      .into(UserAddressEntity)
      .values({
        name: payload.name || '',
        phone: payload.phone || '',
        country: payload.country || '',
        city: payload.city || '',
        address: payload.address || ''
      })
      .execute()

    }
  /**
   *  更新用户地址
   */
    async baseUpdateUserAddress(payload) {
      const { userId, ...setData } = payload;
      return await this.userAddressEntity
        .createQueryBuilder('address')
        .leftJoinAndSelect('address.user', 'user')
        .update(UserAddressEntity)
        // .set({
        //   name: payload.address.name,
        //   phone: payload.address.email,
        //   city: payload.address.phone,
        //   address: payload.address.address
        // })
        .set(setData)
        .where("user.userId = :userId", { userId: userId })
        .execute();
  }
  /**
   * 删除用户地址
   */
    async baseDeleteUserAddress(userId) {
      return await this.userAddressEntity
      .createQueryBuilder('address')
      .delete()
      .where("userId = :userId", { userId: userId })
      .execute();
    }
}

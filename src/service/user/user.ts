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
import { UserAddressEntity } from 'src/entity/user/address';
@Provide()
export class UserService {
  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  @InjectEntityModel(UserSellerEntity)
  UserSellerEntity: Repository<UserSellerEntity>;

  @InjectEntityModel(UserSellerMetadataEntity)
  UserSellerMetadataEntity: Repository<UserSellerMetadataEntity>;

  @InjectEntityModel(UserSellerStudioEntity)
  UserSellerStudioEntity: Repository<UserSellerStudioEntity>;

  @InjectEntityModel(UserSellerResumeEntity)
  UserSellerResumeEntity: Repository<UserSellerResumeEntity>;

  @InjectEntityModel(UserIdentityEntity)
  userIdentityEntity: Repository<UserIdentityEntity>;



  @InjectEntityModel(UserIdentityListEntity)
  userIdentityListEntity: Repository<UserIdentityListEntity>;

  @InjectEntityModel(UserAddressEntity)
  userAddressEntity: Repository<UserAddressEntity>;


  /**
   * 查找用户
   * @param payload type userId
   * type: identitys
   */
  async find(payload) {
    if (payload.userId && payload.type) {
      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect(`user.${payload.type}`, payload.type)
        .where("user.userId = :userId", { userId: payload.userId })
        .getOne();
    } else if (payload.userId && !payload.type) {
      return await this.userEntity
        .createQueryBuilder('user')
        .where("user.userId = :userId", { userId: payload.userId })
        .getOne();
    } else if (!payload.id && payload.type) {
      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect(`user.${payload.type}`, payload.type)
        .getMany();
    } else {
      return await this.userEntity
        .createQueryBuilder('user')
        .addSelect("user.password")
        .getMany();
    }
  }

  // 删除用户
  async remove(id) {
    await this.userEntity
      .createQueryBuilder('user')
      .delete()
      .where("user.id = :id", { id: id })
      .execute();
  }





  /**
   * 查找个人信息
   * @param userId
   */
  async findSelf(userId) {
    return await this.userEntity
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.identitys', 'identitys')
      .leftJoinAndSelect('user.address', 'address')
      .leftJoinAndSelect('user.likeSellers', 'likeSellers')
      .leftJoinAndSelect('user.likeCommoditys', 'likeCommoditys')
      .leftJoinAndSelect('user.browsingHistory', 'browsingHistory')
      .where("user.userId = :userId", { userId: userId })
      .getOne();
  }

  /**
   * 修改密码
   */

  async changePassword(payload) {
    const user = await this.userEntity
      .createQueryBuilder('user')
      .update(UserEntity)
      .set({ password: payload.password })
      .where("user.phone = :phone OR user.email = :email", { phone: payload.phone, email: payload.email })
      .execute();

    return {
      code : user.affected ? 10001 : 10107
    }
  }

  /**
   * 更新用户
   * @param payload
   */
  async update(payload) {
    const user = await this.userEntity
      .createQueryBuilder('user')
      .update(UserEntity)
      .set({
        name: payload.name || '',
        email: payload.email || '',
        phone: payload.phone || ''
      })
      .where("user.userId = :userId", { userId: payload.userId })
      .execute();

    return {
      code : user.affected ? 10001 : 10107
    }
  }




  /**
   * 获取用户地址
   * @param payload
   */
  async getAddress(payload) {
    return await this.userAddressEntity
      .createQueryBuilder('address')
      .leftJoinAndSelect('address.user', 'user')
      .getMany();
  }

  /**
   * 创建用户地址
   * @param payload
   */
  async address(payload) {
    let address = await this.userAddressEntity
    .createQueryBuilder()
    .insert()
    .into(UserAddressEntity)
    .values({
      name: payload.address.name || '',
      phone: payload.address.phone || '',
      city: payload.address.city || '',
      address: payload.address.address || ''
    })
    .execute()
    console.log("address", address)

    await this.userAddressEntity
      .createQueryBuilder()
      .relation(UserAddressEntity, "user")
      .of(address.identifiers[0].id)
      .set({userId: payload.userId})

    let userAddress = await this.userAddressEntity
      .createQueryBuilder('address')
      .where("id = :id", { id: address.identifiers[0].id })
      .getOne();
    console.log("useraddress", userAddress)

    return userAddress
  }

  /**
   * 更新用户地址
   * @param payload
   */
  async addressUpdate(payload) {

    const userAddress = await this.userAddressEntity
      .createQueryBuilder('address')
      .update(UserAddressEntity)
      .set({
        name: payload.address.name || '',
        phone: payload.address.email || '',
        city: payload.address.phone || '',
        address: payload.address.address || ''
      })
      .where("addressId = :addressId", { addressId: payload.address.addressId })
      .execute();
      return {
        code : userAddress.affected ? 10001 : 10107
      }
  }

  /**
   * 删除用户地址
   * @param payload
   */
  async addressRemove(payload) {
    const userAddress = await this.userAddressEntity
      .createQueryBuilder('address')
      .delete()
      .where("addressId = :addressId", { addressId: payload.addressId })
      .execute();

      return {
        code : userAddress.affected ? 10004 : 10108
      }
  }

  /**
   * 查找艺术家
   * @param payload
   */
  async findSeller(payload) {
    return await this.UserSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      .leftJoinAndSelect('seller.metadata', 'metadata')
      .leftJoinAndSelect('seller.studios', 'studios')
      .leftJoinAndSelect('seller.resumes', 'resumes')
      .leftJoinAndSelect('seller.commoditys', 'commoditys')
      .leftJoinAndSelect('seller.likeSellers', 'likeSellers')
      .leftJoinAndSelect('seller.orders', 'orders')
      .where("seller.sellerId = :sellerId", { sellerId: payload.sellerId })
      .getOne();
  }

  /**
   * 更新艺术家
   * @param payload
   */
  async updateSeller(payload) {
    // 更新用户
    const user = await this.userEntity
      .createQueryBuilder('user')
      .update(UserEntity)
      .set({
        name: payload.name || '',
        email: payload.email || '',
        phone: payload.phone || ''
      })
      .where("userId = :userId", { userId: payload.userId })
      .execute();
    if(!user.affected){
      return {
        code : 10107
      }
    }

    // 更新艺术家
    let seller = await this.UserSellerEntity
      .createQueryBuilder()
      .update(UserSellerEntity)
      .set({
        firstname: payload.firstname || '',
        lastname: payload.lastname || '',
        label: payload.label || '',
        gender: payload.gender || '',
        country: payload.country || ''
      })
      .where("sellerId = :sellerId", { sellerId: payload.sellerId })
      .execute()
      console.log("seller", seller)

    if(!seller.affected){
      return {
        code : 10107
      }
    }
    // 更新艺术家基本信息
    let sellerMetadata = await this.UserSellerMetadataEntity
        .createQueryBuilder()
        .update(UserSellerMetadataEntity)
        .set({
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
          profile: payload.profile || ''
        })
        .where("sellerId = :sellerId", { sellerId: payload.sellerId })
        .execute()
        console.log("sellerMetadata", sellerMetadata)
      if(!sellerMetadata.affected){
        return {
          code : 10107
        }
      }
      return {
        code : 10001
      }
  }

  /**
   * 删除艺术家
   * @param payload
   */
  async removeSeller(payload) {

  }


}

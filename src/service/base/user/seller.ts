import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserSellerEntity } from "src/entity/user/seller/seller";
import { UserSellerMetadataEntity } from 'src/entity/user/seller/metadata';

@Provide()
export class BaseSellerServer {

  @InjectEntityModel(UserSellerEntity)
  userSellerEntity: Repository<UserSellerEntity>

  @InjectEntityModel(UserSellerMetadataEntity)
  userSellerMetadataEntity: Repository<UserSellerMetadataEntity>



  /**
   * 增加
   * @param payload
   */
  async baseCreateSeller(payload) {
    return await this.userSellerEntity
      .createQueryBuilder()
      .insert()
      .into(UserSellerEntity)
      .values({
        state: payload.state,
        firstname: payload.firstname,
        lastname: payload.lastname,
        label: payload.label,
        gender: payload.gender,
        country: payload.country,
      })
      .execute();
  }

  /**
   * 增加基本信息
   * @param payload
   */
  async baseCreateSellerMetadata(payload) {
    return await this.userSellerMetadataEntity
      .createQueryBuilder()
      .insert()
      .into(UserSellerMetadataEntity)
      .values({
        language: payload.language,
        findUs: payload.findUs,
        isFullTime: payload.isFullTime,
        onlineSell: payload.onlineSell,
        sold: payload.sold,
        channel: payload.channel,
        gallery: payload.gallery,
        medium: payload.medium,
        galleryInfo: payload.galleryInfo,
        recommend: payload.recommend,
        prize: payload.prize,
        website: payload.website,
        profile: payload.profile,

      })
      .execute();
  }

  /**
   * 判断用户是否存在
   * @param payload
   */
  async BaseHas(sellerId) {
    return await this.userSellerEntity
    .createQueryBuilder('seller')
    .where('seller.sellerId = :sellerId', { sellerId: sellerId })
    .getOne();
  }

  /**
   * 检索
   * @param payload
   * Seller
   */
  async baseRetrieveSeller(payload) {
    return await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      .leftJoinAndSelect('seller.metadata', 'metadata')
      .addSelect('seller.createdDate')
      .where("seller.userId = :userId", { userId: payload.userId })
      .orWhere("seller.sellerId = :sellerId", { sellerId: payload.sellerId })
      .getOne();
  }
  /**
   * 检索所有
   * @param payload
   * Seller
   */
  async baseRetrieveSellerAll(payload) {
    return await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      .leftJoinAndSelect('seller.metadata', 'metadata')
      .addSelect('seller.createdDate')
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
  }

  /**
   * 搜索
   * @param payload
   * Seller
   */
  async baseSearchSeller(payload) {
    console.log("baseSearchSeller", payload)
    return await this.userSellerEntity
      .createQueryBuilder('seller')
      // .leftJoinAndSelect('seller.user', 'user')
      .addSelect('seller.createdDate')
      .where("seller.firstname like :firstname", { firstname: `%${payload.firstname}%` })
      .andWhere("seller.lastname like :lastname", { lastname: `%${payload.lastname}%` })
      .andWhere("seller.label like :label", { label: `%${payload.label}%` })
      .andWhere("seller.gender like :gender", { gender: `%${payload.gender}%` })
      .andWhere("seller.country like :country", { country: `%${payload.country}%` })
      .andWhere("seller.state like :state", { state: `%${payload.state}%` })
      // .andWhere("user.email like :email", { email: `%${payload.email}%` })
      // .andWhere("user.phone like :phone", { phone: `%${payload.phone}%` })
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
  }

  /**
   * 更新
   * @param payload
   * sellerId
   * seller
   * metadata
   */
  async baseUpdateSeller(payload) {
    console.log("baseUpdateSeller", payload)
    return await this.userSellerEntity
      .createQueryBuilder()
      .update(UserSellerEntity)
      .set({
        state: payload.state,
        firstname: payload.firstname,
        lastname: payload.lastname,
        label: payload.label,
        gender: payload.gender,
        country: payload.country,
      })
      .where("sellerId = :sellerId", { sellerId: payload.sellerId })
      .execute();
  }
  /**
   * 更新基本信息
   * @param payload
   * sellerId
   * seller
   * metadata
   */
  async baseUpdateSellerMetadata(payload) {
    console.log("baseUpdateSellerMetadata", payload)
    return await this.userSellerMetadataEntity
      .createQueryBuilder()
      .update(UserSellerMetadataEntity)
      .set({
        language: payload.language,
        findUs: payload.findUs,
        isFullTime: payload.isFullTime,
        onlineSell: payload.onlineSell,
        sold: payload.sold,
        channel: payload.channel,
        gallery: payload.gallery,
        medium: payload.medium,
        galleryInfo: payload.galleryInfo,
        recommend: payload.recommend,
        prize: payload.prize,
        website: payload.website,
        profile: payload.profile,
      })
      .where("sellerId = :sellerId", { sellerId: payload.sellerId })
      .execute()
  }

  /**
   * 删除
   * @param payload
   * sellerId
   */
  async baseDeleteSeller(sellerId) {
    console.log("baseDeleteSeller", sellerId)
    return await this.userSellerEntity
      .createQueryBuilder()
      .delete()
      .where("sellerId = :sellerId", { sellerId: sellerId })
      .execute();
  }
  /**
   * 删除所有
   * @param payload
   * sellerId
   */
  async baseDeleteSellerAll() {
    return await this.userSellerEntity
      .createQueryBuilder()
      .delete()
      .execute();
  }

  /**
   * 设置商家状态
   * @param payload
   * state
   * sellerId
   */
    async basseSetSellerState(payload) {
      return await this.userSellerEntity
      .createQueryBuilder()
      .update(UserSellerEntity)
      .set({
        state: payload.state
      })
      .where("sellerId = :sellerId", { sellerId: payload.sellerId })
      .execute()
    }
}

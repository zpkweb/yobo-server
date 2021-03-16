import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository, Like } from "typeorm";
import { UserSellerEntity } from "src/entity/user/seller/seller";
import { UserSellerMetadataEntity } from 'src/entity/user/seller/metadata';
import { CommodityPhotoEntity } from 'src/entity/commodity/attribute/photo';
import { CommodityNameEntity } from 'src/entity/commodity/attribute/name';

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
    console.log("baseCreateSeller", payload)
    return await this.userSellerEntity
      .createQueryBuilder()
      .insert()
      .into(UserSellerEntity)
      .values({
        state: payload.state,
        type: payload.type,
        typeName: payload.typeName,
        firstname: payload.firstname,
        lastname: payload.lastname,
        tags: payload.tags,
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
    console.log("baseCreateSellerMetadata", payload)
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
   * 判断用户是否申请艺术家
   *
   * @memberof BaseSellerServer
   */
  async baseApplySeller(userId) {
    return await this.userSellerEntity
    .createQueryBuilder('seller')
    .leftJoinAndSelect('seller.user', 'user')
    .where('user.userId = :userId', { userId: userId })
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
      .leftJoinAndSelect('seller.commoditys', 'commoditys')
      .leftJoinAndMapMany('commoditys.photos', CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
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
      .leftJoinAndSelect('seller.commoditys', 'commoditys')
      .leftJoinAndMapMany('seller.commodityPhotos', CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
      .leftJoinAndMapOne('seller.commodityName', CommodityNameEntity, "commodityName", "commodityName.commodityId = commoditys.commodityId")
      // .leftJoinAndMapMany('seller.commodityPhotos', '')
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
    // console.log("baseSearchSeller payload", payload)
    const where: any = {};

    if (payload.surname) {
      where.firstname = Like(payload.surname);
    }

    if (payload.label) {
      where.label = Like(payload.label);
    }

    if (payload.gender) {
      where.gender = Like(payload.gender);
    }

    if (payload.country) {
      where.country = Like(payload.country);
    }

    if (payload.state) {
      where.state = Like(payload.state);
    }

    if (payload.type) {
      where.type = Like(payload.type);
    }

    if (payload.email) {
      where.email = Like(payload.email);
    }

    if (payload.phone) {
      where.phone = Like(payload.phone);
    }
    // console.log("baseSearchSeller where", where)
    // list total
    return await this.userSellerEntity.findAndCount({
      // relations: ['seller'],
      join: {
        alias: "seller",
        leftJoinAndSelect: {
          user: "seller.user",
          metadata: "seller.metadata"
        }
      },
      where,
      take: payload.pageSize,
      skip: payload.pageSize * (payload.currentPage - 1),
    });



    // return await this.userSellerEntity
    //   .createQueryBuilder('seller')
    //   .leftJoinAndSelect('seller.user', 'user')
    //   .leftJoinAndSelect('seller.metadata', 'metadata')
    //   .addSelect('seller.createdDate')
    //   .where("seller.firstname like :firstname", { firstname: `%${payload.surname}%` })
    //   .orWhere("seller.lastname like :lastname", { lastname: `%${payload.lastname}%` })
    //   .orWhere("seller.label like :label", { label: `%${payload.label}%` })
    //   .orWhere("seller.gender like :gender", { gender: `%${payload.gender}%` })
    //   // .orWhere("seller.country like :country", { country: `%${payload.country}%` })
    //   .orWhere("seller.country = :country", { country: payload.country })
    //   .orWhere("seller.state like :state", { state: `%${payload.state}%` })
    //   .orWhere("seller.type like :type", { type: `%${+payload.type}%` })
    //   // .andWhere("user.email like :email", { email: `%${payload.email}%` })
    //   // .andWhere("user.phone like :phone", { phone: `%${payload.phone}%` })
    //   .skip((payload.currentPage-1)*payload.pageSize)
    //   .take(payload.pageSize)
    //   .getManyAndCount();
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
    const { sellerId, ...setData } = payload;
    return await this.userSellerEntity
      .createQueryBuilder()
      .update(UserSellerEntity)
      // .set({
      //   state: payload.state,
      //   firstname: payload.firstname,
      //   lastname: payload.lastname,
      //   label: payload.label,
      //   gender: payload.gender,
      //   country: payload.country,
      // })
      .set(setData)
      .where("sellerId = :sellerId", { sellerId: sellerId })
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
    const { sellerId, ...setData } = payload;
    return await this.userSellerMetadataEntity
      .createQueryBuilder()
      .update(UserSellerMetadataEntity)
      // .set({
      //   language: payload.language,
      //   findUs: payload.findUs,
      //   isFullTime: payload.isFullTime,
      //   onlineSell: payload.onlineSell,
      //   sold: payload.sold,
      //   channel: payload.channel,
      //   gallery: payload.gallery,
      //   medium: payload.medium,
      //   galleryInfo: payload.galleryInfo,
      //   recommend: payload.recommend,
      //   prize: payload.prize,
      //   website: payload.website,
      //   profile: payload.profile,
      // })
      .set(setData)
      .where("sellerId = :sellerId", { sellerId: sellerId })
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
      const { sellerId, ...setData } = payload;
      return await this.userSellerEntity
        .createQueryBuilder()
        .update(UserSellerEntity)
        // .set({
        //   state: payload.state
        // })
        .set(setData)
        .where("sellerId = :sellerId", { sellerId: sellerId })
        .execute()
    }
}

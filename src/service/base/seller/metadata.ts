import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserSellerMetadataEntity } from 'src/entity/user/seller/metadata';


@Provide()
export class BaseSellerMetadataService {

  @InjectEntityModel(UserSellerMetadataEntity)
  userSellerMetadataEntity: Repository<UserSellerMetadataEntity>

  /**
   * 增加基本信息
   * @param payload
   */
   async baseCreate(payload) {
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
        profileZhcn: payload.profileZhcn,
        profileEnus: payload.profileEnus,
        profileJajp: payload.profileJajp,
        profileEses: payload.profileEses,
      })
      .execute();
  }

  /**
   * 查找基本信息
   * @param payload
   * sellerId
   * seller
   * metadata
   */
   async baseRetrieve(sellerId) {
    return await this.userSellerMetadataEntity
      .createQueryBuilder()
      .where("sellerId = :sellerId", { sellerId: sellerId })
      .getOne();
  }

  /**
   * 更新基本信息
   * @param payload
   * sellerId
   * seller
   * metadata
   */
  async baseUpdate(payload) {
    const { sellerId, ...setData } = payload;
    return await this.userSellerMetadataEntity
      .createQueryBuilder()
      .update(UserSellerMetadataEntity)
      .set(setData)
      .where("sellerId = :sellerId", { sellerId: sellerId })
      .execute()
  }

  async baseUpdateMetadata(payload) {

    return await this.userSellerMetadataEntity
      .createQueryBuilder()
      .update(UserSellerMetadataEntity)
      .set({...payload})
      .execute();
  }

  // 关联
  async relation(payload) {
    return await this.userSellerMetadataEntity
      .createQueryBuilder()
      .relation(UserSellerMetadataEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

}

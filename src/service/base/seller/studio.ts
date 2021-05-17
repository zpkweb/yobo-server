import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserSellerStudioEntity } from 'src/entity/user/seller/studio';


@Provide()
export class BaseSellerStudioServer {

  @InjectEntityModel(UserSellerStudioEntity)
  userSellerStudioEntity: Repository<UserSellerStudioEntity>

  /**
   * 增加基本信息
   * @param payload
   */
   async baseCreate(payload) {
    return await this.userSellerStudioEntity
      .createQueryBuilder()
      .insert()
      .into(UserSellerStudioEntity)
      .values({
        name: payload.name,
        photo: payload.photo,
        video: payload.video,
        banner: payload.banner,
        introduce: payload.introduce,
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
    return await this.userSellerStudioEntity
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
    return await this.userSellerStudioEntity
      .createQueryBuilder()
      .update(UserSellerStudioEntity)
      .set(setData)
      .where("sellerId = :sellerId", { sellerId: sellerId })
      .execute()
  }

  // 关联
  async relation(payload) {
    return await this.userSellerStudioEntity
      .createQueryBuilder()
      .relation(UserSellerStudioEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

}

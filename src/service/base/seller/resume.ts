import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserSellerResumeEntity } from 'src/entity/user/seller/resume';


@Provide()
export class BaseSellerResumeService {

  @InjectEntityModel(UserSellerResumeEntity)
  userSellerResumeEntity: Repository<UserSellerResumeEntity>

  /**
   * 增加基本信息
   * @param payload
   */
   async baseCreate(payload) {
    return await this.userSellerResumeEntity
      .createQueryBuilder()
      .insert()
      .into(UserSellerResumeEntity)
      .values({
        resume: payload.resume,
      })
      .execute();
  }

  /**
   * 查找基本信息
   * @param payload
   * sellerId
   * seller
   * resume
   */
   async baseRetrieve(sellerId) {
    return await this.userSellerResumeEntity
      .createQueryBuilder()
      .where("sellerId = :sellerId", { sellerId: sellerId })
      .getOne();
  }

  /**
   * 更新基本信息
   * @param payload
   * sellerId
   * seller
   * resume
   */
  async baseUpdate(payload) {
    const { sellerId, ...setData } = payload;
    return await this.userSellerResumeEntity
      .createQueryBuilder()
      .update(UserSellerResumeEntity)
      .set(setData)
      .where("sellerId = :sellerId", { sellerId: sellerId })
      .execute()
  }

  async baseUpdateResume(payload) {
    return await this.userSellerResumeEntity
      .createQueryBuilder()
      .update(UserSellerResumeEntity)
      .set({...payload})
      .execute();
  }

  // 关联
  async relation(payload) {
    return await this.userSellerResumeEntity
      .createQueryBuilder()
      .relation(UserSellerResumeEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

}

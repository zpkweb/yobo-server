import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { MyLikeSellerEntity } from 'src/entity/my/likeSeller';

@Provide()
export class BaseMyLikeSeller {

  @InjectEntityModel(MyLikeSellerEntity)
  myLikeSellerEntity: Repository<MyLikeSellerEntity>;

  /**
   * 创建我喜欢的艺术家
   * @param payload
   */
  async BaseCreate(payload) {
    return await this.myLikeSellerEntity
      .createQueryBuilder()
      .insert()
      .into(MyLikeSellerEntity)
      .values({
        userName: payload.userName,
        userId: payload.userId,
        sellerName: payload.sellerName,
        sellerId: payload.sellerId
      })
      .execute();
  }

  /**
   * 查找我喜欢的艺术家是否存在
   */
  async BaseHas(payload) {
    console.log("basehas", payload)
    return await this.myLikeSellerEntity
      .createQueryBuilder('myLikeSeller')
      .where("myLikeSeller.userId = :userId", { userId: payload.userId })
      .andWhere("myLikeSeller.sellerId = :sellerId", { sellerId: payload.sellerId })
      .getOne();
  }

  /**
   * 查找我喜欢的艺术家
   * @param payload
   */
    async BaseRetrieve(userId) {
      console.log("BaseRetrieve", userId)
      return await this.myLikeSellerEntity
        .createQueryBuilder('myLikeSeller')
        .where("myLikeSeller.userId = :userId", { userId: userId })
        .getMany();
    }

  // 商家 关联 用户

  async BaseRelation(payload) {
    await this.myLikeSellerEntity
      .createQueryBuilder()
      .relation(MyLikeSellerEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

  /**
   * 删除我喜欢的艺术家
   */
  async BaseDelete(payload) {
    return await this.myLikeSellerEntity
      .createQueryBuilder()
      .delete()
      .where("userId = :userId", { userId: payload.userId })
      .andWhere("sellerId = :sellerId", { sellerId: payload.sellerId })
      .execute();
  }

  /**
   * 删除我喜欢的所有艺术家
   */
  async BaseDeleteAll(userId) {
    return await this.myLikeSellerEntity
      .createQueryBuilder()
      .delete()
      .where("userId = :userId", { userId: userId })
      .execute();
  }

}

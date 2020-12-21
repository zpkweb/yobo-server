import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { MyBrowsingHistoryEntity } from 'src/entity/my/browsingHistory';
import { CommodityEntity } from 'src/entity/commodity/commodity';

@Provide()
export class BaseBrowsingHistoryServer {

  @InjectEntityModel(MyBrowsingHistoryEntity)
  myBrowsingHistoryEntity: Repository<MyBrowsingHistoryEntity>;

  @InjectEntityModel(CommodityEntity)
  commodityEntity: Repository<CommodityEntity>;

  /**
   * 创建
   * @param payload
   */
  async BaseCreate(payload) {
    return await this.myBrowsingHistoryEntity
      .createQueryBuilder()
      .insert()
      .into(MyBrowsingHistoryEntity)
      .values({
        userName: payload.userName,
        commodityName: payload.commodityName,
      })
      .execute();
  }



  /**
   * 查找
   * @param payload
   */
  async BaseRetrieve(userId) {
    console.log("BaseRetrieve", userId)
    return await this.myBrowsingHistoryEntity
      .createQueryBuilder('myBrowsingHistory')
      .leftJoinAndSelect("myBrowsingHistory.user", "user")
      .leftJoinAndSelect("myBrowsingHistory.commodity", "commodity")
      .where("user.userId = :userId", { userId: userId })
      // .andWhere(qb => {
      //   const subQuery = qb
      //     .subQuery()
      //     .from(CommodityEntity, "commodity")
      //     .leftJoinAndSelect("commodity.name", "name")
      //     .getQuery();
      //   return "commodity.commodityId IN " + subQuery;
      // })
      .getMany();
  }

  /**
   * 是否存在
   */
  async BaseHas(payload) {
    console.log("basehas", payload)
    return await this.myBrowsingHistoryEntity
      .createQueryBuilder('myBrowsingHistory')
      .leftJoinAndSelect("myBrowsingHistory.user", "user")
      .leftJoinAndSelect("myBrowsingHistory.commodity", "commodity")
      .where("user.userId = :userId", { userId: payload.userId })
      .andWhere("commodity.commodityId = :commodityId", { commodityId: payload.commodityId })
      .getOne();
  }

  /**
   * BaseRelation
   */
  async BaseRelation(payload) {
    await this.myBrowsingHistoryEntity
      .createQueryBuilder()
      .relation(MyBrowsingHistoryEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

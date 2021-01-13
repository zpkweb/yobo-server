import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { MyBrowsingHistoryEntity } from 'src/entity/my/browsingHistory';
import { CommodityEntity } from 'src/entity/commodity/commodity';
import { CommodityPriceEntity } from 'src/entity/commodity/attribute/price';
import { CommodityPhotoEntity } from 'src/entity/commodity/attribute/photo';
import { CommodityNameEntity } from 'src/entity/commodity/attribute/name';
import { CommodityDescEntity } from 'src/entity/commodity/attribute/desc';
import { UserSellerEntity } from 'src/entity/user/seller/seller';

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
        count: payload.count
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
      .leftJoinAndSelect('myBrowsingHistory.commodity', 'commodity')
      .leftJoinAndMapOne('myBrowsingHistory.name', CommodityNameEntity, "commodityName", "commodityName.commodityId = commodity.commodityId")
      .leftJoinAndMapOne('myBrowsingHistory.desc', CommodityDescEntity, "commodityDesc", "commodityDesc.commodityId = commodity.commodityId")
      .leftJoinAndMapOne('myBrowsingHistory.price', CommodityPriceEntity, "commodityPrice", "commodityPrice.commodityId = commodity.commodityId")
      .leftJoinAndMapMany('myBrowsingHistory.photos', CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commodity.commodityId")
      .leftJoinAndMapOne('myBrowsingHistory.seller', UserSellerEntity, "commoditySeller", "commoditySeller.sellerId = commodity.sellerId")
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
   * 更新
   * @param payload
   */
  async BaseUpdate(payload) {
    console.log("BaseUpdate", payload)
    const { userId, commodityId, ...setData } = payload;
    return await this.myBrowsingHistoryEntity
      .createQueryBuilder()
      .update(MyBrowsingHistoryEntity)
      .set(setData)
      .where("user.userId = :userId", { userId: payload.userId })
      .andWhere("commodity.commodityId = :commodityId", { commodityId: payload.commodityId })
      .execute();
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

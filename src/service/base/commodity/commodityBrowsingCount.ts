import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityBrowsingCountEntity } from 'src/entity/commodity/commodityBrowsingCount';


@Provide()
export class BaseCommodityBrowsingCountServer {

  @InjectEntityModel(CommodityBrowsingCountEntity)
  commodityBrowsingCountEntity: Repository<CommodityBrowsingCountEntity>;

  /**
   * 创建
   * @param payload
   */
  async BaseCreate() {
    return await this.commodityBrowsingCountEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityBrowsingCountEntity)
      .values({
        count: 1
      })
      .execute();
  }



  /**
   * 查找
   * @param payload
   */
  async BaseRetrieve(commodityId) {
    console.log("BaseRetrieve", commodityId)
    return await this.commodityBrowsingCountEntity
      .createQueryBuilder('browsingCount')
      .leftJoinAndSelect("browsingCount.commodity", "commodity")
      .where("commodity.commodityId = :commodityId", { commodityId: commodityId })
      .getOne();
  }

  /**
   * 更新商品
   * @param payload
   */
  async BaseUpdate(payload) {
    console.log("BaseUpdate", payload)
    const { commodityId, ...setData } = payload;
    return await this.commodityBrowsingCountEntity
      .createQueryBuilder()
      .update(CommodityBrowsingCountEntity)
      .set(setData)
      .where("commodityId = :commodityId", { commodityId: commodityId })
      .execute();
  }

  /**
   * BaseRelation
   */
  async BaseRelation(payload) {
    await this.commodityBrowsingCountEntity
      .createQueryBuilder()
      .relation(CommodityBrowsingCountEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

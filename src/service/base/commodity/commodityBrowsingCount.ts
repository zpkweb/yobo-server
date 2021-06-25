import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityBrowsingCountEntity } from 'src/entity/commodity/commodityBrowsingCount';


@Provide()
export class BaseCommodityBrowsingCountService {

  @InjectEntityModel(CommodityBrowsingCountEntity)
  commodityBrowsingCountEntity: Repository<CommodityBrowsingCountEntity>;

  /**
   * 创建
   * @param payload
   */
  async BaseCreate(commodityId) {
    return await this.commodityBrowsingCountEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityBrowsingCountEntity)
      .values({
        count: 1,
        commodityId: commodityId
      })
      .execute();
  }



  /**
   * 查找
   * @param payload
   */
  async BaseRetrieve(commodityId) {
    return await this.commodityBrowsingCountEntity
      .createQueryBuilder('browsingCount')
      // .leftJoinAndSelect("browsingCount.commodity", "commodity")
      .where("browsingCount.commodityId = :commodityId", { commodityId: commodityId })
      .getOne();
  }

  /**
   * 更新
   * @param payload
   */
  async BaseUpdate(payload) {
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

import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityNameEntity } from 'src/entity/commodity/attribute/name';

@Provide()
export class BaseCommodityNameServer {

  @InjectEntityModel(CommodityNameEntity)
  commodityNameEntity: Repository<CommodityNameEntity>;

  /**
   * 创建商品名称
   */
  async BaseCreate(payload) {
    return await this.commodityNameEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityNameEntity)
      // .values({
      //   'zh-cn': payload['zh-cn'],
      //   'en-us': payload['en-us'],
      //   'ja-jp': payload['ja-jp'],
      //   'fr-fr': payload['fr-fr'],
      //   'es-es': payload['es-es']
      // })
      .values(payload)
      .execute();
  }

  /**
   * 查询商品是否存在
   * @param commodityId
   */
  async BaseHas(commodityId) {
    return await this.commodityNameEntity
    .createQueryBuilder('commodity')
    .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
    .getOne();
  }

  /**
   * 查询商品名称
   */
  async BaseRetrieve(payload) {
    return await this.commodityNameEntity
      .createQueryBuilder('name')
      .where('name.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('name.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('name.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      .orWhere('name.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .orWhere('name.es-es = :eses', { eses: payload['es-es'] })
      .getOne();
  }

  /**
   * 查询商品名称Id
   */
  async BaseRetrieveId(payload) {
    return await this.commodityNameEntity
      .createQueryBuilder('name')
      .where('name.commodityId = :commodityId', { commodityId: payload.commodityId })
      .getOne();
  }

  /**
   * 查询商品所有名称
   */
  async BaseRetrieveAll() {
    return await this.commodityNameEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改商品名称
   */
  async BaseUpdate(payload) {
    console.log("BaseUpdate", payload)
    const { commodityId, ...setData } = payload;
    return await this.commodityNameEntity
      .createQueryBuilder()
      .update(CommodityNameEntity)
      // .set({
      //   'zh-cn': payload['zh-cn'],
      //   'en-us': payload['en-us'],
      //   'ja-jp': payload['ja-jp'],
      //   'fr-fr': payload['fr-fr']
      // })
      .set(setData)
      .where("commodityId = :commodityId", { commodityId: commodityId })
      .execute();
  }

  /**
   * 删除商品名称
   */
  async BaseDelete(commodityId) {
    return await this.commodityNameEntity
      .createQueryBuilder()
      .delete()
      .where("commodityId = :commodityId", { commodityId: commodityId })
      .execute();
  }
}

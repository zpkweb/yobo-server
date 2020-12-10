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
      .values({
        'zh-cn': payload['zh-cn'],
        'en-us': payload['en-us'],
        'ja-jp': payload['ja-jp'],
        'fr-fr': payload['fr-fr']
      })
      .execute();
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
      .getOne();
  }

  /**
   * 查询商品名称Id
   */
  async BaseRetrieveId(payload) {
    return await this.commodityNameEntity
      .createQueryBuilder('name')
      .where('name.id = :id', { id: payload.id })
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
    return await this.commodityNameEntity
      .createQueryBuilder()
      .update(CommodityNameEntity)
      .set({
        'zh-cn': payload['zh-cn'],
        'en-us': payload['en-us'],
        'ja-jp': payload['ja-jp'],
        'fr-fr': payload['fr-fr']
      })
      .where("id = :id", { id: payload.id })
      .execute();
  }

  /**
   * 删除商品名称
   */
  async BaseDelete(payload) {
    return await this.commodityNameEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: payload.id })
      .execute();
  }
}

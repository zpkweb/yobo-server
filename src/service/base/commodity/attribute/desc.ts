import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityDescEntity } from 'src/entity/commodity/attribute/desc';

@Provide()
export class BaseCommodityDescServer {

  @InjectEntityModel(CommodityDescEntity)
  commodityDescEntity: Repository<CommodityDescEntity>;

  /**
   * 创建商品名称
   */
  async BaseCreate(payload) {
    return await this.commodityDescEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityDescEntity)
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
    return await this.commodityDescEntity
      .createQueryBuilder('desc')
      .where('desc.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('desc.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('desc.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      .orWhere('desc.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .getOne();
  }

  /**
   * 查询商品名称Id
   */
  async BaseRetrieveId(payload) {
    return await this.commodityDescEntity
      .createQueryBuilder('desc')
      .where('desc.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询商品所有名称
   */
  async BaseRetrieveAll() {
    return await this.commodityDescEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改商品名称
   */
  async BaseUpdate(payload) {
    return await this.commodityDescEntity
      .createQueryBuilder()
      .update(CommodityDescEntity)
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
    return await this.commodityDescEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: payload.id })
      .execute();
  }
}

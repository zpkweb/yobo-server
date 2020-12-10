import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityPriceEntity } from 'src/entity/commodity/attribute/price';

@Provide()
export class BaseCommodityPriceServer {

  @InjectEntityModel(CommodityPriceEntity)
  commodityPriceEntity: Repository<CommodityPriceEntity>;

  /**
   * 创建商品名称
   */
  async BaseCreate(payload) {
    return await this.commodityPriceEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityPriceEntity)
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
    return await this.commodityPriceEntity
      .createQueryBuilder('price')
      .where('price.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('price.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('price.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      .orWhere('price.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .getOne();
  }

  /**
   * 查询商品名称Id
   */
  async BaseRetrieveId(payload) {
    return await this.commodityPriceEntity
      .createQueryBuilder('price')
      .where('price.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询商品所有名称
   */
  async BaseRetrieveAll() {
    return await this.commodityPriceEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改商品名称
   */
  async BaseUpdate(payload) {
    return await this.commodityPriceEntity
      .createQueryBuilder()
      .update(CommodityPriceEntity)
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
    return await this.commodityPriceEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: payload.id })
      .execute();
  }
}

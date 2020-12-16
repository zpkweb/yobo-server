import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityPriceEntity } from 'src/entity/commodity/attribute/price';

@Provide()
export class BaseCommodityPriceServer {

  @InjectEntityModel(CommodityPriceEntity)
  commodityPriceEntity: Repository<CommodityPriceEntity>;

  /**
   * 创建价格
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
   * 查询价格是否存在
   * @param commodityId
   */
  async BaseHas(commodityId) {
    return await this.commodityPriceEntity
    .createQueryBuilder('commodity')
    .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
    .getOne();
  }

  /**
   * 查询价格
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
   * 查询价格Id
   */
  async BaseRetrieveId(commodityId) {
    return await this.commodityPriceEntity
      .createQueryBuilder('price')
      .where('price.commodityId = :commodityId', { commodityId: commodityId })
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
   * 修改价格
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
      .where('commodityId = :commodityId', { commodityId: payload.commodityId })
      .execute();
  }

  /**
   * 删除价格
   */
  async BaseDelete(commodityId) {
    return await this.commodityPriceEntity
      .createQueryBuilder()
      .delete()
      .where('commodityId = :commodityId', { commodityId: commodityId })
      .execute();
  }
}

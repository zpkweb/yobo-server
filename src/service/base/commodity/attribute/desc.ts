import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityDescEntity } from 'src/entity/commodity/attribute/desc';

@Provide()
export class BaseCommodityDescServer {

  @InjectEntityModel(CommodityDescEntity)
  commodityDescEntity: Repository<CommodityDescEntity>;

  /**
   * 创建详情
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
   * 查询商品是否存在
   * @param commodityId
   */
  async BaseHas(commodityId) {
    return await this.commodityDescEntity
    .createQueryBuilder('desc')
    .where('desc.commodityId = :commodityId', { commodityId: commodityId })
    .getOne();
  }

  /**
   * 查询详情
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
   * 查询详情Id
   */
  async BaseRetrieveId(payload) {
    return await this.commodityDescEntity
      .createQueryBuilder('desc')
      .where('desc.commodityId = :commodityId', { commodityId: payload.commodityId })
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
   * 修改详情
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
      .where('commodityId = :commodityId', { commodityId: payload.commodityId })
      .execute();
  }

  /**
   * 删除详情
   */
  async BaseDelete(commodityId) {
    return await this.commodityDescEntity
      .createQueryBuilder()
      .delete()
      .where('commodityId = :commodityId', { commodityId: commodityId })
      .execute();
  }
}
/**
 * 商品分类
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsClassificationEntity } from 'src/entity/commodity/options/classification';

@Provide()
export class BaseCommodityOptionsClassificationService {

  @InjectEntityModel(CommodityOptionsClassificationEntity)
  commodityOptionsClassificationEntity: Repository<CommodityOptionsClassificationEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsClassificationEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsClassificationEntity)
      .values({
        'img': payload.img,
        'zh-cn': payload.zhcn,
        'en-us': payload.enus,
        'ja-jp': payload.jajp,
        'es-es': payload.eses
      })
      .execute();
  }



  /**
   * 查询
   */
  async BaseRetrieve(payload) {
    return await this.commodityOptionsClassificationEntity
      .createQueryBuilder('classification')
      .where('classification.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('classification.en-us = :enus', { enus: payload.enus })
      .orWhere('classification.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('classification.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveId(id) {
    return await this.commodityOptionsClassificationEntity
      .createQueryBuilder('classification')
      .where('classification.id = :id', { id: id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsClassificationEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    return await this.commodityOptionsClassificationEntity
      .createQueryBuilder()
      .update(CommodityOptionsClassificationEntity)
      .set({
        'img': payload.img,
        'zh-cn': payload.zhcn,
        'en-us': payload.enus,
        'ja-jp': payload.jajp,
        'es-es': payload.eses
      })
      .where("id = :id", { id: payload.id })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(id) {
    return await this.commodityOptionsClassificationEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}

/**
 * 商品分类
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsModelEntity } from 'src/entity/commodity/options/model';

@Provide()
export class BaseCommodityOptionsModelServer {

  @InjectEntityModel(CommodityOptionsModelEntity)
  commodityOptionsModelEntity: Repository<CommodityOptionsModelEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsModelEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsModelEntity)
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
    return await this.commodityOptionsModelEntity
      .createQueryBuilder('model')
      .where('model.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('model.en-us = :enus', { enus: payload.enus })
      .orWhere('model.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('model.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveId(id) {
    return await this.commodityOptionsModelEntity
      .createQueryBuilder('model')
      .where('model.id = :id', { id: id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsModelEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
   async BaseUpdate(payload) {
    return await this.commodityOptionsModelEntity
      .createQueryBuilder()
      .update(CommodityOptionsModelEntity)
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
    return await this.commodityOptionsModelEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}

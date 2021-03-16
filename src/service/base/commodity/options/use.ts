/**
 * 商品用途
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsUseEntity } from 'src/entity/commodity/options/use';

@Provide()
export class BaseCommodityOptionsUseServer {

  @InjectEntityModel(CommodityOptionsUseEntity)
  CommodityOptionsUseEntity: Repository<CommodityOptionsUseEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.CommodityOptionsUseEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsUseEntity)
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
    return await this.CommodityOptionsUseEntity
      .createQueryBuilder('use')
      .where('use.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('use.en-us = :enus', { enus: payload.enus })
      .orWhere('use.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('use.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveId(payload) {
    return await this.CommodityOptionsUseEntity
      .createQueryBuilder('use')
      .where('use.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.CommodityOptionsUseEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    const { id, ...setData } = payload;
    return await this.CommodityOptionsUseEntity
      .createQueryBuilder()
      .update(CommodityOptionsUseEntity)
      .set(setData)
      .where("id = :id", { id })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(id) {
    return await this.CommodityOptionsUseEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}

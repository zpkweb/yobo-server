/**
 * 商品摆放
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsPlaceEntity } from 'src/entity/commodity/options/place';

@Provide()
export class BaseCommodityOptionsPlaceServer {

  @InjectEntityModel(CommodityOptionsPlaceEntity)
  commodityOptionsPlaceEntity: Repository<CommodityOptionsPlaceEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsPlaceEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsPlaceEntity)
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
    return await this.commodityOptionsPlaceEntity
      .createQueryBuilder('place')
      .where('place.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('place.en-us = :enus', { enus: payload.enus })
      .orWhere('place.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('place.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveId(id) {
    return await this.commodityOptionsPlaceEntity
      .createQueryBuilder('place')
      .where('place.id = :id', { id: id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsPlaceEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
   async BaseUpdate(payload) {
    return await this.commodityOptionsPlaceEntity
      .createQueryBuilder()
      .update(CommodityOptionsPlaceEntity)
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
    return await this.commodityOptionsPlaceEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}

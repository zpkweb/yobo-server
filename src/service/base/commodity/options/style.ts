/**
 * 商品风格
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsStyleEntity } from 'src/entity/commodity/options/style';

@Provide()
export class BaseCommodityOptionsStyleService {

  @InjectEntityModel(CommodityOptionsStyleEntity)
  commodityOptionsStyleEntity: Repository<CommodityOptionsStyleEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsStyleEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsStyleEntity)
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
    return await this.commodityOptionsStyleEntity
      .createQueryBuilder('style')
      .where('style.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('style.en-us = :enus', { enus: payload.enus })
      .orWhere('style.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('style.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveId(id) {
    return await this.commodityOptionsStyleEntity
      .createQueryBuilder('style')
      .where('style.id = :id', { id: id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsStyleEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
   async BaseUpdate(payload) {
    return await this.commodityOptionsStyleEntity
      .createQueryBuilder()
      .update(CommodityOptionsStyleEntity)
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
    return await this.commodityOptionsStyleEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}

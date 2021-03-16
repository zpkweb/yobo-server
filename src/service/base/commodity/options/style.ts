/**
 * 商品风格
 */
import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsStyleEntity } from 'src/entity/commodity/options/style';

@Provide()
export class BaseCommodityOptionsStyleServer {

  @InjectEntityModel(CommodityOptionsStyleEntity)
  CommodityOptionsStyleEntity: Repository<CommodityOptionsStyleEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.CommodityOptionsStyleEntity
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
    return await this.CommodityOptionsStyleEntity
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
  async BaseRetrieveId(payload) {
    return await this.CommodityOptionsStyleEntity
      .createQueryBuilder('style')
      .where('style.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieveAll() {
    return await this.CommodityOptionsStyleEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    const { id, ...setData } = payload;
    return await this.CommodityOptionsStyleEntity
      .createQueryBuilder()
      .update(CommodityOptionsStyleEntity)
      .set(setData)
      .where("id = :id", { id })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(id) {
    return await this.CommodityOptionsStyleEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}

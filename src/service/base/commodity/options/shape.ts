import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsShapeEntity } from 'src/entity/commodity/options/shape';

@Provide()
export class BaseCommodityOptionsShapeService {

  @InjectEntityModel(CommodityOptionsShapeEntity)
  commodityOptionsShapeEntity: Repository<CommodityOptionsShapeEntity>;

  /**
   * 创建商品形状选项
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsShapeEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsShapeEntity)
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
   * 查询商品形状选项
   */
  async BaseRetrieve(payload) {
    return await this.commodityOptionsShapeEntity
      .createQueryBuilder('shape')
      .where('shape.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('shape.en-us = :enus', { enus: payload.enus })
      .orWhere('shape.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('shape.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询商品形状选项Id
   */
  async BaseRetrieveId(id) {
    return await this.commodityOptionsShapeEntity
      .createQueryBuilder('shape')
      .where('shape.id = :id', { id: id })
      .getOne();
  }

  /**
   * 查询商品所有形状选项
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsShapeEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改商品形状选项
   */
   async BaseUpdate(payload) {
    return await this.commodityOptionsShapeEntity
      .createQueryBuilder()
      .update(CommodityOptionsShapeEntity)
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
   * 删除商品形状选项
   */
  async BaseDelete(id) {
    return await this.commodityOptionsShapeEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}

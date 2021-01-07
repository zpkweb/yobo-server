import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsShapeEntity } from 'src/entity/commodity/options/shape';

@Provide()
export class BaseCommodityOptionsShapeServer {

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
        'zh-cn': payload['zh-cn'],
        'en-us': payload['en-us'],
        'ja-jp': payload['ja-jp'],
        'fr-fr': payload['fr-fr']
      })
      .execute();
  }

  /**
   * 查询商品形状选项
   */
  async BaseRetrieve(payload) {
    console.log("BaseCommodityOptionsShapeRetrieve", payload)
    return await this.commodityOptionsShapeEntity
      .createQueryBuilder('shape')
      .where('shape.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('shape.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('shape.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      .orWhere('shape.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .getOne();
  }

  /**
   * 查询商品形状选项Id
   */
  async BaseRetrieveId(payload) {
    console.log("BaseCommodityOptionsShapeRetrieve", payload)
    return await this.commodityOptionsShapeEntity
      .createQueryBuilder('shape')
      .where('shape.id = :id', { id: payload.id })
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
    console.log("BaseCommodityOptionsShapeUpdate", payload)
    const { id, ...setData } = payload;
    return await this.commodityOptionsShapeEntity
      .createQueryBuilder()
      .update(CommodityOptionsShapeEntity)
      // .set({
      //   'zh-cn': payload['zh-cn'],
      //   'en-us': payload['en-us'],
      //   'ja-jp': payload['ja-jp'],
      //   'fr-fr': payload['fr-fr']
      // })
      .set(setData)
      .where("id = :id", { id: id })
      .execute();
  }

  /**
   * 删除商品形状选项
   */
  async BaseDelete(payload) {
    console.log("BaseCommodityOptionsShapeDelete", payload)
    return await this.commodityOptionsShapeEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: payload.id })
      .execute();
  }
}

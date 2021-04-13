import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsThemeEntity } from 'src/entity/commodity/options/theme';

@Provide()
export class BaseCommodityOptionsThemeServer {

  @InjectEntityModel(CommodityOptionsThemeEntity)
  commodityOptionsThemeEntity: Repository<CommodityOptionsThemeEntity>;

  /**
   * 创建商品形状选项
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsThemeEntity)
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
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder('theme')
      .where('theme.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('theme.en-us = :enus', { enus: payload.enus })
      .orWhere('theme.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('theme.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询商品形状选项Id
   */
  async BaseRetrieveId(id) {
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder('theme')
      .where('theme.id = :id', { id: id })
      .getOne();
  }

  /**
   * 查询商品所有形状选项
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改商品形状选项
   */
   async BaseUpdate(payload) {
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder()
      .update(CommodityOptionsThemeEntity)
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
    return await this.commodityOptionsThemeEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}

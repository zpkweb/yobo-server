import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityOptionsTechniqueEntity } from 'src/entity/commodity/options/technique';

@Provide()
export class BaseCommodityOptionsTechniqueService {

  @InjectEntityModel(CommodityOptionsTechniqueEntity)
  commodityOptionsTechniqueEntity: Repository<CommodityOptionsTechniqueEntity>;

  /**
   * 创建商品形状选项
   */
  async BaseCreate(payload) {
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityOptionsTechniqueEntity)
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
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder('technique')
      .where('technique.zh-cn = :zhcn', { zhcn: payload.zhcn })
      .orWhere('technique.en-us = :enus', { enus: payload.enus })
      .orWhere('technique.ja-jp = :jajp', { jajp: payload.jajp })
      .orWhere('technique.es-es = :eses', { eses: payload.eses })
      .getOne();
  }

  /**
   * 查询商品形状选项Id
   */
  async BaseRetrieveId(id) {
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder('technique')
      .where('technique.id = :id', { id: id })
      .getOne();
  }

  /**
   * 查询商品所有形状选项
   */
  async BaseRetrieveAll() {
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改商品形状选项
   */
   async BaseUpdate(payload) {
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder()
      .update(CommodityOptionsTechniqueEntity)
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
    return await this.commodityOptionsTechniqueEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id })
      .execute();
  }
}

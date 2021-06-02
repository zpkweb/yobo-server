import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityDetailsEntity } from 'src/entity/commodity/attribute/details';

@Provide()
export class BaseCommodityDetailsServer {

  @InjectEntityModel(CommodityDetailsEntity)
  commodityDetailsEntity: Repository<CommodityDetailsEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityDetailsEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityDetailsEntity)
      // .values({
      //   'zh-cn': payload['zh-cn'],
      //   'en-us': payload['en-us'],
      //   'ja-jp': payload['ja-jp'],
      //   'fr-fr': payload['fr-fr'],
      //   'es-es': payload['es-es']
      // })
      .values(payload)
      .execute();
  }

  /**
   * 查询商品是否存在
   * @param commodityId
   */
  async BaseHas(commodityId) {
    return await this.commodityDetailsEntity
    .createQueryBuilder('details')
    .where('details.commodityId = :commodityId', { commodityId: commodityId })
    .getOne();
  }

  /**
   * 查询
   */
  async BaseRetrieve(payload) {
    return await this.commodityDetailsEntity
      .createQueryBuilder('details')
      .where('details.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('details.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('details.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      // .orWhere('details.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .orWhere('details.es-es = :eses', { eses: payload['es-es'] })
      .getOne();
  }

  /**
   * 查询Id
   */
  async BaseRetrieveCommodityId(commodityId) {
    return await this.commodityDetailsEntity
      .createQueryBuilder('details')
      .where('details.commodityId = :commodityId', { commodityId: commodityId })
      .getOne();
  }

  /**
   * 查询所有
   */
  async BaseRetrieveAll() {
    return await this.commodityDetailsEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    const { commodityId, ...setData } = payload;
    return await this.commodityDetailsEntity
      .createQueryBuilder()
      .update(CommodityDetailsEntity)
      // .set({
      //   'zh-cn': payload['zh-cn'],
      //   'en-us': payload['en-us'],
      //   'ja-jp': payload['ja-jp'],
      //   'fr-fr': payload['fr-fr']
      // })
      .set(setData)
      .where('commodityId = :commodityId', { commodityId: commodityId })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(commodityId) {
    return await this.commodityDetailsEntity
      .createQueryBuilder()
      .delete()
      .where('commodityId = :commodityId', { commodityId: commodityId })
      .execute();
  }

  async BaseSearch(payload) {
    return await this.commodityDetailsEntity
      .createQueryBuilder('details')
      .innerJoinAndSelect('details.commodity', 'commoditys')
      .where('details.zh-cn like :zhcn', { zhcn: `%${payload}%` })
      .getMany();
  }

}

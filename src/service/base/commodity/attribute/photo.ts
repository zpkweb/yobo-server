import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityPhotoEntity } from 'src/entity/commodity/attribute/photo';

@Provide()
export class BaseCommodityPhotoServer {

  @InjectEntityModel(CommodityPhotoEntity)
  commodityPhotoEntity: Repository<CommodityPhotoEntity>;

  /**
   * 创建商品名称
   */
  async BaseCreate(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityPhotoEntity)
      .values({
        'src': payload.src,
        'name': payload.name
      })
      .execute();
  }

  /**
   * 查询商品名称
   */
  async BaseRetrieve(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder('photo')
      .where('photo.zh-cn = :zhcn', { zhcn: payload['zh-cn'] })
      .orWhere('photo.en-us = :enus', { enus: payload['en-us'] })
      .orWhere('photo.ja-jp = :jajp', { jajp: payload['ja-jp'] })
      .orWhere('photo.fr-fr = :frfr', { frfr: payload['fr-fr'] })
      .getOne();
  }

  /**
   * 查询商品名称Id
   */
  async BaseRetrieveId(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder('photo')
      .where('photo.id = :id', { id: payload.id })
      .getOne();
  }

  /**
   * 查询商品所有名称
   */
  async BaseRetrieveAll() {
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改商品名称
   */
  async BaseUpdate(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .update(CommodityPhotoEntity)
      .set({
        'src': payload['src']
      })
      .where("id = :id", { id: payload.id })
      .execute();
  }

  /**
   * 删除商品名称
   */
  async BaseDelete(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .delete()
      .where("id = :id", { id: payload.id })
      .execute();
  }
}

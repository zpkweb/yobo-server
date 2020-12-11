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
   * 查询商品是否存在
   * @param commodityId
   */
  async BaseHas(commodityId) {
    return await this.commodityPhotoEntity
    .createQueryBuilder('commodity')
    .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
    .getOne();
  }


  /**
   * 查询商品
   */
  async BaseRetrieveCommodityId(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder('photo')
      .where('photo.commodityId = :commodityId', { commodityId: payload.commodityId })
      .getMany();
  }

  /**
   * 查询商品名称
   */
  async BaseRetrieve(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder('photo')
      .where('photo.id = :id', { id: payload.id })
      .orWhere('photo.name = :name', { name: payload.name })
      .orWhere('photo.src = :src', { src: payload.src })
      .getMany();
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

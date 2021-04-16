import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityPhotoEntity } from 'src/entity/commodity/attribute/photo';

@Provide()
export class BaseCommodityPhotoServer {

  @InjectEntityModel(CommodityPhotoEntity)
  commodityPhotoEntity: Repository<CommodityPhotoEntity>;

  /**
   * 创建图片
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
   * 查询图片是否存在
   * @param commodityId
   */
  async BaseHas(commodityId) {
    return await this.commodityPhotoEntity
    .createQueryBuilder('commodity')
    .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
    .getOne();
  }


  /**
   * 查询图片
   */
  async BaseRetrieveCommodityId(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder('photo')
      .where('photo.commodityId = :commodityId', { commodityId: payload.commodityId })
      .getMany();
  }

  /**
   * 查询图片
   */
  async BaseRetrieve(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder('photo')
      .where('photo.commodityId = :commodityId', { commodityId: payload.commodityId })
      .orWhere('photo.name = :name', { name: payload.name })
      .orWhere('photo.src = :src', { src: payload.src })
      .getMany();
  }

  /**
   * 查询所有图片
   */
  async BaseRetrieveAll() {
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改图片
   */
  async BaseUpdate(payload) {
    const { commodityId, ...setData } = payload;
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .update(CommodityPhotoEntity)
      .set(setData)
      .where('commodityId = :commodityId', { commodityId: commodityId })
      .execute();
  }

  /**
   * 删除图片
   */
  async BaseDelete(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .delete()
      .where('commodityId = :commodityId', { commodityId: payload.commodityId })
      .execute();
  }
}

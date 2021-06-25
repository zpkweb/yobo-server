import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityPhotoEntity } from 'src/entity/commodity/attribute/photo';

@Provide()
export class BaseCommodityPhotoService {

  @InjectEntityModel(CommodityPhotoEntity)
  commodityPhotoEntity: Repository<CommodityPhotoEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityPhotoEntity)
      // .values({
      //   'src': payload.src,
      //   'name': payload.name
      // })
      .values(payload)
      .execute();
  }

  /**
   * 查询是否存在
   * @param commodityId
   */
  async BaseHas(commodityId) {
    return await this.commodityPhotoEntity
    .createQueryBuilder('commodity')
    .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
    .getOne();
  }


  /**
   * 查询
   */
  async BaseRetrieveCommodityId(commodityId) {
    return await this.commodityPhotoEntity
      .createQueryBuilder('photo')
      .where('photo.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  /**
   * 查询
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
   * 查询所有
   */
  async BaseRetrieveAll() {
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    const { id, ...setData } = payload;
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .update(CommodityPhotoEntity)
      .set(setData)
      .where('id = :id', { id: id })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(id) {
    return await this.commodityPhotoEntity
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id: id })
      .execute();
  }
}

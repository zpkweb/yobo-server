import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityVideoEntity } from 'src/entity/commodity/attribute/video';

@Provide()
export class BaseCommodityVideoServer {

  @InjectEntityModel(CommodityVideoEntity)
  commodityVideoEntity: Repository<CommodityVideoEntity>;

  /**
   * 创建
   */
  async BaseCreate(payload) {
    return await this.commodityVideoEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityVideoEntity)
      .values(payload)
      .execute();
  }

  /**
   * 查询是否存在
   * @param commodityId
   */
  async BaseHas(commodityId) {
    return await this.commodityVideoEntity
    .createQueryBuilder('commodity')
    .where('commodity.commodityId = :commodityId', { commodityId: commodityId })
    .getOne();
  }


  /**
   * 查询
   */
  async BaseRetrieveCommodityId(commodityId) {
    return await this.commodityVideoEntity
      .createQueryBuilder('video')
      .where('video.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  /**
   * 查询
   */
  async BaseRetrieve(payload) {
    return await this.commodityVideoEntity
      .createQueryBuilder('video')
      .where('video.commodityId = :commodityId', { commodityId: payload.commodityId })
      .orWhere('video.name = :name', { name: payload.name })
      .orWhere('video.src = :src', { src: payload.src })
      .getMany();
  }

  /**
   * 查询所有
   */
  async BaseRetrieveAll() {
    return await this.commodityVideoEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改
   */
  async BaseUpdate(payload) {
    const { id, ...setData } = payload;
    return await this.commodityVideoEntity
      .createQueryBuilder()
      .update(CommodityVideoEntity)
      .set(setData)
      .where('id = :id', { id: id })
      .execute();
  }

  /**
   * 删除
   */
  async BaseDelete(id) {
    return await this.commodityVideoEntity
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id: id })
      .execute();
  }
}

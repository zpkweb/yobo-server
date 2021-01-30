import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { PageBannerEntity } from 'src/entity/page/banner';

@Provide()
export class BasePageBannerServer {

  @InjectEntityModel(PageBannerEntity)
  pageBannerEntity: Repository<PageBannerEntity>;

  /**
   * 创建图片
   */
  async BaseCreate(payload) {
    return await this.pageBannerEntity
      .createQueryBuilder()
      .insert()
      .into(PageBannerEntity)
      .values({
        src: payload.src,
        title: payload.title,
        subTitle: payload.subTitle,
        desc: payload.desc
      })
      .execute();
  }

  /**
   * 查询图片是否存在
   * @param bannerId
   */
  async BaseHas(bannerId) {
    return await this.pageBannerEntity
    .createQueryBuilder('banner')
    .where('banner.bannerId = :bannerId', { bannerId: bannerId })
    .getOne();
  }


  /**
   * 查询图片
   */
  async BaseRetrievebannerId(payload) {
    return await this.pageBannerEntity
      .createQueryBuilder('banner')
      .where('banner.bannerId = :bannerId', { bannerId: payload.bannerId })
      .getOne();
  }

  /**
   * 查询图片
   */
  async BaseRetrieve(payload) {
    return await this.pageBannerEntity
      .createQueryBuilder('banner')
      .where('banner.bannerId = :bannerId', { bannerId: payload.bannerId })
      .orWhere('banner.name = :name', { name: payload.name })
      .orWhere('banner.src = :src', { src: payload.src })
      .getMany();
  }

  /**
   * 查询所有图片
   */
  async BaseRetrieveAll() {
    return await this.pageBannerEntity
      .createQueryBuilder()
      .getMany();
  }

  /**
   * 修改图片
   */
  async BaseUpdate(payload) {
    console.log("BaseUpdate", payload)
    const { bannerId, ...setData } = payload;
    return await this.pageBannerEntity
      .createQueryBuilder()
      .update(PageBannerEntity)
      .set(setData)
      .where('bannerId = :bannerId', { bannerId: bannerId })
      .execute();
  }

  /**
   * 删除图片
   */
  async BaseDelete(bannerId) {
    return await this.pageBannerEntity
      .createQueryBuilder()
      .delete()
      .where('bannerId = :bannerId', { bannerId: bannerId })
      .execute();
  }

}

import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { MyLikeCommodityEntity } from 'src/entity/my/likeCommodity';
import { CommodityPriceEntity } from 'src/entity/commodity/attribute/price';
import { CommodityPhotoEntity } from 'src/entity/commodity/attribute/photo';
import { CommodityNameEntity } from 'src/entity/commodity/attribute/name';
import { CommodityDescEntity } from 'src/entity/commodity/attribute/desc';
import { UserSellerEntity } from 'src/entity/user/seller/seller';

@Provide()
export class BaseMyLikeCommodityServer {

  @InjectEntityModel(MyLikeCommodityEntity)
  myLikeCommodityEntity: Repository<MyLikeCommodityEntity>;



  /**
   * 创建我喜欢的艺术家
   * @param payload
   */
  async BaseCreate(payload) {
    return await this.myLikeCommodityEntity
      .createQueryBuilder()
      .insert()
      .into(MyLikeCommodityEntity)
      .values({
        userName: payload.userName,
        userId: payload.userId,
        'zh-cn': payload['zh-cn'] || '',
        'en-us': payload['en-us'] || '',
        'ja-jp': payload['ja-jp'] || '',
        'fr-fr': payload['fr-fr'] || '',
        'es-es': payload['es-es'] || '',
        commodityId: payload.commodityId
      })
      .execute();
  }

  /**
   * 查找我喜欢的艺术家是否存在
   */
  async BaseHas(payload) {
    return await this.myLikeCommodityEntity
      .createQueryBuilder('myLikeCommodity')
      .where("myLikeCommodity.userId = :userId", { userId: payload.userId })
      .andWhere("myLikeCommodity.commodityId = :commodityId", { commodityId: payload.commodityId })
      .getOne();
  }

  /**
   * 查找我喜欢的艺术家
   * @param payload
   */
    async BaseRetrieve(userId) {
      return await this.myLikeCommodityEntity
        .createQueryBuilder('myLikeCommodity')
        .leftJoinAndSelect('myLikeCommodity.commodity', 'commodity')
        .leftJoinAndMapOne('myLikeCommodity.name', CommodityNameEntity, "commodityName", "commodityName.commodityId = commodity.commodityId")
        .leftJoinAndMapOne('myLikeCommodity.desc', CommodityDescEntity, "commodityDesc", "commodityDesc.commodityId = commodity.commodityId")
        .leftJoinAndMapOne('myLikeCommodity.price', CommodityPriceEntity, "commodityPrice", "commodityPrice.commodityId = commodity.commodityId")
        .leftJoinAndMapMany('myLikeCommodity.photos', CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commodity.commodityId")
        .leftJoinAndMapOne('myLikeCommodity.seller', UserSellerEntity, "commoditySeller", "commoditySeller.sellerId = commodity.sellerId")
        .where("myLikeCommodity.userId = :userId", { userId: userId })
        .getMany();
    }

  // 商家 关联 用户

  async BaseRelation(payload) {
    await this.myLikeCommodityEntity
      .createQueryBuilder()
      .relation(MyLikeCommodityEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

  /**
   * 删除我喜欢的艺术家
   */
  async BaseDelete(payload) {
    return await this.myLikeCommodityEntity
      .createQueryBuilder()
      .delete()
      .where("userId = :userId", { userId: payload.userId })
      .andWhere("commodityId = :commodityId", { commodityId: payload.commodityId })
      .execute();
  }

  /**
   * 删除我喜欢的所有艺术家
   */
  async BaseDeleteAll(userId) {
    return await this.myLikeCommodityEntity
      .createQueryBuilder()
      .delete()
      .where("userId = :userId", { userId: userId })
      .execute();
  }

}

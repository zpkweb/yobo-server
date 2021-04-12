import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityCategoryEntity } from 'src/entity/commodity/commodity-options/category'


@Provide()
export class BaseCommodityCategoryServer {

  @InjectEntityModel(CommodityCategoryEntity)
  commodityCategoryEntity: Repository<CommodityCategoryEntity>;

  async BaseCreate(payload) {
    return await this.commodityCategoryEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityCategoryEntity)
      .values({
        commodityName: payload.commodityName,
        categoryName: payload.categoryName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.commodityCategoryEntity
      .createQueryBuilder('category')
      .where('category.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('category.categoryName = :categoryName', { categoryName: payload.categoryName })
      .getOne();
  }


  async BaseRelationSet(payload) {
    await this.commodityCategoryEntity
      .createQueryBuilder()
      .relation(CommodityCategoryEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

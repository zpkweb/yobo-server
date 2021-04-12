import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityClassificationEntity } from 'src/entity/commodity/commodity-options/classification'


@Provide()
export class BaseCommodityClassificationServer {

  @InjectEntityModel(CommodityClassificationEntity)
  CommodityClassificationEntity: Repository<CommodityClassificationEntity>;

  async BaseCreate(payload) {
    return await this.CommodityClassificationEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityClassificationEntity)
      .values({
        commodityName: payload.commodityName,
        classificationName: payload.classificationName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityClassificationEntity
      .createQueryBuilder('category')
      .where('category.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('category.classificationName = :classificationName', { classificationName: payload.classificationName })
      .getOne();
  }


  async BaseRelationSet(payload) {
    await this.CommodityClassificationEntity
      .createQueryBuilder()
      .relation(CommodityClassificationEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

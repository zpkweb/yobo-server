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
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }

  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityClassificationEntity
      .createQueryBuilder('classification')
      // .leftJoinAndSelect('classification.commoditys', 'commoditys')
      .innerJoinAndSelect('classification.options', 'options')
      .where('classification.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityClassificationEntity
      .createQueryBuilder('classification')
      // .leftJoinAndSelect('classification.commoditys', 'commoditys')
      .innerJoinAndSelect('classification.options', 'options')
      .where('classification.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('classification.optionId = :optionId', { optionId: payload.optionId })
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

import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityRuiwuEntity } from 'src/entity/commodity/commodity-options/ruiwu'


@Provide()
export class BaseCommodityRuiwuServer {

  @InjectEntityModel(CommodityRuiwuEntity)
  CommodityRuiwuEntity: Repository<CommodityRuiwuEntity>;

  async BaseCreate(payload) {
    return await this.CommodityRuiwuEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityRuiwuEntity)
      .values({
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityRuiwuEntity
      .createQueryBuilder('ruiwu')
      // .leftJoinAndSelect('ruiwu.commoditys', 'commoditys')
      .innerJoinAndSelect('ruiwu.options', 'options')
      .where('ruiwu.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityRuiwuEntity
      .createQueryBuilder('ruiwu')
      // .leftJoinAndSelect('ruiwu.commoditys', 'commoditys')
      .innerJoinAndSelect('ruiwu.options', 'options')
      .where('ruiwu.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('ruiwu.optionId = :optionId', { optionId: payload.optionId })
      .getOne();
  }

  async BaseRelationSet(payload) {
    await this.CommodityRuiwuEntity
      .createQueryBuilder()
      .relation(CommodityRuiwuEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityModelEntity } from 'src/entity/commodity/commodity-options/model'


@Provide()
export class BaseCommodityModelServer {

  @InjectEntityModel(CommodityModelEntity)
  CommodityModelEntity: Repository<CommodityModelEntity>;

  async BaseCreate(payload) {
    return await this.CommodityModelEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityModelEntity)
      .values({
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityModelEntity
      .createQueryBuilder('model')
      // .leftJoinAndSelect('model.commoditys', 'commoditys')
      .leftJoinAndSelect('model.options', 'options')
      .where('model.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityModelEntity
      .createQueryBuilder('model')
      .leftJoinAndSelect('model.commoditys', 'commoditys')
      .leftJoinAndSelect('model.options', 'options')
      .where('model.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('model.optionId = :optionId', { optionId: payload.optionId })
      .getOne();
  }

  async BaseRelationSet(payload) {
    await this.CommodityModelEntity
      .createQueryBuilder()
      .relation(CommodityModelEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

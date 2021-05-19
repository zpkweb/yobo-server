import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityShapeEntity } from 'src/entity/commodity/commodity-options/shape'


@Provide()
export class BaseCommodityShapeServer {

  @InjectEntityModel(CommodityShapeEntity)
  CommodityShapeEntity: Repository<CommodityShapeEntity>;

  async BaseCreate(payload) {
    return await this.CommodityShapeEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityShapeEntity)
      .values({
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityShapeEntity
      .createQueryBuilder('shape')
      // .leftJoinAndSelect('shape.commoditys', 'commoditys')
      .innerJoinAndSelect('shape.options', 'options')
      .where('shape.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityShapeEntity
      .createQueryBuilder('shape')
      // .leftJoinAndSelect('shape.commoditys', 'commoditys')
      .innerJoinAndSelect('shape.options', 'options')
      .where('shape.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('shape.optionId = :optionId', { optionId: payload.optionId })
      .getOne();
  }

  async BaseRelationSet(payload) {
    await this.CommodityShapeEntity
      .createQueryBuilder()
      .relation(CommodityShapeEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

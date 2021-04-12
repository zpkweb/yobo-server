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
        commodityName: payload.commodityName,
        shapeName: payload.shapeName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityShapeEntity
      .createQueryBuilder('shape')
      .where('shape.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('shape.shapeName = :shapeName', { shapeName: payload.shapeName })
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

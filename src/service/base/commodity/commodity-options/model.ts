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
        commodityName: payload.commodityName,
        modelName: payload.modelName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityModelEntity
      .createQueryBuilder('model')
      .where('model.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('model.modelName = :modelName', { modelName: payload.modelName })
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

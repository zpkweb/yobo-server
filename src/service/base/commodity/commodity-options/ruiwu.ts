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
        commodityName: payload.commodityName,
        ruiwuName: payload.ruiwuName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityRuiwuEntity
      .createQueryBuilder('ruiwu')
      .where('ruiwu.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('ruiwu.ruiwuName = :ruiwuName', { ruiwuName: payload.ruiwuName })
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

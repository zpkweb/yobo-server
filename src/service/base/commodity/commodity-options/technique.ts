import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityTechniqueEntity } from 'src/entity/commodity/commodity-options/technique'


@Provide()
export class BaseCommodityTechniqueServer {

  @InjectEntityModel(CommodityTechniqueEntity)
  CommodityTechniqueEntity: Repository<CommodityTechniqueEntity>;

  async BaseCreate(payload) {
    return await this.CommodityTechniqueEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityTechniqueEntity)
      .values({
        commodityName: payload.commodityName,
        techniqueName: payload.techniqueName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityTechniqueEntity
      .createQueryBuilder('technique')
      .where('technique.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('technique.techniqueName = :techniqueName', { techniqueName: payload.techniqueName })
      .getOne();
  }


  async BaseRelationSet(payload) {
    await this.CommodityTechniqueEntity
      .createQueryBuilder()
      .relation(CommodityTechniqueEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

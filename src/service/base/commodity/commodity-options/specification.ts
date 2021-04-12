import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommoditySpecificationEntity } from 'src/entity/commodity/commodity-options/specification'


@Provide()
export class BaseCommoditySpecificationServer {

  @InjectEntityModel(CommoditySpecificationEntity)
  CommoditySpecificationEntity: Repository<CommoditySpecificationEntity>;

  async BaseCreate(payload) {
    return await this.CommoditySpecificationEntity
      .createQueryBuilder()
      .insert()
      .into(CommoditySpecificationEntity)
      .values({
        commodityName: payload.commodityName,
        specificationName: payload.specificationName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommoditySpecificationEntity
      .createQueryBuilder('specification')
      .where('specification.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('specification.specificationName = :specificationName', { specificationName: payload.specificationName })
      .getOne();
  }


  async BaseRelationSet(payload) {
    await this.CommoditySpecificationEntity
      .createQueryBuilder()
      .relation(CommoditySpecificationEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

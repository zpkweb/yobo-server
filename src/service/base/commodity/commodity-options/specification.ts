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
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommoditySpecificationEntity
      .createQueryBuilder('specification')
      .leftJoinAndSelect('specification.commoditys', 'commoditys')
      .leftJoinAndSelect('specification.options', 'options')
      .where('specification.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommoditySpecificationEntity
      .createQueryBuilder('specification')
      .leftJoinAndSelect('specification.commoditys', 'commoditys')
      .leftJoinAndSelect('specification.options', 'options')
      .where('specification.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('specification.optionId = :optionId', { optionId: payload.optionId })
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

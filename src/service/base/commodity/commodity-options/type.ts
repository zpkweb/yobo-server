import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityTypeEntity } from 'src/entity/commodity/commodity-options/type'


@Provide()
export class BaseCommodityTypeService {

  @InjectEntityModel(CommodityTypeEntity)
  CommodityTypeEntity: Repository<CommodityTypeEntity>;

  async BaseCreate(payload) {
    return await this.CommodityTypeEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityTypeEntity)
      .values({
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityTypeEntity
      .createQueryBuilder('type')
      // .leftJoinAndSelect('type.commoditys', 'commoditys')
      .innerJoinAndSelect('type.options', 'options')
      .where('type.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityTypeEntity
      .createQueryBuilder('type')
      // .leftJoinAndSelect('type.commoditys', 'commoditys')
      .innerJoinAndSelect('type.options', 'options')
      .where('type.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('type.optionId = :optionId', { optionId: payload.optionId })
      .getOne();
  }

  async BaseRelationSet(payload) {
    await this.CommodityTypeEntity
      .createQueryBuilder()
      .relation(CommodityTypeEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

  async BaseSearch(payload) {
    return await this.CommodityTypeEntity
    .createQueryBuilder('search')
    // .innerJoinAndSelect('search.commoditys', 'commoditys')
    .where('search.optionsId IN (:...searchs)', { searchs: payload })
    .getMany();
  }


}

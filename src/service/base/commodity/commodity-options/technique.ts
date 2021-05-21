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
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityTechniqueEntity
      .createQueryBuilder('technique')
      // .leftJoinAndSelect('technique.commoditys', 'commoditys')
      .innerJoinAndSelect('technique.options', 'options')
      .where('technique.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityTechniqueEntity
      .createQueryBuilder('technique')
      // .leftJoinAndSelect('technique.commoditys', 'commoditys')
      .innerJoinAndSelect('technique.options', 'options')
      .where('technique.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('technique.optionId = :optionId', { optionId: payload.optionId })
      .getOne();
  }

  async BaseRelationSet(payload) {
    await this.CommodityTechniqueEntity
      .createQueryBuilder()
      .relation(CommodityTechniqueEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


  async BaseSearch(payload) {
    return await this.CommodityTechniqueEntity
    .createQueryBuilder('search')
    // .innerJoinAndSelect('search.commoditys', 'commoditys')
    .where('search.optionsId IN (:...searchs)', { searchs: payload })
    .getMany();
  }


}

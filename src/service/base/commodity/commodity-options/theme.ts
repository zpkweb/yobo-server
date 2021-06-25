import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityThemeEntity } from 'src/entity/commodity/commodity-options/theme'


@Provide()
export class BaseCommodityThemeService {

  @InjectEntityModel(CommodityThemeEntity)
  CommodityThemeEntity: Repository<CommodityThemeEntity>;

  async BaseCreate(payload) {
    return await this.CommodityThemeEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityThemeEntity)
      .values({
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityThemeEntity
      .createQueryBuilder('theme')
      // .leftJoinAndSelect('theme.commoditys', 'commoditys')
      .innerJoinAndSelect('theme.options', 'options')
      .where('theme.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityThemeEntity
      .createQueryBuilder('theme')
      // .leftJoinAndSelect('theme.commoditys', 'commoditys')
      .innerJoinAndSelect('theme.options', 'options')
      .where('theme.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('theme.optionId = :optionId', { optionId: payload.optionId })
      .getOne();
  }

  async BaseRelationSet(payload) {
    await this.CommodityThemeEntity
      .createQueryBuilder()
      .relation(CommodityThemeEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }

  async BaseSearch(payload) {
    return await this.CommodityThemeEntity
    .createQueryBuilder('search')
    // .innerJoinAndSelect('search.commoditys', 'commoditys')
    .where('search.optionsId IN (:...searchs)', { searchs: payload })
    .getMany();
  }


}

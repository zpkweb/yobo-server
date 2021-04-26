import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityCategoryEntity } from 'src/entity/commodity/commodity-options/category'


@Provide()
export class BaseCommodityCategoryServer {

  @InjectEntityModel(CommodityCategoryEntity)
  commodityCategoryEntity: Repository<CommodityCategoryEntity>;

  async BaseCreate(payload) {
    return await this.commodityCategoryEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityCategoryEntity)
      .values({
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }

  async BaseRetrieveCommodityId(commodityId) {
    return await this.commodityCategoryEntity
      .createQueryBuilder('category')
      // .leftJoinAndSelect('category.commoditys', 'commoditys')
      .leftJoinAndSelect('category.options', 'options')
      .where('category.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.commodityCategoryEntity
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.commoditys', 'commoditys')
      .leftJoinAndSelect('category.options', 'options')
      .where('category.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('category.optionId = :optionId', { optionId: payload.optionId })
      .getOne();
  }



  async BaseRelationSet(payload) {
    await this.commodityCategoryEntity
      .createQueryBuilder()
      .relation(CommodityCategoryEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }
}

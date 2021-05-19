import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityStyleEntity } from 'src/entity/commodity/commodity-options/style'


@Provide()
export class BaseCommodityStyleServer {

  @InjectEntityModel(CommodityStyleEntity)
  CommodityStyleEntity: Repository<CommodityStyleEntity>;

  async BaseCreate(payload) {
    return await this.CommodityStyleEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityStyleEntity)
      .values({
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityStyleEntity
      .createQueryBuilder('style')
      // .leftJoinAndSelect('style.commoditys', 'commoditys')
      .innerJoinAndSelect('style.options', 'options')
      .where('style.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityStyleEntity
      .createQueryBuilder('style')
      // .leftJoinAndSelect('style.commoditys', 'commoditys')
      .innerJoinAndSelect('style.options', 'options')
      .where('style.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('style.optionId = :optionId', { optionId: payload.optionId })
      .getOne();
  }

  async BaseRelationSet(payload) {
    await this.CommodityStyleEntity
      .createQueryBuilder()
      .relation(CommodityStyleEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

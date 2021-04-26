import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityPlaceEntity } from 'src/entity/commodity/commodity-options/place'


@Provide()
export class BaseCommodityPlaceServer {

  @InjectEntityModel(CommodityPlaceEntity)
  CommodityPlaceEntity: Repository<CommodityPlaceEntity>;

  async BaseCreate(payload) {
    return await this.CommodityPlaceEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityPlaceEntity)
      .values({
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityPlaceEntity
      .createQueryBuilder('place')
      // .leftJoinAndSelect('place.commoditys', 'commoditys')
      .leftJoinAndSelect('place.options', 'options')
      .where('place.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityPlaceEntity
      .createQueryBuilder('place')
      .leftJoinAndSelect('place.commoditys', 'commoditys')
      .leftJoinAndSelect('place.options', 'options')
      .where('place.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('place.optionId = :optionId', { optionId: payload.optionId })
      .getOne();
  }

  async BaseRelationSet(payload) {
    await this.CommodityPlaceEntity
      .createQueryBuilder()
      .relation(CommodityPlaceEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

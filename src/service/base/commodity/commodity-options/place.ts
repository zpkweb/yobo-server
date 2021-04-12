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
        commodityName: payload.commodityName,
        placeName: payload.placeName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityPlaceEntity
      .createQueryBuilder('place')
      .where('place.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('place.placeName = :placeName', { placeName: payload.placeName })
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

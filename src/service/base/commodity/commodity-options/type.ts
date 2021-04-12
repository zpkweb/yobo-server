import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityTypeEntity } from 'src/entity/commodity/commodity-options/type'


@Provide()
export class BaseCommodityTypeServer {

  @InjectEntityModel(CommodityTypeEntity)
  CommodityTypeEntity: Repository<CommodityTypeEntity>;

  async BaseCreate(payload) {
    return await this.CommodityTypeEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityTypeEntity)
      .values({
        commodityName: payload.commodityName,
        typeName: payload.typeName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityTypeEntity
      .createQueryBuilder('type')
      .where('type.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('type.typeName = :typeName', { typeName: payload.typeName })
      .getOne();
  }


  async BaseRelationSet(payload) {
    await this.CommodityTypeEntity
      .createQueryBuilder()
      .relation(CommodityTypeEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

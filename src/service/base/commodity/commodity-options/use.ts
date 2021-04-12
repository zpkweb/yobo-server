import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityUseEntity } from 'src/entity/commodity/commodity-options/use'


@Provide()
export class BaseCommodityUseServer {

  @InjectEntityModel(CommodityUseEntity)
  CommodityUseEntity: Repository<CommodityUseEntity>;

  async BaseCreate(payload) {
    return await this.CommodityUseEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityUseEntity)
      .values({
        commodityName: payload.commodityName,
        useName: payload.useName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityUseEntity
      .createQueryBuilder('use')
      .where('use.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('use.useName = :useName', { useName: payload.useName })
      .getOne();
  }


  async BaseRelationSet(payload) {
    await this.CommodityUseEntity
      .createQueryBuilder()
      .relation(CommodityUseEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

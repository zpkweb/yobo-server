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
        commodityName: payload.commodityName,
        styleName: payload.styleName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityStyleEntity
      .createQueryBuilder('style')
      .where('style.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('style.styleName = :styleName', { styleName: payload.styleName })
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

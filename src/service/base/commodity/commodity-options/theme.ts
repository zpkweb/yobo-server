import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityThemeEntity } from 'src/entity/commodity/commodity-options/theme'


@Provide()
export class BaseCommodityThemeServer {

  @InjectEntityModel(CommodityThemeEntity)
  CommodityThemeEntity: Repository<CommodityThemeEntity>;

  async BaseCreate(payload) {
    return await this.CommodityThemeEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityThemeEntity)
      .values({
        commodityName: payload.commodityName,
        themeName: payload.themeName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityThemeEntity
      .createQueryBuilder('theme')
      .where('theme.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('theme.themeName = :themeName', { themeName: payload.themeName })
      .getOne();
  }


  async BaseRelationSet(payload) {
    await this.CommodityThemeEntity
      .createQueryBuilder()
      .relation(CommodityThemeEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

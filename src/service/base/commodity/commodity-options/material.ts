import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityMaterialEntity } from 'src/entity/commodity/commodity-options/material'


@Provide()
export class BaseCommodityMaterialServer {

  @InjectEntityModel(CommodityMaterialEntity)
  CommodityMaterialEntity: Repository<CommodityMaterialEntity>;

  async BaseCreate(payload) {
    return await this.CommodityMaterialEntity
      .createQueryBuilder()
      .insert()
      .into(CommodityMaterialEntity)
      .values({
        commodityName: payload.commodityName,
        materialName: payload.materialName,
      })
      .execute();
  }

  async BaseRetrieve(payload) {
    return await this.CommodityMaterialEntity
      .createQueryBuilder('material')
      .where('material.commodityName = :commodityName', { commodityName: payload.commodityName })
      .orWhere('material.materialName = :materialName', { materialName: payload.materialName })
      .getOne();
  }


  async BaseRelationSet(payload) {
    await this.CommodityMaterialEntity
      .createQueryBuilder()
      .relation(CommodityMaterialEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }


}

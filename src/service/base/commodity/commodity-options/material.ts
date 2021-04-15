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
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityMaterialEntity
      .createQueryBuilder('material')
      .leftJoinAndSelect('material.commoditys', 'commoditys')
      .leftJoinAndSelect('material.options', 'options')
      .where('material.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityMaterialEntity
      .createQueryBuilder('material')
      .leftJoinAndSelect('material.commoditys', 'commoditys')
      .leftJoinAndSelect('material.options', 'options')
      .where('material.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('material.optionId = :optionId', { optionId: payload.optionId })
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

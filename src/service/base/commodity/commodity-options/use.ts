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
        commodityId: payload.commodityId,
        optionId: payload.optionId,
      })
      .execute();
  }


  async BaseRetrieveCommodityId(commodityId) {
    return await this.CommodityUseEntity
      .createQueryBuilder('use')
      .leftJoinAndSelect('use.commoditys', 'commoditys')
      .leftJoinAndSelect('use.options', 'options')
      .where('use.commodityId = :commodityId', { commodityId: commodityId })
      .getMany();
  }

  async BaseRetrieveID(payload) {
    return await this.CommodityUseEntity
      .createQueryBuilder('use')
      .leftJoinAndSelect('use.commoditys', 'commoditys')
      .leftJoinAndSelect('use.options', 'options')
      .where('use.commodityId = :commodityId', { commodityId: payload.commodityId })
      .andWhere('use.optionId = :optionId', { optionId: payload.optionId })
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

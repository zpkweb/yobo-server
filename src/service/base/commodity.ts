import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { CommodityEntity } from 'src/entity/commodity/commodity';
import { CommodityShapeEntity } from 'src/entity/commodity/attribute/shape';

@Provide()
export class BaseCommodityServer {

  @InjectEntityModel(CommodityEntity)
  commodityEntity: Repository<CommodityEntity>;

  @InjectEntityModel(CommodityShapeEntity)
  commodityShapeEntity: Repository<CommodityShapeEntity>;

   /**
   * 创建商品
   */
    async BaseCommodityCreate(payload) {
      return await this.commodityEntity
        .createQueryBuilder()
        .insert()
        .into(CommodityEntity)
        .values({
          name: payload.name,
          state: payload.state,
        })
        .execute();
    }

  /**
   * 创建商品选项的形状
   */
    async BaseCommodityShapeCreate(payload) {
      return await this.commodityShapeEntity
        .createQueryBuilder()
        .insert()
        .into(CommodityShapeEntity)
        .values({
          name: payload.name,
          lang: payload.lang,
        })
        .execute();
    }
}

/**
 * 商品包装大小
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { CommodityPackingEntity } from './commodity_packing';

@EntityModel('commodity_packing_size')
export class CommodityPackingSizeEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 名称
  @Column()
  name: string;

  // 价格
  @Column()
  price: number;

  // 关联包装
  @ManyToOne(type => CommodityPackingEntity, CommodityPackingEntity => CommodityPackingEntity.materials)
  commodityPacking: CommodityPackingEntity;

}

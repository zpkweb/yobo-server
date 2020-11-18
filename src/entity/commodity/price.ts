/**
 * 商品价格
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommodityEntity } from './commodity';

@EntityModel('commodity_price')
export class CommodityPriceEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 语言
  @Column()
  lang: string;

  // 价格
  @Column()
  value: string;

  // 关联商品
  @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.prices)
  commodity: CommodityEntity;


}

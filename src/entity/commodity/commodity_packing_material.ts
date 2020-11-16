/**
 * 商品包装材质
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommodityPackingEntity } from './commodity_packing';

 @EntityModel('commodity_packing_material')
 export class CommodityPackingMaterialEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 名称
  @Column()
  name: string;

  // 价格
  @Column()
  price: number;

  // 图片
  @Column()
  photo: string;

  // 关联包装
  @ManyToOne(type => CommodityPackingEntity, CommodityPackingEntity => CommodityPackingEntity.materials)
  commodityPacking: CommodityPackingEntity;

 }

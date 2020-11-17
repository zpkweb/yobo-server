/**
 * 商品包装
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommodityPackingMaterialEntity } from './packing/material';
import { CommodityPackingSizeEntity } from './packing/size';

 @EntityModel('commodity_packing')
 export class CommodityPackingEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 名称
  @Column()
  name: string;

  // 关联材质
  @OneToMany(type => CommodityPackingMaterialEntity, CommodityPackingMaterialEntity => CommodityPackingMaterialEntity.commodityPacking)
  materials: CommodityPackingMaterialEntity;

  // 关联尺寸
  @OneToMany(type => CommodityPackingSizeEntity, CommodityPackingSizeEntity => CommodityPackingSizeEntity.commodityPacking)
  sizes: CommodityPackingSizeEntity;



 }

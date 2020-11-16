/**
 * 商品包装
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { CommodityPackingMaterialEntity } from './commodity_packing_material';
import { CommodityPackingSizeEntity } from './commodity_packing_size';
import { CommodityEntity } from './commodity';

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

  // 关联商品
  @OneToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.commodityPacking)
  commodity: CommodityEntity;

 }

/**
 * 商品包装
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CommodityPackingLangEntity } from './packing/lang';

 @EntityModel('commodity_packing')
 export class CommodityPackingEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 名称
  @Column()
  name: string;

  // 关联材质
  @OneToMany(type => CommodityPackingLangEntity, CommodityPackingLangEntity => CommodityPackingLangEntity.packing)
  lang: CommodityPackingLangEntity;

 }

/**
 * 商品包装材质
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommodityPackingEntity } from '../packing';
import { CommodityPackingLangMetadataEntity } from './lang/metadata';

 @EntityModel('commodity_packing_lang')
 export class CommodityPackingLangEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 语言
  @Column()
  lang: string;

  // 图片
  @Column()
  photo: string;

  // 数量
  @Column()
  number: number;

  // 关联包装
  @ManyToOne(type => CommodityPackingEntity, CommodityPackingEntity => CommodityPackingEntity.lang)
  packing: CommodityPackingEntity;

  // 关联多语言商品信息
  @OneToOne(type => CommodityPackingLangMetadataEntity, CommodityPackingLangMetadataEntity => CommodityPackingLangMetadataEntity.lang)
  metadata: CommodityPackingLangMetadataEntity;

 }

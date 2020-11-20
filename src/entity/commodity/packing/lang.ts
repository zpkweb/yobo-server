/**
 * 商品包装材质
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToMany } from "typeorm";
import { CommodityPackingEntity } from './packing';
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

  //  创建日期
  @CreateDateColumn({
    select: false
  })
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn({
    select: false
  })
  updatedDate: Date;

  // 关联包装
  @ManyToOne(type => CommodityPackingEntity, CommodityPackingEntity => CommodityPackingEntity.lang, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'packingId'
  })
  packing: CommodityPackingEntity;

  // 关联多语言商品信息
  @OneToMany(type => CommodityPackingLangMetadataEntity, CommodityPackingLangMetadataEntity => CommodityPackingLangMetadataEntity.lang)
  metadata: CommodityPackingLangMetadataEntity[];

 }

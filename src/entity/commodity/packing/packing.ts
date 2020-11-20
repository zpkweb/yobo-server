/**
 * 商品包装
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityPackingLangEntity } from './lang';

 @EntityModel('commodity_packing')
 export class CommodityPackingEntity {

  // 自增主键
  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number;

  // id
  @Column({
    unique: true
  })
  @Generated('uuid')
  packingId: string;

  // 名称
  @Column()
  name: string;

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

  // 关联材质
  @OneToMany(type => CommodityPackingLangEntity, CommodityPackingLangEntity => CommodityPackingLangEntity.packing)
  lang: CommodityPackingLangEntity[];

 }

/**
 * 商品手法
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityTechniqueEntity } from '../commodity-options/technique';

@EntityModel('commodity_options_technique')
export class CommodityOptionsTechniqueEntity {

  // 商品手法 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // 图片
  @Column()
  img: string;

  // 语言
  @Column({
    nullable: true
  })
  'zh-cn': string;

  @Column({
    nullable: true
  })
  'en-us': string;

  @Column({
    nullable: true
  })
  'ja-jp': string;

  @Column({
    nullable: true
  })
  'fr-fr': string;

  @Column({
    nullable: true
  })
  'es-es': string;

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

  // 关联商品选项
  @ManyToMany(type => CommodityTechniqueEntity, CommodityTechniqueEntity => CommodityTechniqueEntity.techniques, {
    cascade: true
  })
  commoditys: CommodityTechniqueEntity;

}

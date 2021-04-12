/**
 * 商品用途
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityUseEntity } from '../commodity-options/use';

@EntityModel('commodity_options_use')
export class CommodityOptionsUseEntity {

  // 商品 id
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

  // // 关联商品选项
  @ManyToMany(type => CommodityUseEntity, CommodityUseEntity => CommodityUseEntity.uses, {
    cascade: true
  })
  commoditys: CommodityUseEntity;

}

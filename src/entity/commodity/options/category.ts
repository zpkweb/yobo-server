/**
 * 商品类别
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { CommodityCategoryEntity } from '../commodity-options/category';

@EntityModel('commodity_options_category')
export class CommodityOptionsCategoryEntity {

  // 商品类别 id
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

  @OneToMany(type => CommodityCategoryEntity, CommodityCategoryEntity => CommodityCategoryEntity.options, {
    cascade: true,
  })
  commoditys: CommodityCategoryEntity[];

}

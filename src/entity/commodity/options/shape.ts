/**
 * 商品形状
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from "typeorm";
import { CommodityShapeEntity } from '../commodity-options/shape';

@EntityModel('commodity_options_shape')
export class CommodityOptionsShapeEntity {

  // 商品形状 id
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

  // 关联商品
  @ManyToMany(type => CommodityShapeEntity, CommodityShapeEntity => CommodityShapeEntity.options, {
    cascade: true
  })

  commoditys: CommodityShapeEntity;

}

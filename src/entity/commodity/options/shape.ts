/**
 * 商品形状
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityEntity } from '../commodity';

@EntityModel('commodity_options_shape')
export class CommodityOptionsShapeEntity {

  // 商品形状 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // lang: ['zh-cn', 'en-us', 'ja-jp', 'fr-fr'],
  // 汉语
  @Column()
  'zh-cn': string;

  @Column()
  'en-us': string;

  @Column()
  'ja-jp': string;

  @Column()
  'fr-fr': string;

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
  @OneToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.shape, {
    cascade: true,
    onDelete: 'SET NULL'
  })
  commodity: CommodityEntity;

}

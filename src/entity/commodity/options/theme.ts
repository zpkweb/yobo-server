/**
 * 商品主题
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityEntity } from '../commodity';

@EntityModel('commodity_options_theme')
export class CommodityOptionsThemeEntity {

  // 商品形状 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // 语言
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

  // 关联商品选项
  @OneToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.theme, {
    cascade: true,
    onDelete: 'SET NULL'
  })
  commodity: CommodityEntity;

}

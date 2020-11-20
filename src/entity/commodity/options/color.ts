/**
 * 商品颜色
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityOptionsEntity } from '../options';
import { CommodityOptionsLangEntity } from './lang';

@EntityModel('commodity_options_color')
export class CommodityOptionsColorEntity {

  // 商品形状 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

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

  // 关联商品选项
  @ManyToOne(type => CommodityOptionsEntity, CommodityOptionsEntity => CommodityOptionsEntity.colors, {
    cascade: true
  })
  options: CommodityOptionsEntity;

  // 关联商品选项多语言
  @OneToOne(type => CommodityOptionsLangEntity, CommodityOptionsLangEntity => CommodityOptionsLangEntity.colors)
  lang: CommodityOptionsLangEntity;

}

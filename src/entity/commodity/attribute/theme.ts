/**
 * 商品主题
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { CommodityEntity } from '../commodity';

@EntityModel('commodity_theme')
export class CommodityThemeEntity {

  // 商品形状 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // 语言
  @Column()
  lang: string;

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
  @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.theme, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'commodityId'
  })
  commodity: CommodityEntity;

}

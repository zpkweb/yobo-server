/**
 * 商品设置选项
 */

import { EntityModel } from "@midwayjs/orm";
import { OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityOptionsShapeEntity } from './options/shape';
import { CommodityOptionsColorEntity } from './options/color';
import { CommodityOptionsThemeEntity } from './options/theme';
import { CommodityOptionsCategoryEntity } from './options/category';
import { CommodityOptionsTechniqueEntity } from './options/technique';

@EntityModel('commodity_options')
export class CommodityOptionsEntity {

  // 商品形状 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

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

  // 关联商品形状
  @OneToMany(type => CommodityOptionsShapeEntity, CommodityOptionsShapeEntity => CommodityOptionsShapeEntity.options)
  shapes: CommodityOptionsShapeEntity[];

  // 关联商品颜色
  @OneToMany(type => CommodityOptionsColorEntity, CommodityOptionsColorEntity => CommodityOptionsColorEntity.options)
  colors: CommodityOptionsColorEntity[];

  // 关联商品主题
  @OneToMany(type => CommodityOptionsThemeEntity, CommodityOptionsThemeEntity => CommodityOptionsThemeEntity.options)
  themes: CommodityOptionsThemeEntity[];

  // 关联商品类别
  @OneToMany(type => CommodityOptionsCategoryEntity, CommodityOptionsCategoryEntity => CommodityOptionsCategoryEntity.options)
  categorys: CommodityOptionsCategoryEntity[];

  // 关联商品手法
  @OneToMany(type => CommodityOptionsTechniqueEntity, CommodityOptionsTechniqueEntity => CommodityOptionsTechniqueEntity.options)
  techniques: CommodityOptionsTechniqueEntity[];





}

/**
 * 商品多语言
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityOptionsLangMetadataEntity } from './lang/metadata';
import { CommodityOptionsCategoryEntity } from './category';
import { CommodityOptionsColorEntity } from './color';
import { CommodityOptionsShapeEntity } from './shape';
import { CommodityOptionsTechniqueEntity } from './technique';
import { CommodityOptionsThemeEntity } from './theme';

@EntityModel('commodity_options_lang')
export class CommodityOptionsLangEntity {

  //  商品多语言 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // 语言
  @Column()
  lang: string;

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

  // 关联商品选项多语言
  @OneToOne(type => CommodityOptionsLangMetadataEntity, CommodityOptionsLangMetadataEntity => CommodityOptionsLangMetadataEntity.lang)
  metadata: CommodityOptionsLangMetadataEntity;

  // 关联商品选项类别
  @ManyToOne(type => CommodityOptionsCategoryEntity, CommodityOptionsCategoryEntity => CommodityOptionsCategoryEntity.lang, {
    cascade: true
  })
  categorys: CommodityOptionsCategoryEntity;

  // 关联商品选项颜色
  @ManyToOne(type => CommodityOptionsColorEntity, CommodityOptionsColorEntity => CommodityOptionsColorEntity.lang, {
    cascade: true
  })
  colors: CommodityOptionsColorEntity;

  // 关联商品选项形状
  @ManyToOne(type => CommodityOptionsShapeEntity, CommodityOptionsShapeEntity => CommodityOptionsShapeEntity.lang, {
    cascade: true
  })
  shapes: CommodityOptionsShapeEntity;

  // 关联商品选项手法
  @ManyToOne(type => CommodityOptionsTechniqueEntity, CommodityOptionsTechniqueEntity => CommodityOptionsTechniqueEntity.lang, {
    cascade: true
  })
  techniques: CommodityOptionsTechniqueEntity;

  // 关联商品选项主题
  @ManyToOne(type => CommodityOptionsThemeEntity, CommodityOptionsThemeEntity => CommodityOptionsThemeEntity.lang, {
    cascade: true
  })
  themes: CommodityOptionsThemeEntity;

}

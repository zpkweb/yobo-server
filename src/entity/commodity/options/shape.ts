/**
 * 商品形状
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToOne, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommodityOptionsEntity } from '../options';
import { CommodityOptionsLangEntity } from './lang';

@EntityModel('commodity_options_shape')
export class CommodityOptionsShapeEntity {

  // 商品形状 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // 名称
  @Column()
  name: string;

  // 关联商品选项
  @ManyToOne(type => CommodityOptionsEntity, CommodityOptionsEntity => CommodityOptionsEntity.shapes)
  options: CommodityOptionsEntity;

  // 关联商品选项多语言
  @OneToOne(type => CommodityOptionsLangEntity, CommodityOptionsLangEntity => CommodityOptionsLangEntity.shapes)
  lang: CommodityOptionsLangEntity;

}

/**
 * 商品选项多语言
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommodityOptionsLangEntity } from '../lang';

@EntityModel('commodity_options_lang_metadata')
export class CommodityOptionsLangMetadataEntity {

  // 商品形状 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // 名称
  @Column()
  name: string;

  // 关联商品选项
  @ManyToOne(type => CommodityOptionsLangEntity, CommodityOptionsLangEntity => CommodityOptionsLangEntity.metadata)
  lang: CommodityOptionsLangEntity;


}

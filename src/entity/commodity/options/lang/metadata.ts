/**
 * 商品选项多语言
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityOptionsLangEntity } from '../lang';

@EntityModel('commodity_options_lang_metadata')
export class CommodityOptionsLangMetadataEntity {

  // 商品形状 id
  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
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
  @ManyToOne(type => CommodityOptionsLangEntity, CommodityOptionsLangEntity => CommodityOptionsLangEntity.metadata, {
    cascade: true
  })
  lang: CommodityOptionsLangEntity;


}

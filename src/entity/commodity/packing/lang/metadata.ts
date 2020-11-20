/**
 * 商品选项多语言
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityPackingLangEntity } from '../lang';

@EntityModel('commodity_packing_lang_matedata')
export class CommodityPackingLangMetadataEntity {

  // 商品形状 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // 名称
  @Column()
  name: string;

  // 大小
  @Column()
  size: string;

  // 价格
  @Column()
  price: number;

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
  @ManyToOne(type => CommodityPackingLangEntity, CommodityPackingLangEntity => CommodityPackingLangEntity.metadata, {
    cascade: true
  })
  lang: CommodityPackingLangEntity;


}

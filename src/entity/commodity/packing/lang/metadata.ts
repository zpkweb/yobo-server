/**
 * 商品选项多语言
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

  // 关联商品选项
  @ManyToOne(type => CommodityPackingLangEntity, CommodityPackingLangEntity => CommodityPackingLangEntity.metadata)
  lang: CommodityPackingLangEntity;


}

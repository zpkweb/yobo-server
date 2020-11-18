/**
 * 商品多语言
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommodityEntity } from './commodity';
import { CommodityLangMetadataEntity } from './lang/metadata';

@EntityModel('commodity_lang')
export class CommodityLangEntity {

  //  商品多语言 id
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // 语言
  @Column()
  lang: string;

  // 关联多语言商品信息
  @OneToOne(type => CommodityLangMetadataEntity, CommodityLangMetadataEntity => CommodityLangMetadataEntity.lang)
  metadata: CommodityLangMetadataEntity;

  // 关联商品
  @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.CommodityLangs)
  commodity: CommodityEntity;

}

/**
 * 商品多语言
 */

import { EntityModel } from "@midwayjs/orm";
import { Column,  OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
// import { CommodityEntity } from './commodity';
import { CommodityLangMetadataEntity } from './lang/metadata';

@EntityModel('commodity_lang')
export class CommodityLangEntity {

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

  // 关联多语言商品信息
  @OneToOne(type => CommodityLangMetadataEntity, CommodityLangMetadataEntity => CommodityLangMetadataEntity.lang, {
    cascade: true
  })
  @JoinColumn()
  metadata: CommodityLangMetadataEntity;

  // 关联商品
  // @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.CommodityLangs, {
  //   cascade: true
  // })
  // @JoinColumn({
  //   referencedColumnName: 'commodityId'
  // })
  // commodity: CommodityEntity;

}

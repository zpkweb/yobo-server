/**
 * 商品多语言
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityLangEntity } from '../lang';

@EntityModel('commodity_lang_metadata')
export class CommodityLangMetadataEntity {

  // id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // 名称
  @Column()
  name: string;

  // 形状
  @Column()
  shape: string;

  // 价格
  @Column()
  price: string;

  // 颜色
  @Column()
  color: string;

  // 主题
  @Column()
  theme: string;

  // 类别
  @Column()
  category: string;

  // 手法
  @Column()
  technique: string;

  // 发货时间
  @Column()
  deliveryTime: number;

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

  @OneToOne(type => CommodityLangEntity, CommodityLangEntity => CommodityLangEntity.metadata)
  lang: CommodityLangEntity;

}

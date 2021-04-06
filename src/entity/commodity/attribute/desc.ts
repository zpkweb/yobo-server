/**
 * 商品描述
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { CommodityEntity } from '../commodity';

@EntityModel('commodity_desc')
export class CommodityDescEntity {

  // 商品描述 id
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // 语言
  @Column({
    type: "text"
  })
  'zh-cn': string;

  @Column({
    type: "text"
  })
  'en-us': string;

  @Column({
    type: "text"
  })
  'ja-jp': string;

  @Column({
    nullable: true,
    type: "text"
  })
  'fr-fr': string;

  @Column({
    type: "text"
  })
  'es-es': string;

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

  @OneToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.desc, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'commodityId',
    referencedColumnName: 'commodityId'
  })
  commodity: CommodityEntity;

}

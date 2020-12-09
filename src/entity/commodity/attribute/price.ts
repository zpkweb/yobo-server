/**
 * 商品价格
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { CommodityEntity } from '../commodity';

@EntityModel('commodity_price')
export class CommodityPriceEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 语言
  @Column()
  lang: string;

  // 价格
  @Column()
  value: string;

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

  // 关联商品
  @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.price, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'commodityId'
  })
  commodity: CommodityEntity;


}

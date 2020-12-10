/**
 * 商品价格
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { CommodityEntity } from '../commodity';

@EntityModel('commodity_price')
export class CommodityPriceEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 语言
  @Column()
  'zh-cn': number;

  @Column()
  'en-us': number;

  @Column()
  'ja-jp': number;

  @Column()
  'fr-fr': number;

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
  @OneToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.price)
  commodity: CommodityEntity;


}

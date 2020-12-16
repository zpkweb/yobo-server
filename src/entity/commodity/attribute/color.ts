/**
 * 商品图片
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { CommodityEntity } from '../commodity';

@EntityModel('commodity_color')
export class CommodityColorEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 色值 16进制
  @Column()
  name: string;

  // 色值 10进制
  @Column()
  value: number;

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
  @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.colors, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'commodityId',
    referencedColumnName: 'commodityId'
  })
  commodity: CommodityEntity;

}

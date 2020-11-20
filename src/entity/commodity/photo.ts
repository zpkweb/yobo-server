/**
 * 商品图片
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { CommodityEntity } from './commodity';

@EntityModel('commodity_photo')
export class CommodityPhotoEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

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

  // 图片路径
  @Column()
  src: string;

  // 关联商品
  @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.photos,{
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'commodityId'
  })
  commodity: CommodityEntity;

}

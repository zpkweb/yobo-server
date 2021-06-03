/**
 * 图片
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { CommodityEntity } from '../commodity';

@EntityModel('commodity_photo')
export class CommodityPhotoEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 路径
  @Column()
  src: string;

  // 名称
  @Column()
  name: string;

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

  // 关联
  @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.photos, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'commodityId',
    referencedColumnName: 'commodityId'
  })
  commodity: CommodityEntity;

}

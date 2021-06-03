/**
 * 图片
 */

 import { EntityModel } from "@midwayjs/orm";
 import { Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
 import { CommodityEntity } from '../commodity';

 @EntityModel('commodity_video')
 export class CommodityVideoEntity {

   @PrimaryGeneratedColumn({ type: 'bigint' })
   id: number;

   // 视频
  @Column()
  video: string;

  @Column()
  ccId: string;

  @Column()
  siteId: string;

  @Column()
  videoPhoto: string;

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
   @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.videos, {
     onDelete: 'CASCADE'
   })
   @JoinColumn({
     name: 'commodityId',
     referencedColumnName: 'commodityId'
   })
   commodity: CommodityEntity;

 }

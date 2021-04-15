/**
 * 商品类别
 */

 import { EntityModel } from "@midwayjs/orm";
 import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
 import { CommodityOptionsClassificationEntity } from '../options/classification';
 import { CommodityEntity } from '../commodity';

 @EntityModel('commodity_classification')
 export class CommodityClassificationEntity {

   @PrimaryGeneratedColumn({type: 'bigint'})
   id: number;

   @Column()
   commodityId: string;

   @Column()
   optionId: string;

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


   @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.classifications, {
      onDelete: "CASCADE"
   })
   @JoinColumn({
    referencedColumnName: 'commodityId'
  })
   commoditys: CommodityEntity;

   @ManyToOne(type => CommodityOptionsClassificationEntity, CommodityOptionsClassificationEntity => CommodityOptionsClassificationEntity.commoditys, {
    onDelete: "CASCADE"
   })
   @JoinColumn({
    referencedColumnName: 'id'
  })
  options: CommodityOptionsClassificationEntity;

 }

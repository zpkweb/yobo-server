/**
 * 商品类别
 */

 import { EntityModel } from "@midwayjs/orm";
 import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
 import { CommodityOptionsRuiwuEntity } from '../options/ruiwu';
 import { CommodityEntity } from '../commodity';

 @EntityModel('commodity_ruiwu')
 export class CommodityRuiwuEntity {

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


   @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.ruiwus, {
      onDelete: "CASCADE"
   })
   @JoinColumn({
    referencedColumnName: 'commodityId'
  })
   commoditys: CommodityEntity;

   @ManyToOne(type => CommodityOptionsRuiwuEntity, CommodityOptionsRuiwuEntity => CommodityOptionsRuiwuEntity.commoditys, {
    onDelete: "CASCADE"
   })
   @JoinColumn({
    referencedColumnName: 'id'
  })
  options: CommodityOptionsRuiwuEntity;

 }

/**
 * 商品类别
 */

 import { EntityModel } from "@midwayjs/orm";
 import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
 import { CommodityOptionsUseEntity } from '../options/use';
 import { CommodityEntity } from '../commodity';

 @EntityModel('commodity_use')
 export class CommodityUseEntity {

   @PrimaryGeneratedColumn({type: 'bigint'})
   id: number;

   @Column()
   commodityName: string;

   @Column()
   useName: string;

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


   @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.uses, {
      onDelete: "CASCADE"
   })
   @JoinColumn({
    name: 'commodityId',
    referencedColumnName: 'commodityId'
  })
   commoditys: CommodityEntity;

   @ManyToOne(type => CommodityOptionsUseEntity, CommodityOptionsUseEntity => CommodityOptionsUseEntity.commoditys, {
    onDelete: "CASCADE"
   })
   @JoinColumn({
    name: 'useId',
    referencedColumnName: 'id'
  })
   uses: CommodityOptionsUseEntity;

 }

/**
 * 商品类别
 */

 import { EntityModel } from "@midwayjs/orm";
 import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
 import { CommodityOptionsTypeEntity } from '../options/type';
 import { CommodityEntity } from '../commodity';

 @EntityModel('commodity_type')
 export class CommodityTypeEntity {

   @PrimaryGeneratedColumn({type: 'bigint'})
   id: number;

   @Column()
   commodityName: string;

   @Column()
   typeName: string;

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


   @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.types, {
      onDelete: "CASCADE"
   })
   @JoinColumn({
    name: 'commodityId',
    referencedColumnName: 'commodityId'
  })
   commoditys: CommodityEntity;

   @ManyToOne(type => CommodityOptionsTypeEntity, CommodityOptionsTypeEntity => CommodityOptionsTypeEntity.commoditys, {
    onDelete: "CASCADE"
   })
   @JoinColumn({
    name: 'typeId',
    referencedColumnName: 'id'
  })
   types: CommodityOptionsTypeEntity;

 }

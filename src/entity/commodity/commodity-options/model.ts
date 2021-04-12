/**
 * 商品类别
 */

 import { EntityModel } from "@midwayjs/orm";
 import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
 import { CommodityOptionsModelEntity } from '../options/model';
 import { CommodityEntity } from '../commodity';

 @EntityModel('commodity_model')
 export class CommodityModelEntity {

   @PrimaryGeneratedColumn({type: 'bigint'})
   id: number;

   @Column()
   commodityName: string;

   @Column()
   modelName: string;

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


   @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.models, {
      onDelete: "CASCADE"
   })
   @JoinColumn({
    name: 'commodityId',
    referencedColumnName: 'commodityId'
  })
   commoditys: CommodityEntity;

   @ManyToOne(type => CommodityOptionsModelEntity, CommodityOptionsModelEntity => CommodityOptionsModelEntity.commoditys, {
    onDelete: "CASCADE"
   })
   @JoinColumn({
    name: 'modelId',
    referencedColumnName: 'id'
  })
   models: CommodityOptionsModelEntity;

 }

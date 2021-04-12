/**
 * 商品类别
 */

 import { EntityModel } from "@midwayjs/orm";
 import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
 import { CommodityOptionsSpecificationEntity } from '../options/specification';
 import { CommodityEntity } from '../commodity';

 @EntityModel('commodity_specification')
 export class CommoditySpecificationEntity {

   @PrimaryGeneratedColumn({type: 'bigint'})
   id: number;

   @Column()
   commodityName: string;

   @Column()
   specificationName: string;

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


   @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.specifications, {
      onDelete: "CASCADE"
   })
   @JoinColumn({
    name: 'commodityId',
    referencedColumnName: 'commodityId'
  })
   commoditys: CommodityEntity;

   @ManyToOne(type => CommodityOptionsSpecificationEntity, CommodityOptionsSpecificationEntity => CommodityOptionsSpecificationEntity.commoditys, {
    onDelete: "CASCADE"
   })
   @JoinColumn({
    name: 'specificationId',
    referencedColumnName: 'id'
  })
   specifications: CommodityOptionsSpecificationEntity;

 }

/**
 * 商品类别
 */

 import { EntityModel } from "@midwayjs/orm";
 import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
 import { CommodityOptionsStyleEntity } from '../options/style';
 import { CommodityEntity } from '../commodity';

 @EntityModel('commodity_style')
 export class CommodityStyleEntity {

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


   @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.styles, {
      onDelete: "CASCADE"
   })
   @JoinColumn({
    referencedColumnName: 'commodityId'
  })
   commoditys: CommodityEntity;

   @ManyToOne(type => CommodityOptionsStyleEntity, CommodityOptionsStyleEntity => CommodityOptionsStyleEntity.commoditys, {
    onDelete: "CASCADE"
   })
   @JoinColumn({
    referencedColumnName: 'id'
  })
  options: CommodityOptionsStyleEntity;

 }

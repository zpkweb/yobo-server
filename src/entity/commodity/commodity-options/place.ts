/**
 * 商品类别
 */

 import { EntityModel } from "@midwayjs/orm";
 import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
 import { CommodityOptionsPlaceEntity } from '../options/place';
 import { CommodityEntity } from '../commodity';

 @EntityModel('commodity_place')
 export class CommodityPlaceEntity {

   @PrimaryGeneratedColumn({type: 'bigint'})
   id: number;

   @Column()
   commodityName: string;

   @Column()
   placeName: string;

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


   @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.places, {
      onDelete: "CASCADE"
   })
   @JoinColumn({
    name: 'commodityId',
    referencedColumnName: 'commodityId'
  })
   commoditys: CommodityEntity;

   @ManyToOne(type => CommodityOptionsPlaceEntity, CommodityOptionsPlaceEntity => CommodityOptionsPlaceEntity.commoditys, {
    onDelete: "CASCADE"
   })
   @JoinColumn({
    name: 'placeId',
    referencedColumnName: 'id'
  })
   places: CommodityOptionsPlaceEntity;

 }

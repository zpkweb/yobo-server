/**
 * 商品图片
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { CommodityEntity } from './commodity';

@EntityModel('commodity_photo')
export class CommodityPhotoEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联商品
  @OneToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.photos)
  commodity: CommodityEntity;

  @Column()
  src: string;

}

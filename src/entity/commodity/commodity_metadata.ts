/**
 * 商品信息
 */
import { EntityModel } from "@midwayjs/orm";
import { Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CommodityEntity } from './commodity';

@EntityModel('commodity_metadata')
export class CommodityMetaDataEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联商品
  @OneToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.metadata)
  commodity: CommodityEntity;

  // 形状
  @Column()
  shape: string;

  // 颜色
  @Column()
  color: string;

  // 主题
  @Column()
  theme: string;

  // 类别
  @Column()
  category: string;

  //手法
  @Column()
  technique: string;

  // 最热
  @Column()
  hottest: string;

  //最新上传
  @Column()
  date: string;

  // 发货时间
  @Column()
  deliveryTime: number;


}

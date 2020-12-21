import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { CommodityEntity } from "./commodity";

@EntityModel('commodity_browsing_count')
export class CommodityBrowsingCountEntity {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  count: number;

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

  // 关联商品
  @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.browsingCount, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'commodityId',
    referencedColumnName: 'commodityId'
  })
  commodity: CommodityEntity;

}

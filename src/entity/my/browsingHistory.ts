/**
 * 我的浏览记录
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { CommodityEntity } from 'src/entity/commodity/commodity';

@EntityModel('my_browsingHistory')
export class MyBrowsingHistoryEntity {

  // 自增主键
  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number;


  @Column()
  userId: string;

  @Column()
  commodityId: string;

  // 浏览数
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

  // 关联用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.browsingHistory, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

  // 关联商品
  @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.browsingHistory, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    referencedColumnName: 'commodityId'
  })
  commodity: CommodityEntity;

}

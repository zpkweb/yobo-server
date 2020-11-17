/**
 * 我的浏览记录
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from '../user/user';
import { CommodityEntity } from '../commodity/commodity';

@EntityModel('my_browsingHistory')
export class MyBrowsingHistoryEntity {

  // 用户浏览记录 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  // 关联用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.browsingHistory)
  user: UserEntity;

  // 关联商品
  @OneToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.browsingHistory)
  commoditys: CommodityEntity;

}

/**
 * 我的活动
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserEntity } from '../user/user';
import { ActivityEntity } from '../activity/activity';

@EntityModel('my_activity')
export class MyActivityEntity {

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
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.myActivitys)
  user: UserEntity;

  // 关联优惠券
  @OneToOne(type => ActivityEntity, ActivityEntity => ActivityEntity.myActivity)
  @JoinColumn()
  activity: ActivityEntity;

}

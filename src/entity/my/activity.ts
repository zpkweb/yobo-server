/**
 * 我的活动
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, Generated, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { ActivityEntity } from 'src/entity/activity/activity';

@EntityModel('my_activity')
export class MyActivityEntity {

  // 自增主键
  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number;

  // id
  @Column({
    unique: true
  })
  @Generated('uuid')
  myActivityId: string;

  // 创建日期
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
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.myActivitys, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

  // 关联活动
  @ManyToOne(type => ActivityEntity, ActivityEntity => ActivityEntity.myActivity, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'activityId'
  })
  activity: ActivityEntity;

}

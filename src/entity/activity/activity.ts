/**
 * 活动
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, Generated, OneToMany } from 'typeorm';
import { MyActivityEntity } from 'src/entity/my/activity';

@EntityModel('activity')
export class ActivityEntity {

  // 自增主键
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // id
  @Column({
    unique: true
  })
  @Generated('uuid')
  activityId: string;

  // 活动名称
  @Column()
  name: string;

  // 活动状态
  @Column()
  status: string;

  // 活动时间
  @Column()
  time: string;

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

  // 关联我的活动
  @OneToMany(type => MyActivityEntity, MyActivityEntity => MyActivityEntity.activity)
  myActivity: MyActivityEntity[];

}

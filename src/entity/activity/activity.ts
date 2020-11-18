/**
 * 活动
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToOne } from 'typeorm';
import { MyActivityEntity } from '../my/activity';

@EntityModel('activity')
export class ActivityEntity {

  // 活动 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 活动名称
  @Column()
  name: string;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  // 关联我的活动
  @OneToOne(type => MyActivityEntity, MyActivityEntity => MyActivityEntity.activity)
  myActivity: MyActivityEntity;

}

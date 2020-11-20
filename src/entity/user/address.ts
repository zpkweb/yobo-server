/**
 * 用户地址
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserEntity } from './user';

@EntityModel('user_address')
export class UserAddressEntity {

  // 自增主键id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 城市
  @Column()
  city: string;

  // 详细地址
  @Column()
  address: string;

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
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.address, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

}

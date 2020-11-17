/**
 * 用户地址
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user';

@EntityModel('user_address')
export class UserAddressEntity {

  // 用户地址 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.address)
  user: UserEntity;

  // 城市
  @Column()
  city: string;

  // 详细地址
  @Column()
  address: string;

}

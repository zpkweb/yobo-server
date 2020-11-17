/**
 * 用户密码
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user';

@EntityModel('user_password')
export class UserPasswordEntity {

  // 用户密码 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.password)
  @JoinColumn()
  user: UserEntity;

  // 密码
  @Column()
  password: string;

}

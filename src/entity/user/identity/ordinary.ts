/**
 * 普通用户
 * 序号: 80
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../user';

@EntityModel('user_identity_ordinary')
export class UserIdentityOrdinaryEntity {

  // 普通用户 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.ordinary)
  @JoinColumn()
  user: UserEntity;

}

/**
 * 用户身份列表
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user';

@EntityModel('user_identity_list')
export class UserIdentityEntity {

  // 用户地址 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 身份名称
  @Column()
  name: string;

  // 身份序号
  @Column()
  index: number;

  @ManyToOne(type => UserEntity, UserEntity => UserEntity.identitys)
  user: UserEntity;
}

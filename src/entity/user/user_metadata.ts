/**
 * 用户信息
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user';

@EntityModel('user_metadata')
export class UserMetadataEntity {

  // 用户信息 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.metadata)
  @JoinColumn()
  user: UserEntity;

  // 密码
  @Column()
  password: string;

  // 身份证
  @Column()
  IDcards: number;


}

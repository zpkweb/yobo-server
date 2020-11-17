/**
 * 用户身份
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { UserEntity } from '../user';


@EntityModel('user_identity')
export class UserIdentityEntity {

  // 用户地址 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 级别名称
  @Column()
  name: string;

  // 级别序号
  @Column()
  index: number;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.identity)
  user: UserEntity;

}

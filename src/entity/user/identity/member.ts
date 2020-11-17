/**
 * 会员
 * 购买商品
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { UserEntity } from '../user';

@EntityModel('user_identity_member')
export class UserIdentityMemberEntity {

  // 会员 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 会员等级
  @Column()
  level: number;

  // 会员等级名称
  @Column()
  levelName:  string;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.member)
  @JoinColumn()
  user: UserEntity;

}

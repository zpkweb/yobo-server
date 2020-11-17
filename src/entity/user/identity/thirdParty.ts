/**
 * 第三方登录
 * 购买商品
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, OneToOne, JoinColumn, Column } from 'typeorm';
import { UserEntity } from '../user';

@EntityModel('user_identity_thirdParty')
export class UserIdentityThirdPartyEntity {

  // 第三方 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 来源
  @Column()
  source: string;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.thirdParty)
  @JoinColumn()
  user: UserEntity;

}

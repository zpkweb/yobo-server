/**
 * 买家
 * 购买商品
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user';

@EntityModel('user_buyer')
export class UserBuyerEntity {

  // 买家 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 是否第三方
  @Column()
  isThirdParty: string;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.buyer)
  @JoinColumn()
  user: UserEntity;

}

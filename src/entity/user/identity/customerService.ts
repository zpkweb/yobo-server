/**
 * 客服
 * 联系商家
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, OneToOne, ManyToMany, ManyToOne, JoinColumn, JoinTable } from 'typeorm';
import { UserEntity } from '../user';
import { UserIdentitySellerEntity } from './seller';
import { UserIdentityAdminEntity } from './admin';

@EntityModel('user_identity_customerService')
export class UserIdentityCustomerServiceEntity {

  // 客服 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.customerService)
  @JoinColumn()
  user: UserEntity;

  // 关联商家
  @ManyToMany(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.customerServices)
  @JoinTable()
  sellers: UserIdentitySellerEntity;

  // 关联管理员
  @ManyToOne(type => UserIdentityAdminEntity, UserIdentityAdminEntity => UserIdentityAdminEntity.customerService)
  admin: UserIdentityAdminEntity;


}

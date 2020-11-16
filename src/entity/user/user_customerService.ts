/**
 * 客服
 * 管理卖家，管理卖家的商品
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from './user';
import { UserSellerEntity } from './user_seller';
import { UserAdminEntity } from './user_admin';

@EntityModel('user_customerService')
export class UserCustomerServiceEntity {

  // 客服 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.customerService)
  @JoinColumn()
  user: UserEntity;

  // 关联卖家
  @OneToMany(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.customerService)
  seller: UserSellerEntity;

  // 关联管理员
  @ManyToOne(type => UserAdminEntity, UserAdminEntity => UserAdminEntity.customerService)
  admin: UserAdminEntity;


}

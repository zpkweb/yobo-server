/**
 * 管理员
 * 创建客服，给客服分配商家
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { UserEntity } from '../user';
import { UserIdentityCustomerServiceEntity } from './customerService';

@EntityModel('user_identity_admin')
export class UserIdentityAdminEntity {

  // 管理员 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.admin)
  @JoinColumn()
  user: UserEntity;

  // 关联客服
  @OneToMany(type => UserIdentityCustomerServiceEntity, UserIdentityCustomerServiceEntity => UserIdentityCustomerServiceEntity.admin)
  customerService: UserIdentityCustomerServiceEntity;

}

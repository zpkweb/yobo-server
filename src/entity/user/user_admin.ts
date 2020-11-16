/**
 * 管理员
 * 创建客服，给客服分配卖家
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { UserEntity } from './user';
import { UserCustomerServiceEntity } from './user_customerService';

@EntityModel('user_admin')
export class UserAdminEntity {

  // 管理员 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.admin)
  @JoinColumn()
  user: UserEntity;

  // 关联客服
  @OneToMany(type => UserCustomerServiceEntity, UserCustomerServiceEntity => UserCustomerServiceEntity.admin)
  customerService: UserCustomerServiceEntity;

}

/**
 * 管理员
 * 创建客服，给客服分配商家
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, Generated, OneToOne, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserCustomerServiceEntity } from 'src/entity/user/customerService/customerService';

@EntityModel('user_admin')
export class UserAdminEntity {

  // 自增主键
  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number;

  // id
  @Column({
    unique: true
  })
  @Generated('uuid')
  adminId: string;

  //  创建日期
  @CreateDateColumn({
    select: false
  })
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn({
    select: false
  })
  updatedDate: Date;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.admin, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

  // 关联客服
  @OneToMany(type => UserCustomerServiceEntity, UserCustomerServiceEntity => UserCustomerServiceEntity.admin)
  customerService: UserCustomerServiceEntity[];

}

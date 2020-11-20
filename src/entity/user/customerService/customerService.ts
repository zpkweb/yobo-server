/**
 * 客服
 * 联系商家
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, Generated, OneToOne, ManyToMany, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserIdentitySellerEntity } from 'src/entity/user/seller/seller';
import { UserIdentityAdminEntity } from 'src/entity/user/admin/admin';

@EntityModel('user_identity_customerService')
export class UserIdentityCustomerServiceEntity {

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
  costomerServiceId: string;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.customerService, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

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

  // 关联商家
  @ManyToMany(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.customerServices)
  sellers: UserIdentitySellerEntity[];

  // 关联管理员
  @ManyToOne(type => UserIdentityAdminEntity, UserIdentityAdminEntity => UserIdentityAdminEntity.customerService, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'adminId'
  })
  admin: UserIdentityAdminEntity;


}

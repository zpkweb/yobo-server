/**
 * 用户身份
 * 身份 ：0 root, 1 超级管理员 ，2 管理员，3 客服（技术），5 商家，70 会员，80 普通用户， 90 第三方用户
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, CreateDateColumn, UpdateDateColumn, OneToOne, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user';
import { UserIdentityListEntity } from 'src/entity/user/identity/list';
@EntityModel('user_identity')
export class UserIdentityEntity {

  // 用户身份 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 身份名称
  @Column()
  name: string;

  // 身份序号
  @Column()
  index: number;

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

  // 关联 用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.identitys)
  user: UserEntity;

  // 关联 用户身份列表
  @OneToOne(type => UserIdentityListEntity, UserIdentityListEntity => UserIdentityListEntity.identity)
  @JoinColumn()
  identity: UserIdentityListEntity;

}

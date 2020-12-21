/**
 * 用户身份
 * 身份 ：0 root, 1 超级管理员 ，2 管理员，3 客服（技术），5 商家，70 会员，80 普通用户， 90 第三方用户
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Generated, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserIdentityListEntity } from './list';

@EntityModel('user_identity')
export class UserIdentityEntity {

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
  identityId: string;

  // 身份名称
  @Column()
  name: string;

  // 英文身份名称
  @Column()
  ename: string;

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
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.identitys, {
    cascade: true,
    onDelete: 'SET NULL'
  })
  @JoinColumn({
    name: 'userId',
    referencedColumnName: "userId"
  })
  user: UserEntity;

  // 关联 用户身份列表
  @ManyToOne(type => UserIdentityListEntity, UserIdentityListEntity => UserIdentityListEntity.identitys, {
    cascade: true,
    onDelete: 'SET NULL'
  })
  @JoinColumn({
    name: 'identityListId',
    referencedColumnName: "id"
  })
  identityList: UserIdentityListEntity;

}

/**
 * 会员
 * 购买商品
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Generated, OneToOne, JoinColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';

@EntityModel('user_identity_member')
export class UserIdentityMemberEntity {

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
  memberId: string;

  // 会员等级
  @Column()
  level: number;

  // 会员等级名称
  @Column()
  levelName:  string;

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
  @OneToOne(type => UserEntity, UserEntity => UserEntity.member, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

}

/**
 * 普通用户
 * 序号: 80
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, Generated, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';

@EntityModel('user_identity_ordinary')
export class UserIdentityOrdinaryEntity {

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
  identityOrdinaryId: string;

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
  @OneToOne(type => UserEntity, UserEntity => UserEntity.ordinary, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

}

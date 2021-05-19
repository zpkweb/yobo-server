/**
 * 第三方登录
 * 购买商品
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Generated, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';

@EntityModel('user_thirdParty')
export class UserThirdPartyEntity {

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
  identityThirdPartyId: string;

  // 来源
  @Column()
  source: string;

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
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.thirdParty, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

}

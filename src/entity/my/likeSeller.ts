/**
 * 我的喜欢商家
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, Generated, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserSellerEntity } from 'src/entity/user/seller/seller';

@EntityModel('my_likeSeller')
export class MyLikeSellerEntity {

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
  myLikeSellerId: string;

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
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.likeSellers, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

  // 关联商家
  @ManyToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.likeSellers, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'sellerId'
  })
  sellers: UserSellerEntity;

}

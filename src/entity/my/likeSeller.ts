/**
 * 我的喜欢商家
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../user/user';
import { UserIdentitySellerEntity } from '../user/identity/seller';

@EntityModel('my_likeSeller')
export class MyLikeSellerEntity {

  // 我的喜欢商家 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  // 关联用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.likeSellers)
  user: UserEntity;

  // 关联商家
  @OneToOne(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.likeSellers)
  @JoinColumn()
  sellers: UserIdentitySellerEntity;

}

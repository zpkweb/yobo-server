/**
 * 我的喜欢商家
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserSellerEntity } from 'src/entity/user/seller/seller';

@EntityModel('my_likeSeller')
export class MyLikeSellerEntity {

  // 自增主键
  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number;



  // 用户名
  @Column()
  userName: string;

  @Column()
  userId: string;

  @Column()
  sellerName: string;

  @Column()
  sellerId: string;

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
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

  // 关联商家
  @ManyToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.likeSellers, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    referencedColumnName: 'sellerId'
  })
  seller: UserSellerEntity;

}

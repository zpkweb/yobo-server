/**
 * 我的优惠券
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, Generated, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { CouponEntity } from 'src/entity/coupon/coupon';

@EntityModel('my_coupon')
export class MyCouponEntity {

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
  myCouponId: string;

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
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.myCoupons, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

  // 关联优惠券
  @ManyToOne(type => CouponEntity, CouponEntity => CouponEntity.myCoupon, {
    cascade: true,
    onDelete: 'SET NULL'
  })
  @JoinColumn({
    referencedColumnName: 'couponId'
  })
  coupon: CouponEntity;

}

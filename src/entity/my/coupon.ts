/**
 * 我的优惠券
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserEntity } from '../user/user';
import { CouponEntity } from '../coupon/coupon';

@EntityModel('my_coupon')
export class MyCouponEntity {

  // 用户浏览记录 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  // 关联用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.myCoupons)
  user: UserEntity;

  // 关联优惠券
  @OneToOne(type => CouponEntity, CouponEntity => CouponEntity.myCoupon)
  @JoinColumn()
  coupon: CouponEntity;

}

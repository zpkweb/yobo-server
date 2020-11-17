/**
 * 优惠券
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, OneToOne } from 'typeorm';
import { MyCouponEntity } from '../my/coupon';

@EntityModel('coupon')
export class CouponEntity {

  // 优惠券 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 优惠券名称
  @Column()
  name: string;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  // 关联我的优惠券
  @OneToOne(type => MyCouponEntity, MyCouponEntity => MyCouponEntity.coupon)
  myCoupon: MyCouponEntity;

}

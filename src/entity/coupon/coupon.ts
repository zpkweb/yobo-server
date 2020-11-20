/**
 * 优惠券
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn, Column, OneToOne } from 'typeorm';
import { MyCouponEntity } from 'src/entity/my/coupon';

@EntityModel('coupon')
export class CouponEntity {

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
  couponId: string;

  // 优惠券名称
  @Column()
  name: string;

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

  // 关联我的优惠券
  @OneToOne(type => MyCouponEntity, MyCouponEntity => MyCouponEntity.coupon)
  myCoupon: MyCouponEntity;

}

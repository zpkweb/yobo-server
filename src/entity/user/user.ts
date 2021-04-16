/**
 * 用户
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, OneToMany, Generated } from 'typeorm';
import { UserAddressEntity } from './address';
import { UserThirdPartyEntity } from './thirdParty/thirdParty';
import { UserOrdinaryEntity } from './ordinary/ordinary';
import { UserMemberEntity } from './member/member';
import { UserSellerEntity } from './seller/seller';
import { UserCustomerServiceEntity } from './customerService/customerService';
import { UserAdminEntity } from './admin/admin';
import { UserIdentityEntity } from './identity/identity';
import { MyShoppingCartEntity } from 'src/entity/my/shoppingCart';
import { MyOrderEntity } from 'src/entity/my/order';
import { MyBrowsingHistoryEntity } from 'src/entity/my/browsingHistory';
import { MyLikeSellerEntity } from 'src/entity/my/likeSeller';
import { MyLikeCommodityEntity } from 'src/entity/my/likeCommodity';
import { MyCouponEntity } from 'src/entity/my/coupon';
import { MyActivityEntity } from 'src/entity/my/activity';
import { OrderEntity } from 'src/entity/order/order';
import { SubscriberEntity } from 'src/entity/subscribe/subscriber';

@EntityModel('user')
export class UserEntity {

  // 自增主键
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  // id
  @Column({
    unique: true
  })
  @Generated('uuid')
  userId: string;

  // @AfterInsert()
  // repealtUUID() {
  //   // this.userId = this.userId.replace('-', '')
  // }

  // 头像
  @Column()
  avatar: string;

  // 姓名
  @Column()
  name: string;

  // 邮箱
  @Column()
  email: string;

  // 手机
  @Column({
    length: 11
  })
  phone: string;

  // 密码
  @Column({
    select: false
  })
  password: string;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn({
    select: false
  })
  updatedDate: Date;

  //  关联用户身份
  @OneToMany(type => UserIdentityEntity, UserIdentityEntity => UserIdentityEntity.user)
  identitys: UserIdentityEntity[];


  // 关联地址
  @OneToMany(type => UserAddressEntity, UserAddressEntity => UserAddressEntity.user)
  address: UserAddressEntity[];

  // 关联第三方登录
  @OneToMany(type => UserThirdPartyEntity, UserThirdPartyEntity => UserThirdPartyEntity.user)
  thirdParty: UserThirdPartyEntity[];

  // 关联普通用户
  @OneToOne(type => UserOrdinaryEntity, UserOrdinaryEntity => UserOrdinaryEntity.user)
  ordinary: UserOrdinaryEntity;

  // 关联会员
  @OneToOne(type => UserMemberEntity, UserMemberEntity => UserMemberEntity.user)
  member: UserMemberEntity;

  // 关联商家
  @OneToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.user)
  seller: UserSellerEntity;

  // 关联客服
  @OneToOne(type => UserCustomerServiceEntity, UserCustomerServiceEntity => UserCustomerServiceEntity.user)
  customerService: UserCustomerServiceEntity;

  // 关联管理员
  @OneToOne(type => UserAdminEntity, UserAdminEntity => UserAdminEntity.user)
  admin: UserAdminEntity;

  // 关联我的浏览记录
  @OneToMany(type => MyBrowsingHistoryEntity, MyBrowsingHistoryEntity => MyBrowsingHistoryEntity.user)
  likeSellers: MyBrowsingHistoryEntity[];

  // 关联我的喜欢商家列表
  @OneToMany(type => MyLikeSellerEntity, MyLikeSellerEntity => MyLikeSellerEntity.user)
  likeCommoditys: MyLikeSellerEntity[];

  // 关联我的喜欢商品列表
  @OneToMany(type => MyLikeCommodityEntity, MyLikeCommodityEntity => MyLikeCommodityEntity.user)
  browsingHistory: MyLikeCommodityEntity[];

  // 关联我的购物车
  @OneToMany(type => MyShoppingCartEntity, MyShoppingCartEntity => MyShoppingCartEntity.user)
  shoppingCart: MyShoppingCartEntity[];

  // 关联订单
  @OneToMany(type => OrderEntity, OrderEntity => OrderEntity.users)
  orders: OrderEntity[];

  // 关联我的订单
  @OneToMany(type => MyOrderEntity, MyOrderEntity => MyOrderEntity.users)
  myOrders: MyOrderEntity[];

  // 关联我的优惠券列表
  @OneToMany(type => MyCouponEntity, MyCouponEntity => MyCouponEntity.user)
  myCoupons: MyCouponEntity[];

   // 关联我的活动列表
   @OneToMany(type => MyActivityEntity, MyActivityEntity => MyActivityEntity.user)
   myActivitys: MyActivityEntity[];

   //  关联用户订阅
  @OneToMany(type => SubscriberEntity, SubscriberEntity => SubscriberEntity.user)
  subscriber: SubscriberEntity[];

}

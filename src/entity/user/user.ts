/**
 * 用户
 * 级别 ：0 超级管理员 ，1 管理员，2 客服，5 商家，70 会员，80 普通用户， 90 第三方登录
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, OneToOne, OneToMany} from 'typeorm';
import { UserMetadataEntity } from './metadata';
import { UserPasswordEntity } from './password';
import { UserAddressEntity } from './address';
import { UserIdentityThirdPartyEntity } from './identity/thirdParty';
import { UserIdentityOrdinaryEntity } from './identity/ordinary';
import { UserIdentityMemberEntity } from './identity/member';
import { UserIdentitySellerEntity } from './identity/seller';
import { UserIdentityCustomerServiceEntity } from './identity/customerService';
import { UserIdentityAdminEntity } from './identity/admin';
import { UserIdentityEntity } from './identity/identity';
import { MyShoppingCartEntity } from '../my/shoppingCart';
import { MyOrderEntity } from '../my/order';
import { MyBrowsingHistoryEntity } from '../my/browsingHistory';
import { MyLikeSellerEntity } from '../my/likeSeller';
import { MyLikeCommodityEntity } from '../my/likeCommodity';
import { MyCouponEntity } from '../my/coupon';

@EntityModel('user')
export class UserEntity {

  // 用户id
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // 邮箱
  @Column()
  email: string;

  // 手机
  @Column({
    length: 11
  })
  phone: string;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  //  关联用户身份
  @OneToOne(type => UserIdentityEntity, UserIdentityEntity => UserIdentityEntity.user)
  identity: UserIdentityEntity;

  // 关联基本信息
  @OneToOne(type => UserMetadataEntity, UserMetadataEntity => UserMetadataEntity.user)
  metadata: UserMetadataEntity;

  // 关联密码
  @OneToOne(type => UserPasswordEntity, UserPasswordEntity => UserPasswordEntity.user)
  password: UserPasswordEntity;

  // 关联地址
  @OneToMany(type => UserAddressEntity, UserAddressEntity => UserAddressEntity.user)
  address: UserAddressEntity;



  // 关联第三方登录
  @OneToOne(type => UserIdentityThirdPartyEntity, UserIdentityThirdPartyEntity => UserIdentityThirdPartyEntity.user)
  thirdParty: UserIdentityThirdPartyEntity;

  // 关联普通用户
  @OneToOne(type => UserIdentityOrdinaryEntity, UserIdentityOrdinaryEntity => UserIdentityOrdinaryEntity.user)
  ordinary: UserIdentityOrdinaryEntity;

  // 关联会员
  @OneToOne(type => UserIdentityMemberEntity, UserIdentityMemberEntity => UserIdentityMemberEntity.user)
  member: UserIdentityMemberEntity;

  // 关联商家
  @OneToOne(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.user)
  seller: UserIdentitySellerEntity;

  // 关联客服
  @OneToOne(type => UserIdentityCustomerServiceEntity, UserIdentityCustomerServiceEntity => UserIdentityCustomerServiceEntity.user)
  customerService: UserIdentityCustomerServiceEntity;

  // 关联管理员
  @OneToOne(type => UserIdentityAdminEntity, UserIdentityAdminEntity => UserIdentityAdminEntity.user)
  admin: UserIdentityAdminEntity;

  // 关联我的喜欢商家
  @OneToOne(type => MyBrowsingHistoryEntity, MyBrowsingHistoryEntity => MyBrowsingHistoryEntity.user)
  likeSellers: MyBrowsingHistoryEntity;

  // 关联我的喜欢商品
  @OneToMany(type => MyLikeSellerEntity, MyLikeSellerEntity => MyLikeSellerEntity.user)
  likeCommoditys: MyLikeSellerEntity;

  // 关联我的浏览记录
  @OneToMany(type => MyLikeCommodityEntity, MyLikeCommodityEntity => MyLikeCommodityEntity.user)
  browsingHistory: MyLikeCommodityEntity;

  // 关联我的购物车
  @OneToMany(type => MyShoppingCartEntity, MyShoppingCartEntity => MyShoppingCartEntity.user)
  shoppingCart: MyShoppingCartEntity;

  // 关联我的订单
  @OneToMany(type => MyOrderEntity, MyOrderEntity => MyOrderEntity.users)
  orders: MyOrderEntity;

  // 关联我的优惠券列表
  @OneToMany(type => MyCouponEntity, MyCouponEntity => MyCouponEntity.user)
  myCoupons: MyCouponEntity;

}

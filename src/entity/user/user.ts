/**
 *  用户
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { UserMetadataEntity } from './user_metadata';
import { UserPasswordEntity } from './user_password';
import { UserAddressEntity } from './user_address';
import { UserBuyerEntity } from './user_buyer';
import { UserSellerEntity } from './user_seller';
import { UserCustomerServiceEntity } from './user_customerService';
import { UserAdminEntity } from './user_admin';
import { CommodityEntity } from '../commodity/commodity';
import { ShoppingCartEntity } from '../shoppingCart/shoppingCart';
import { OrderEntity } from '../order/order';

@EntityModel('user')
export class UserEntity {

  // 用户id
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // 姓氏
  @Column()
  surname: string;

  // 名字
  @Column()
  name: string;

  // 全称
  @Column()
  fullname: string;

  // 邮箱
  @Column()
  email: string;

  // 手机
  @Column({
    length: 11
  })
  phone: string;

  // 级别 ：0 超级管理员 ，1 管理员，2 客服，5 卖家，8 买家 9 第三方登录
  @Column()
  lever: number;

  // 关联基本信息
  @OneToOne(type => UserMetadataEntity, UserMetadataEntity => UserMetadataEntity.user)
  metadata: UserMetadataEntity;

  // 关联密码
  @OneToOne(type => UserPasswordEntity, UserPasswordEntity => UserPasswordEntity.user)
  password: UserPasswordEntity;

  // 关联地址
  @OneToOne(type => UserAddressEntity, UserAddressEntity => UserAddressEntity.user)
  address: UserAddressEntity;

  // 关联买家
  @OneToOne(type => UserBuyerEntity, UserBuyerEntity => UserBuyerEntity.user)
  buyer: UserBuyerEntity;

  // 关联卖家
  @OneToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.user)
  seller: UserSellerEntity;

  // 关联客服
  @OneToOne(type => UserCustomerServiceEntity, UserCustomerServiceEntity => UserCustomerServiceEntity.user)
  customerService: UserCustomerServiceEntity;

  // 关联管理员
  @OneToOne(type => UserAdminEntity, UserAdminEntity => UserAdminEntity.user)
  admin: UserAdminEntity;

  // 关联喜欢的商品
  @ManyToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.likeUsers)
  @JoinTable()
  likeCommoditys: CommodityEntity;

  // 关联商品浏览记录
  @ManyToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.browsingUsers)
  @JoinTable()
  browsingHistory: CommodityEntity;

  // 关联喜欢的卖家
  @OneToMany(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.likeSellerUsers)
  likeSellers: UserSellerEntity;

  // 关联购物车
  @OneToOne(type => ShoppingCartEntity, ShoppingCartEntity => ShoppingCartEntity.user)
  shoppingCart: ShoppingCartEntity;


  // 关联我的订单
  @OneToMany(type => OrderEntity, OrderEntity => OrderEntity.users)
  orders: OrderEntity;



}

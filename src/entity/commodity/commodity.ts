/**
 * 商品
 * 商品状态：在售卖，已售卖，已下架，
 * 搜索：形状，价格，颜色，主题，类别，手法，最热，最新上传
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, OneToOne, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from "typeorm";
import { UserIdentitySellerEntity } from '../user/identity/seller';
import { CommodityPhotoEntity } from './photo';
import { MyBrowsingHistoryEntity } from '../my/browsingHistory';
import { MyLikeCommodityEntity } from '../my/likeCommodity';
import { MyShoppingCartEntity } from '../my/shoppingCart';
import { OrderEntity } from '../order/order';
import { MyOrderEntity } from '../my/order';
import { CommodityLangEntity } from './lang';

@EntityModel('commodity')
export class CommodityEntity {

  // 商品 id
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // 状态
  @Column()
  status: string;

  //  尺寸
  @Column()
  size: string;

  // 商品被浏览数
  @Column()
  browsingNum: number;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  // 关联商品多语言
  @OneToMany(type => CommodityLangEntity, CommodityLangEntity => CommodityLangEntity.commodity)
  CommodityLangs: CommodityLangEntity;

  // 关联商品多语言价格
  @OneToMany(type => CommodityLangEntity, CommodityLangEntity => CommodityLangEntity.commodity)
  prices: CommodityLangEntity;

  // 关联商品图片
  @OneToMany(type => CommodityPhotoEntity, CommodityPhotoEntity => CommodityPhotoEntity.commodity)
  photos: CommodityPhotoEntity;


  // 关联喜欢商品的用户
  @OneToOne(type => MyLikeCommodityEntity, MyLikeCommodityEntity => MyLikeCommodityEntity.commodity)
  likeCommoditys: MyLikeCommodityEntity;

  // 关联用户浏览记录
  @ManyToOne(type => MyBrowsingHistoryEntity, MyBrowsingHistoryEntity => MyBrowsingHistoryEntity.commoditys)
  browsingHistory: MyBrowsingHistoryEntity;

  // 关联商家
  @ManyToOne(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.commoditys)
  seller: UserIdentitySellerEntity;

  // 关联订单
  @ManyToMany(type => OrderEntity, OrderEntity => OrderEntity.commoditys)
  orders: OrderEntity;

  // 关联我的订单
  @ManyToMany(type => MyOrderEntity, MyOrderEntity => MyOrderEntity.commoditys)
  myOrders: MyOrderEntity;

  // 关联购物车
  @ManyToMany(type => MyShoppingCartEntity, MyShoppingCartEntity => MyShoppingCartEntity.commoditys)
  shoppingCart: MyShoppingCartEntity;


}

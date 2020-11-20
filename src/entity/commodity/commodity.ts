/**
 * 商品
 * 商品状态：在售卖，已售卖，已下架，
 * 搜索：形状，价格，颜色，主题，类别，手法，最热，最新上传
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, ManyToOne, PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinColumn } from "typeorm";
import { CommodityPhotoEntity } from './photo';
import { CommodityLangEntity } from './lang';
import { CommodityPriceEntity } from './price';
import { UserIdentitySellerEntity } from 'src/entity/user/seller/seller';
import { MyBrowsingHistoryEntity } from 'src/entity/my/browsingHistory';
import { MyLikeCommodityEntity } from 'src/entity/my/likeCommodity';
import { MyShoppingCartEntity } from 'src/entity/my/shoppingCart';
import { MyOrderEntity } from 'src/entity/my/order';
import { OrderEntity } from 'src/entity/order/order';

@EntityModel('commodity')
export class CommodityEntity {

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
  commodityId: string;

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
  @CreateDateColumn({
    select: false
  })
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn({
    select: false
  })
  updatedDate: Date;

  // 关联商品多语言
  @OneToMany(type => CommodityLangEntity, CommodityLangEntity => CommodityLangEntity.commodity)
  CommodityLangs: CommodityLangEntity[];

  // 关联商品价格
  @OneToMany(type => CommodityPriceEntity, CommodityPriceEntity => CommodityPriceEntity.commodity)
  prices: CommodityPriceEntity[];

  // 关联商品图片
  @OneToMany(type => CommodityPhotoEntity, CommodityPhotoEntity => CommodityPhotoEntity.commodity)
  photos: CommodityPhotoEntity[];


  // 关联用户喜欢商品的列表
  @OneToMany(type => MyLikeCommodityEntity, MyLikeCommodityEntity => MyLikeCommodityEntity.commodity)
  likeCommoditys: MyLikeCommodityEntity[];

  // 关联用户浏览记录
  @OneToMany(type => MyBrowsingHistoryEntity, MyBrowsingHistoryEntity => MyBrowsingHistoryEntity.commoditys)
  browsingHistory: MyBrowsingHistoryEntity[];

  // 关联商家
  @ManyToOne(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.commoditys, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'sellerId'
  })
  seller: UserIdentitySellerEntity;

  // 关联订单
  @ManyToMany(type => OrderEntity, OrderEntity => OrderEntity.commoditys)
  orders: OrderEntity[];

  // 关联我的订单
  @ManyToMany(type => MyOrderEntity, MyOrderEntity => MyOrderEntity.commoditys)
  myOrders: MyOrderEntity[];

  // 关联购物车
  @ManyToMany(type => MyShoppingCartEntity, MyShoppingCartEntity => MyShoppingCartEntity.commoditys)
  shoppingCart: MyShoppingCartEntity[];


}

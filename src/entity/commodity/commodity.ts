/**
 * 商品
 * 商品状态：0:已添加，1:售卖中，2:已售卖，3:已下架，
 * 搜索：形状，价格，颜色，主题，类别，手法，最热，最新上传
 * 属性
 * 选项：形状，主题，类别，手法
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, ManyToOne, PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany } from "typeorm";
import { CommodityNameEntity } from './attribute/name';
import { CommodityDescEntity } from './attribute/desc';
import { CommodityPhotoEntity } from './attribute/photo';
import { CommodityPriceEntity } from './attribute/price';
import { CommodityShapeEntity } from './attribute/shape';
import { CommodityColorEntity } from './attribute/color';
import { CommodityThemeEntity } from './attribute/theme';
import { CommodityCategoryEntity } from './attribute/category';
import { CommodityTechniqueEntity } from './attribute/technique';
import { UserSellerEntity } from 'src/entity/user/seller/seller';
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
  state: number;

  // 关联 商品名称
  @OneToMany(type => CommodityNameEntity, CommodityNameEntity => CommodityNameEntity.commodity)
  name: CommodityNameEntity[];

  // 关联 商品描述
  @OneToMany(type => CommodityDescEntity, CommodityDescEntity => CommodityDescEntity.commodity)
  desc: CommodityDescEntity[];

  // 关联 商品图片
  @OneToMany(type => CommodityPhotoEntity, CommodityPhotoEntity => CommodityPhotoEntity.commodity)
  photos: CommodityPhotoEntity[];

  // 关联 商品价格
  @OneToMany(type => CommodityPriceEntity, CommodityPriceEntity => CommodityPriceEntity.commodity)
  price: CommodityPriceEntity[];

  // 关联 商品颜色
  @OneToMany(type => CommodityColorEntity, CommodityColorEntity => CommodityColorEntity.commodity)
  color: CommodityColorEntity[];

  // options
  // 关联 商品形状
  @OneToMany(type => CommodityShapeEntity, CommodityShapeEntity => CommodityShapeEntity.commodity)
  shape: CommodityShapeEntity[];

  // 关联 商品主题
  @OneToMany(type => CommodityThemeEntity, CommodityThemeEntity => CommodityThemeEntity.commodity)
  theme: CommodityThemeEntity[];

  // 关联 商品类别
  @OneToMany(type => CommodityCategoryEntity, CommodityCategoryEntity => CommodityCategoryEntity.commodity)
  category: CommodityCategoryEntity[];

  // 关联 商品手法
  @OneToMany(type => CommodityTechniqueEntity, CommodityTechniqueEntity => CommodityTechniqueEntity.commodity)
  technique: CommodityTechniqueEntity[];

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

  // 关联商家
  @ManyToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.commoditys, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'sellerId'
  })
  seller: UserSellerEntity;



  关联用户喜欢商品的列表
  @OneToMany(type => MyLikeCommodityEntity, MyLikeCommodityEntity => MyLikeCommodityEntity.commodity)
  likeCommoditys: MyLikeCommodityEntity[];

  关联用户浏览记录
  @OneToMany(type => MyBrowsingHistoryEntity, MyBrowsingHistoryEntity => MyBrowsingHistoryEntity.commoditys)
  browsingHistory: MyBrowsingHistoryEntity[];



  关联订单
  @ManyToMany(type => OrderEntity, OrderEntity => OrderEntity.commoditys)
  orders: OrderEntity[];

  关联我的订单
  @ManyToMany(type => MyOrderEntity, MyOrderEntity => MyOrderEntity.commoditys)
  myOrders: MyOrderEntity[];

  关联购物车
  @ManyToMany(type => MyShoppingCartEntity, MyShoppingCartEntity => MyShoppingCartEntity.commoditys)
  shoppingCart: MyShoppingCartEntity[];


}

/**
 * 商品
 * 商品状态：0:已添加，1:售卖中，2:已售卖，3:已下架，
 * 搜索：价格，颜色，形状，主题，类别，手法，最热，最新上传
 * 属性
 * 选项：形状，主题，类别，手法
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, ManyToOne, PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany, OneToOne, JoinTable } from "typeorm";
import { CommodityNameEntity } from './attribute/name';
import { CommodityDescEntity } from './attribute/desc';
import { CommodityPhotoEntity } from './attribute/photo';
import { CommodityPriceEntity } from './attribute/price';
import { CommodityColorEntity } from './attribute/color';
import { CommodityBrowsingCountEntity } from './commodityBrowsingCount';

import { CommodityOptionsShapeEntity } from './options/shape';
import { CommodityOptionsThemeEntity } from './options/theme';
import { CommodityOptionsCategoryEntity } from './options/category';
import { CommodityOptionsTechniqueEntity } from './options/technique';

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


  @Column()
  width: number;

  @Column()
  height: number;

  // 关联 商品名称
  @OneToOne(type => CommodityNameEntity, CommodityNameEntity => CommodityNameEntity.commodity, {
    cascade: true,
  })
  name: CommodityNameEntity;

  // 关联 商品描述
  @OneToOne(type => CommodityDescEntity, CommodityDescEntity => CommodityDescEntity.commodity, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  desc: CommodityDescEntity;


  // 关联 商品价格
  @OneToOne(type => CommodityPriceEntity, CommodityPriceEntity => CommodityPriceEntity.commodity, {
    cascade: true,
  })
  price: CommodityPriceEntity;

  // 关联 商品颜色
  @OneToMany(type => CommodityColorEntity, CommodityColorEntity => CommodityColorEntity.commodity, {
    cascade: true,
  })
  colors: CommodityColorEntity[];

  // 关联 商品图片
  @OneToMany(type => CommodityPhotoEntity, CommodityPhotoEntity => CommodityPhotoEntity.commodity, {
    cascade: true,
  })
  photos: CommodityPhotoEntity[];

  // options
  // 关联 商品形状
  @ManyToMany(type => CommodityOptionsShapeEntity, CommodityOptionsShapeEntity => CommodityOptionsShapeEntity.commodity)
  @JoinTable({
    name: 'commodity_shape',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  shapes: CommodityOptionsShapeEntity[];

  // 关联 商品主题
  @ManyToMany(type => CommodityOptionsThemeEntity, CommodityOptionsThemeEntity => CommodityOptionsThemeEntity.commodity)
  @JoinTable({
    name: 'commodity_theme',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  themes: CommodityOptionsThemeEntity[];

  // 关联 商品类别
  @ManyToMany(type => CommodityOptionsCategoryEntity, CommodityOptionsCategoryEntity => CommodityOptionsCategoryEntity.commodity)
  @JoinTable({
    name: 'commodity_category',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  categorys: CommodityOptionsCategoryEntity[];

  // 关联 商品手法
  @ManyToMany(type => CommodityOptionsTechniqueEntity, CommodityOptionsTechniqueEntity => CommodityOptionsTechniqueEntity.commodity)
  @JoinTable({
    name: 'commodity_technique',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  techniques: CommodityOptionsTechniqueEntity[];

  // 关联商家
  @ManyToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.commoditys, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'sellerId'
  })
  seller: UserSellerEntity;


  // 关联用户喜欢商品的列表
  @OneToMany(type => MyLikeCommodityEntity, MyLikeCommodityEntity => MyLikeCommodityEntity.commodity)
  likeCommoditys: MyLikeCommodityEntity[];

  // 关联用户浏览记录
  @OneToOne(type => CommodityBrowsingCountEntity, CommodityBrowsingCountEntity => CommodityBrowsingCountEntity.commodity)
  browsingCount: CommodityBrowsingCountEntity[];

  // 关联用户浏览记录
  @OneToMany(type => MyBrowsingHistoryEntity, MyBrowsingHistoryEntity => MyBrowsingHistoryEntity.commodity)
  browsingHistory: MyBrowsingHistoryEntity[];


  // 关联订单
  @ManyToMany(type => OrderEntity, OrderEntity => OrderEntity.commoditys)
  orders: OrderEntity[];

  // 关联我的订单
  @ManyToMany(type => MyOrderEntity, MyOrderEntity => MyOrderEntity.commoditys)
  myOrders: MyOrderEntity[];

  // 关联购物车
  @ManyToMany(type => MyShoppingCartEntity, MyShoppingCartEntity => MyShoppingCartEntity.commoditys)
  shoppingCart: MyShoppingCartEntity[];

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

}

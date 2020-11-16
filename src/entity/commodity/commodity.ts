/**
 * 商品
 * 商品状态：在售卖，已售卖，已下架，
 * 搜索：形状，价格，颜色，主题，类别，手法，最热，最新上传
 */
import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from '../user/user';
import { UserSellerEntity } from '../user/user_seller';
import { CommodityMetaDataEntity } from './commodity_metadata';
import { CommodityPhotoEntity } from './commodity_photo';
import { CommodityPackingEntity } from './commodity_packing';
import { ShoppingCartEntity } from '../shoppingCart/shoppingCart';
import { OrderEntity } from '../order/order';

@EntityModel('commodity')
export class CommodityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // 关联喜欢商品的用户
  @ManyToMany(type => UserEntity, UserEntity => UserEntity.likeCommoditys)
  likeUsers: UserEntity;

  // 关联浏览记录
  @ManyToMany(type => UserEntity, UserEntity => UserEntity.browsingHistory)
  browsingUsers: UserEntity;

  // 关联卖家
  @OneToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.commodity)
  seller: UserSellerEntity;

  // 关联商品信息
  @OneToOne(type => CommodityMetaDataEntity, CommodityMetaDataEntity => CommodityMetaDataEntity.commodity)
  metadata: CommodityMetaDataEntity;

  // 关联商品图片
  @OneToMany(type => CommodityPhotoEntity, CommodityPhotoEntity => CommodityPhotoEntity.commodity)
  photos: CommodityPhotoEntity;

  // 关联商品包装
  @OneToOne(type => CommodityPackingEntity, CommodityPackingEntity => CommodityPackingEntity.commodity)
  commodityPacking: CommodityPackingEntity;

  // 关联购物车
  @ManyToMany(type => ShoppingCartEntity, ShoppingCartEntity => ShoppingCartEntity.commoditys)
  shoppingCart: ShoppingCartEntity;

  // 关联订单
  @ManyToMany(type => OrderEntity, OrderEntity => OrderEntity.commoditys)
  order: OrderEntity;

  // 名称
  @Column()
  name: string;

  //  尺寸
  @Column()
  size: string;

  // 价格
  @Column()
  price: string;

  // 年
  @Column()
  year: string;

}

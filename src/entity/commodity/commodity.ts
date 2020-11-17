/**
 * 商品
 * 商品状态：在售卖，已售卖，已下架，
 * 搜索：形状，价格，颜色，主题，类别，手法，最热，最新上传
 */
import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, OneToOne, ManyToOne, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany } from "typeorm";
import { UserIdentitySellerEntity } from '../user/identity/seller';
import { CommodityMetaDataEntity } from './metadata';
import { CommodityPhotoEntity } from './photo';
import { MyBrowsingHistoryEntity } from '../my/browsingHistory';
import { MyLikeCommodityEntity } from '../my/likeCommodity';
import { MyShoppingCartEntity } from '../my/shoppingCart';
import { MyOrderEntity } from '../my/order';

@EntityModel('commodity')
export class CommodityEntity {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  // 状态
  @Column()
  status: string;

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

  // 商品被浏览数
  @Column()
  browsingNum: number;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  // 关联商品信息
  @OneToOne(type => CommodityMetaDataEntity, CommodityMetaDataEntity => CommodityMetaDataEntity.commodity)
  metadata: CommodityMetaDataEntity;

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
  @ManyToMany(type => MyOrderEntity, MyOrderEntity => MyOrderEntity.commoditys)
  orders: MyOrderEntity;

  // 关联购物车
  @ManyToMany(type => MyShoppingCartEntity, MyShoppingCartEntity => MyShoppingCartEntity.commoditys)
  shoppingCart: MyShoppingCartEntity;


}

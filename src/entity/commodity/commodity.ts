/**
 * 商品
 * 商品状态：0:已添加，1:售卖中，2:已售卖，3:已下架，
 * 搜索：价格，颜色，形状，主题，类别，手法，最热，最新上传
 * 属性
 * 选项：形状，主题，类别，手法
 *
 *
分类
  油画：形状，颜色，风格，题材，作品类型，摆放空间
  雕塑：风格，题材，材质，摆放空间
  版刻：风格，作品类型，题材，摆放空间
  国画：风格，作品类型，题材，摆放空间
  文玩：类型，手串规格，瑞物
  佛教：类别
  珠宝：风格，款式，颜色，用途




  类别：手串，神像雕塑，把件，画像/唐卡，佛珠/念珠，银元，贡器贡品，书/字画，瑞物，镇物，塔，修行穿用，扇画，熏香，其他
  分类：油画，雕塑，版刻，国画，文玩，佛教，珠宝，其他
  材质：木雕，青铜，黄铜，陶瓷，玻璃，玻璃钢，水晶，黏土，其他
  款式：项链，手链，戒指，耳饰，吊坠，脚链，胸针，其他
  摆放：商业空间，办公，个人住宅，其他
  形状：圆形，方形，长形，其他
  规格：单颗，12mm17颗，20mm12颗，手持18颗，108+6颗，其他
  风格：抽象，具象，古典，现代，写意，写实，超写实，观念，卡通，奢华，复古，小清新，时尚，商务休闲，其他
  手法：其他
  主题：花鸟，肖像，风景，城市，人物，抽象，动物，静物，历史，风俗，宗教神话，城市景观，其他
  类型：纸本油画，布画油画，木板油画，木刻版画，丝网版画，铜板画，综合版版画，纸本水墨，绢本设色，其他
  用途：自带，生日礼物，婚庆，送女友，送男友，送长辈，其他
  瑞物：葫芦，风水轮，金蟾，金钱龟，貔貅，聚宝盆，如意，元宝，其他








 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, ManyToOne, PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany, OneToOne } from "typeorm";
import { CommodityNameEntity } from './attribute/name';
import { CommodityDescEntity } from './attribute/desc';
import { CommodityDetailsEntity } from './attribute/details';
import { CommodityPostageEntity } from './attribute/postage';
import { CommodityPhotoEntity } from './attribute/photo';
import { CommodityVideoEntity } from './attribute/video';
import { CommodityPriceEntity } from './attribute/price';
import { CommodityColorEntity } from './attribute/color';
import { CommodityBrowsingCountEntity } from './commodityBrowsingCount';

import { CommodityCategoryEntity } from 'src/entity/commodity/commodity-options/category';
import { CommodityClassificationEntity } from 'src/entity/commodity/commodity-options/classification';
import { CommodityMaterialEntity } from 'src/entity/commodity/commodity-options/material';
import { CommodityModelEntity } from 'src/entity/commodity/commodity-options/model';
import { CommodityPlaceEntity } from 'src/entity/commodity/commodity-options/place';
import { CommodityRuiwuEntity } from 'src/entity/commodity/commodity-options/ruiwu';
import { CommodityShapeEntity } from 'src/entity/commodity/commodity-options/shape';
import { CommoditySpecificationEntity } from 'src/entity/commodity/commodity-options/specification';
import { CommodityStyleEntity } from 'src/entity/commodity/commodity-options/style';
import { CommodityTechniqueEntity } from 'src/entity/commodity/commodity-options/technique';
import { CommodityThemeEntity } from 'src/entity/commodity/commodity-options/theme';
import { CommodityTypeEntity } from 'src/entity/commodity/commodity-options/type';
import { CommodityUseEntity } from 'src/entity/commodity/commodity-options/use';


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
  choice: boolean;

  @Column({
    type: 'float'
  })
  width: number;

  @Column({
    type: 'float'
  })
  height: number;

  // 封面图
  @Column()
  images: string;

  // 关联 商品名称
  @OneToOne(type => CommodityNameEntity, CommodityNameEntity => CommodityNameEntity.commodity, {
    cascade: true,
  })
  name: CommodityNameEntity;

  // 关联 商品描述
  @OneToOne(type => CommodityDescEntity, CommodityDescEntity => CommodityDescEntity.commodity, {
    cascade: true,
  })
  desc: CommodityDescEntity;

  @OneToOne(type => CommodityDetailsEntity, CommodityDetailsEntity => CommodityDetailsEntity.commodity, {
    cascade: true,
  })
  details: CommodityDetailsEntity;

  @OneToOne(type => CommodityPostageEntity, CommodityPostageEntity => CommodityPostageEntity.commodity, {
    cascade: true,
  })
  postage: CommodityPostageEntity;

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

  @OneToMany(type => CommodityVideoEntity, CommodityVideoEntity => CommodityVideoEntity.commodity, {
    cascade: true,
  })
  videos: CommodityVideoEntity[];

  // options
  // 关联 商品类别
  @OneToMany(type => CommodityCategoryEntity, CommodityCategoryEntity => CommodityCategoryEntity.commoditys, {
    cascade: true,
  })
  categorys: CommodityCategoryEntity[];

  // 关联 商品分类
  @OneToMany(type => CommodityClassificationEntity, CommodityClassificationEntity => CommodityClassificationEntity.commoditys, {
    cascade: true
  })
  classifications: CommodityClassificationEntity[];

  // 关联 商品材质
  @OneToMany(type => CommodityMaterialEntity, CommodityMaterialEntity => CommodityMaterialEntity.commoditys, {
    cascade: true
  })
  materials: CommodityMaterialEntity[];

  // 关联 商品款式
  @OneToMany(type => CommodityModelEntity, CommodityModelEntity => CommodityModelEntity.commoditys, {
    cascade: true
  })
  models: CommodityModelEntity[];

  // 关联 商品摆放
  @OneToMany(type => CommodityPlaceEntity, CommodityPlaceEntity => CommodityPlaceEntity.commoditys, {
    cascade: true
  })
  places: CommodityPlaceEntity[];

  // 关联 瑞物
  @OneToMany(type => CommodityRuiwuEntity, CommodityRuiwuEntity => CommodityRuiwuEntity.commoditys, {
    cascade: true
  })
  ruiwus: CommodityRuiwuEntity[];

  // 关联 商品形状
  @OneToMany(type => CommodityShapeEntity, CommodityShapeEntity => CommodityShapeEntity.commoditys, {
    cascade: true
  })
  shapes: CommodityShapeEntity[];

  // 关联 商品规格
  @OneToMany(type => CommoditySpecificationEntity, CommoditySpecificationEntity => CommoditySpecificationEntity.commoditys, {
    cascade: true
  })
  specifications: CommoditySpecificationEntity[];

  // 关联 商品风格
  @OneToMany(type => CommodityStyleEntity, CommodityStyleEntity => CommodityStyleEntity.commoditys, {
    cascade: true
  })
  styles: CommodityStyleEntity[];

  // 关联 商品手法
  @OneToMany(type => CommodityTechniqueEntity, CommodityTechniqueEntity => CommodityTechniqueEntity.commoditys, {
    cascade: true
  })
  techniques: CommodityTechniqueEntity[];

  // 关联 商品主题
  @OneToMany(type => CommodityThemeEntity, CommodityThemeEntity => CommodityThemeEntity.commoditys, {
    cascade: true
  })
  themes: CommodityThemeEntity[];

  // 关联 商品类型
  @OneToMany(type => CommodityTypeEntity, CommodityTypeEntity => CommodityTypeEntity.commoditys, {
    cascade: true
  })
  types: CommodityTypeEntity[];

  // 关联 商品用途
  @OneToMany(type => CommodityUseEntity, CommodityUseEntity => CommodityUseEntity.commoditys, {
    cascade: true
  })
  uses: CommodityUseEntity[];



  // 关联商家
  @ManyToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.commoditys, {
    cascade: true,
    onDelete: 'SET NULL'
  })
  @JoinColumn({
    name: 'sellerId',
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

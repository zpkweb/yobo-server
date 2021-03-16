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


  分类：油画，雕塑，版刻，国画，文玩，佛教，珠宝，其他
  形状：圆形，方形，长形，其他
  颜色：粉色，黄色，红色，绿色，黑色，白色，蓝色，紫色，灰色，其他
  风格：抽象，具象，古典，现代，写意，写实，超写实，观念，卡通，奢华，复古，小清新，时尚，商务休闲，其他
  题材：花鸟，肖像，风景，城市，人物，抽象，动物，静物，历史，风俗，宗教神话，城市景观，其他
  类型：纸本油画，布画油画，木板油画，木刻版画，丝网版画，铜板画，综合版版画，纸本水墨，绢本设色，其他
  摆放空间：商业空间，办公，个人住宅，其他
  材质：木雕，青铜，黄铜，陶瓷，玻璃，玻璃钢，水晶，黏土，其他
  类别：手串，神像雕塑，把件，画像/唐卡，佛珠/念珠，银元，贡器贡品，书/字画，瑞物，镇物，塔，修行穿用，扇画，熏香，其他
  规格：单颗，12mm17颗，20mm12颗，手持18颗，108+6颗，其他
  瑞物：葫芦，风水轮，金蟾，金钱龟，貔貅，聚宝盆，如意，元宝，其他
  款式：项链，手链，戒指，耳饰，吊坠，脚链，胸针，其他
  用途：自带，生日礼物，婚庆，送女友，送男友，送长辈，其他

 */

import { EntityModel } from "@midwayjs/orm";
import { Column, OneToMany, ManyToOne, PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToMany, OneToOne, JoinTable } from "typeorm";
import { CommodityNameEntity } from './attribute/name';
import { CommodityDescEntity } from './attribute/desc';
import { CommodityPhotoEntity } from './attribute/photo';
import { CommodityPriceEntity } from './attribute/price';
import { CommodityColorEntity } from './attribute/color';
import { CommodityBrowsingCountEntity } from './commodityBrowsingCount';

import { CommodityOptionsCategoryEntity } from 'src/entity/commodity/options/category';
import { CommodityOptionsClassificationEntity } from 'src/entity/commodity/options/classification';
import { CommodityOptionsMaterialEntity } from 'src/entity/commodity/options/material';
import { CommodityOptionsModelEntity } from 'src/entity/commodity/options/model';
import { CommodityOptionsPlaceEntity } from 'src/entity/commodity/options/place';
import { CommodityOptionsShapeEntity } from 'src/entity/commodity/options/shape';
import { CommodityOptionsSpecificationEntity } from 'src/entity/commodity/options/specification';
import { CommodityOptionsStyleEntity } from 'src/entity/commodity/options/style';
import { CommodityOptionsTechniqueEntity } from 'src/entity/commodity/options/technique';
import { CommodityOptionsThemeEntity } from 'src/entity/commodity/options/theme';
import { CommodityOptionsTypeEntity } from 'src/entity/commodity/options/type';
import { CommodityOptionsUseEntity } from 'src/entity/commodity/options/use';


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

  // 关联 商品分类
  @ManyToMany(type => CommodityOptionsClassificationEntity, CommodityOptionsClassificationEntity => CommodityOptionsClassificationEntity.commodity)
  @JoinTable({
    name: 'commodity_classification',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  classifications: CommodityOptionsClassificationEntity[];

  // 关联 商品材质
  @ManyToMany(type => CommodityOptionsMaterialEntity, CommodityOptionsMaterialEntity => CommodityOptionsMaterialEntity.commodity)
  @JoinTable({
    name: 'commodity_material',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  materials: CommodityOptionsMaterialEntity[];

  // 关联 商品款式
  @ManyToMany(type => CommodityOptionsModelEntity, CommodityOptionsModelEntity => CommodityOptionsModelEntity.commodity)
  @JoinTable({
    name: 'commodity_model',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  models: CommodityOptionsModelEntity[];

  // 关联 商品摆放
  @ManyToMany(type => CommodityOptionsPlaceEntity, CommodityOptionsPlaceEntity => CommodityOptionsPlaceEntity.commodity)
  @JoinTable({
    name: 'commodity_place',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  places: CommodityOptionsPlaceEntity[];



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

  // 关联 商品规格
  @ManyToMany(type => CommodityOptionsSpecificationEntity, CommodityOptionsSpecificationEntity => CommodityOptionsSpecificationEntity.commodity)
  @JoinTable({
    name: 'commodity_specification',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  specifications: CommodityOptionsSpecificationEntity[];

  // 关联 商品风格
  @ManyToMany(type => CommodityOptionsStyleEntity, CommodityOptionsStyleEntity => CommodityOptionsStyleEntity.commodity)
  @JoinTable({
    name: 'commodity_style',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  styles: CommodityOptionsStyleEntity[];

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

  // 关联 商品类型
  @ManyToMany(type => CommodityOptionsTypeEntity, CommodityOptionsTypeEntity => CommodityOptionsTypeEntity.commodity)
  @JoinTable({
    name: 'commodity_type',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  types: CommodityOptionsTypeEntity[];

  // 关联 商品用途
  @ManyToMany(type => CommodityOptionsUseEntity, CommodityOptionsUseEntity => CommodityOptionsUseEntity.commodity)
  @JoinTable({
    name: 'commodity_use',
    joinColumn:{
      referencedColumnName: 'commodityId'
    },
    inverseJoinColumn:{
      referencedColumnName: 'id'
    }
  })
  uses: CommodityOptionsUseEntity[];



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

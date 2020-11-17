/**
 * 商家
 * 添加商品
 * 筛选：标签，国籍，姓氏，性别
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, OneToMany, ManyToMany } from 'typeorm';
import { UserEntity } from '../user';
import { UserIdentityCustomerServiceEntity } from './customerService';
import { CommodityEntity } from '../../commodity/commodity';
import { UserIdentitySellerMetadataEntity } from './seller/metadata';
import { UserIdentitySellerStudioEntity } from './seller/studio';
import { MyOrderEntity } from '../../my/order';
import { MyLikeSellerEntity } from '../../my/likeSeller';

@EntityModel('user_identity_seller')
export class UserIdentitySellerEntity {

  // 商家 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 姓氏
  @Column()
  surname: string;

  // 名字
  @Column()
  name: string;

  // 标签
  @Column()
  label: string;

  // 性别
  @Column()
  gender: string;

  // 国家
  @Column()
  country: string;



  // 关联商家信息
  @OneToOne(type => UserIdentitySellerMetadataEntity, UserIdentitySellerMetadataEntity => UserIdentitySellerMetadataEntity.seller)
  @JoinColumn()
  metadata: UserIdentitySellerMetadataEntity;

  // 关联商家工作室
  @ManyToOne(type => UserIdentitySellerStudioEntity, UserIdentitySellerStudioEntity => UserIdentitySellerStudioEntity.seller)
  studio: UserIdentitySellerStudioEntity;

  // 关联商家履历
  @OneToOne(type => UserIdentitySellerStudioEntity, UserIdentitySellerStudioEntity => UserIdentitySellerStudioEntity.seller)
  @JoinColumn()
  resume: UserIdentitySellerStudioEntity;



  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.seller)
  @JoinColumn()
  user: UserEntity;

  // 关联客服
  @ManyToMany(type => UserIdentityCustomerServiceEntity, UserIdentityCustomerServiceEntity => UserIdentityCustomerServiceEntity.sellers)
  customerServices: UserIdentityCustomerServiceEntity;

  // 关联喜欢我的人
  @OneToOne(type => MyLikeSellerEntity, MyLikeSellerEntity => MyLikeSellerEntity.sellers)
  likeSellers: MyLikeSellerEntity;

  // 关联商品
  @OneToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.seller)
  commoditys: CommodityEntity;

  // 关联商家售卖记录
  @ManyToMany(type => MyOrderEntity, MyOrderEntity => MyOrderEntity.seller)
  orders: MyOrderEntity;


}

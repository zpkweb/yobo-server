/**
 * 卖家
 * 添加商品
 * 搜索：标签，国籍，姓氏，性别
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { UserEntity } from './user';
import { UserCustomerServiceEntity } from './user_customerService';
import { CommodityEntity } from '../commodity/commodity';
import { UserSellerMetadataEntity } from './user_seller_metadata';
import { UserSellerStudioEntity } from './user_seller_studio';
import { OrderEntity } from '../order/order';

@EntityModel('user_seller')
export class UserSellerEntity {

  // 卖家 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.seller)
  @JoinColumn()
  user: UserEntity;

  // 关联客服
  @ManyToOne(type => UserCustomerServiceEntity, UserCustomerServiceEntity => UserCustomerServiceEntity.seller)
  customerService: UserCustomerServiceEntity;

  // 关联喜欢我的人
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.likeSellers)
  likeSellerUsers: UserEntity;

  // 关联商品
  @OneToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.seller)
  @JoinColumn()
  commodity: CommodityEntity;

  // 标签
  @Column()
  label: string;

  // 性别
  @Column()
  gender: string;

  // 国家
  @Column()
  country: string;

  // 关联卖家信息
  @OneToOne(type => UserSellerMetadataEntity, UserSellerMetadataEntity => UserSellerMetadataEntity.seller)
  @JoinColumn()
  metadata: UserSellerMetadataEntity;

  // 关联卖家工作室
  @OneToOne(type => UserSellerStudioEntity, UserSellerStudioEntity => UserSellerStudioEntity.seller)
  @JoinColumn()
  studio: UserSellerStudioEntity;

  // 关联卖家履历
  @OneToOne(type => UserSellerStudioEntity, UserSellerStudioEntity => UserSellerStudioEntity.seller)
  @JoinColumn()
  resume: UserSellerStudioEntity;

  // 关联卖家售卖记录
  @OneToMany(type => OrderEntity, OrderEntity => OrderEntity.seller)
  orders: OrderEntity;

}

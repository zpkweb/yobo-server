/**
 * 商家
 * 添加商品
 * 筛选：标签，国籍，姓氏，性别
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, Generated, OneToOne, JoinColumn, OneToMany, ManyToMany, CreateDateColumn, UpdateDateColumn, JoinTable } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserIdentityCustomerServiceEntity } from 'src/entity/user/customerService/customerService';
import { CommodityEntity } from 'src/entity/commodity/commodity';
import { UserIdentitySellerMetadataEntity } from './metadata';
import { UserIdentitySellerStudioEntity } from './studio';
import { OrderEntity } from 'src/entity/order/order';
import { MyLikeSellerEntity } from 'src/entity/my/likeSeller';

@EntityModel('user_identity_seller')
export class UserIdentitySellerEntity {

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
  sellerId: string;

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

  // 关联商家信息
  @OneToOne(type => UserIdentitySellerMetadataEntity, UserIdentitySellerMetadataEntity => UserIdentitySellerMetadataEntity.seller, {
    cascade: true
  })
  @JoinColumn()
  metadata: UserIdentitySellerMetadataEntity;

  // 关联商家工作室
  @ManyToMany(type => UserIdentitySellerStudioEntity, UserIdentitySellerStudioEntity => UserIdentitySellerStudioEntity.seller, {
    cascade: true
  })
  @JoinTable({
    joinColumn: {
      referencedColumnName: 'sellerId'
    },
    inverseJoinColumn: {
      referencedColumnName: 'id'
    }
  })
  studios: UserIdentitySellerStudioEntity[];

  // 关联商家履历
  @OneToMany(type => UserIdentitySellerStudioEntity, UserIdentitySellerStudioEntity => UserIdentitySellerStudioEntity.seller)
  resumes: UserIdentitySellerStudioEntity[];

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.seller, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

  // 关联喜欢我的人列表
  @OneToMany(type => MyLikeSellerEntity, MyLikeSellerEntity => MyLikeSellerEntity.sellers)
  likeSellers: MyLikeSellerEntity[];

  // 关联商品
  @OneToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.seller)
  commoditys: CommodityEntity[];

  // 关联客服
  @ManyToMany(type => UserIdentityCustomerServiceEntity, UserIdentityCustomerServiceEntity => UserIdentityCustomerServiceEntity.sellers, {
    cascade: true
  })
  @JoinTable({
    joinColumn: {
      referencedColumnName: 'sellerId'
    },
    inverseJoinColumn: {
      referencedColumnName: 'costomerServiceId'
    }
  })
  customerServices: UserIdentityCustomerServiceEntity[];

  // 关联商家订单
  @ManyToMany(type => OrderEntity, OrderEntity => OrderEntity.sellers)
  orders: OrderEntity[];


}

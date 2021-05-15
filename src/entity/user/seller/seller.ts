/**
 * 商家
 * 添加商品
 * 筛选：标签，国籍，姓氏，性别
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, Generated, OneToOne, JoinColumn, OneToMany, ManyToMany, CreateDateColumn, UpdateDateColumn, JoinTable } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserCustomerServiceEntity } from 'src/entity/user/customerService/customerService';
import { CommodityEntity } from 'src/entity/commodity/commodity';
import { UserSellerMetadataEntity } from './metadata';
import { UserSellerStudioEntity } from './studio';
import { UserSellerResumeEntity } from './resume';
import { OrderEntity } from 'src/entity/order/order';
import { MyLikeSellerEntity } from 'src/entity/my/likeSeller';
// import { UserIdentityEntity } from 'src/entity/user/identity/identity';

@EntityModel('user_seller')
export class UserSellerEntity {

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

  // 头像
  @Column()
  banner: string;

  // 精选
  @Column()
  choice: boolean;

  // 状态：0: 审核, 1: 通过, 2: 拒绝, 3: 禁用, 4: 注销
  @Column()
  state: number;

  // 类型：0:画家，1:雕塑家
  @Column()
  type: number;

  @Column()
  typeName: string;

  // 姓氏
  @Column()
  firstname: string;

  // 名字
  @Column()
  lastname: string;

  // 标签
  @Column('simple-array')
  tags: string[];

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
  @OneToOne(type => UserSellerMetadataEntity, UserSellerMetadataEntity => UserSellerMetadataEntity.seller)
  metadata: UserSellerMetadataEntity;

  // 关联商家工作室
  @OneToOne(type => UserSellerStudioEntity, UserSellerStudioEntity => UserSellerStudioEntity.seller)
  studios: UserSellerStudioEntity;

  // @JoinTable({
  //   joinColumn: {
  //     referencedColumnName: 'sellerId'
  //   },
  //   inverseJoinColumn: {
  //     referencedColumnName: 'id'
  //   }
  // })
  // studios: UserSellerStudioEntity[];

  // 关联商家履历
  @OneToMany(type => UserSellerResumeEntity, UserSellerResumeEntity => UserSellerResumeEntity.seller, {
    onDelete: 'CASCADE'
  })
  resumes: UserSellerResumeEntity[];

  // 关联用户
  @OneToOne(type => UserEntity, UserEntity => UserEntity.seller, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'userId'
  })
  user: UserEntity;

  //  关联身份
  // @OneToMany(type => UserIdentityEntity, UserIdentityEntity => UserIdentityEntity.seller)
  // identitys: UserIdentityEntity[];

  // 关联喜欢我的人列表
  @OneToMany(type => MyLikeSellerEntity, MyLikeSellerEntity => MyLikeSellerEntity.seller)
  likeSellers: MyLikeSellerEntity[];

  // 关联商品
  @OneToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.seller)
  commoditys: CommodityEntity[];

  // 关联客服
  @ManyToMany(type => UserCustomerServiceEntity, UserCustomerServiceEntity => UserCustomerServiceEntity.sellers, {
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
  customerServices: UserCustomerServiceEntity[];

  // 关联商家订单
  @ManyToMany(type => OrderEntity, OrderEntity => OrderEntity.sellers)
  orders: OrderEntity[];


}

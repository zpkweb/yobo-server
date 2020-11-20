/**
 * 我的订单
 * 订单状态：待付款，已付款，待收货，待评价，已取消
 */
import { EntityModel } from "@midwayjs/orm";
import { Column, CreateDateColumn, UpdateDateColumn, ManyToOne, PrimaryGeneratedColumn, Generated, ManyToMany, JoinTable, JoinColumn } from "typeorm";
import { UserEntity } from 'src/entity/user/user';
import { CommodityEntity } from 'src/entity/commodity/commodity';

@EntityModel('my_order')
export class MyOrderEntity {
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
  myOrderId: string;

  // 货币
  @Column()
  currency: string;

  // 价格
  @Column()
  price: number;

  // 状态
  @Column()
  status: string;

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

  // 关联用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.myOrders, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  users: UserEntity;

  // 关联商品
  @ManyToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.orders, {
    cascade: true
  })
  @JoinTable({
    joinColumn: {
      referencedColumnName: 'myOrderId'
    },
    inverseJoinColumn: {
      referencedColumnName: 'commodityId'
    }
  })
  commoditys: CommodityEntity[];




}

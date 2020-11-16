/**
 * 订单
 * 订单状态：待付款，已付款，待收货，待评价，已取消
 */
import { EntityModel } from "@midwayjs/orm";
import { Column, ManyToOne, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { UserEntity } from '../user/user';
import { CommodityEntity } from '../commodity/commodity';
import { UserSellerEntity } from '../user/user_seller';

@EntityModel('order')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  // 关联用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.orders)
  users: UserEntity;

  // 关联商品
  @ManyToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.order)
  @JoinTable()
  commoditys: CommodityEntity;

  // 关联卖家
  @ManyToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.orders)
  seller: UserSellerEntity;

  // 日期
  @Column()
  date: number;

  // 货币
  @Column()
  currency: string;

  // 价格
  @Column()
  price: number;

  // 状态
  @Column()
  status: string;

}

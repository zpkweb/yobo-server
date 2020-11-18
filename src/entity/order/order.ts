/**
 * 订单
 * 订单状态：已完成
 */
import { EntityModel } from "@midwayjs/orm";
import { Column, CreateDateColumn, UpdateDateColumn, ManyToOne, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { UserEntity } from '../user/user';
import { CommodityEntity } from '../commodity/commodity';
import { UserIdentitySellerEntity } from '../user/identity/seller';

@EntityModel('order')
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

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
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  // 关联用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.orders)
  users: UserEntity;

  // 关联商品
  @ManyToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.orders)
  @JoinTable()
  commoditys: CommodityEntity;

  // 关联商家
  @ManyToMany(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.orders)
  @JoinTable()
  seller: UserIdentitySellerEntity;


}

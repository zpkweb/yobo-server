/**
 * 购物车
 */
import { EntityModel } from "@midwayjs/orm";
import { CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from '../user/user';
import { CommodityEntity } from '../commodity/commodity';
import { UserIdentitySellerEntity } from '../user/identity/seller';

@EntityModel('my_shoppingCart')
export class MyShoppingCartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  // 关联用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.shoppingCart)
  user: UserEntity;

  // 关联商品
  @ManyToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.shoppingCart)
  @JoinTable()
  commoditys: CommodityEntity;

  // 关联商家
  @ManyToMany(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.orders)
  @JoinTable()
  seller: UserIdentitySellerEntity;



}

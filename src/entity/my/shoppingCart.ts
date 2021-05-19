/**
 * 我的购物车
 */

import { EntityModel } from "@midwayjs/orm";
import { CreateDateColumn, Column, Generated, UpdateDateColumn, ManyToOne, ManyToMany, JoinTable, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { UserEntity } from 'src/entity/user/user';
import { CommodityEntity } from 'src/entity/commodity/commodity';

@EntityModel('my_shoppingCart')
export class MyShoppingCartEntity {

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
  myShoppingCartId: string;

  @Column()
  userId: string;

  @Column()
  commodityid: string;

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
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.shoppingCart, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

  // 关联商品
  @ManyToMany(type => CommodityEntity, CommodityEntity => CommodityEntity.shoppingCart, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinTable({
    joinColumn: {
      referencedColumnName: 'myShoppingCartId'
    },
    inverseJoinColumn: {
      referencedColumnName: 'commodityId'
    }
  })
  commoditys: CommodityEntity[];



}

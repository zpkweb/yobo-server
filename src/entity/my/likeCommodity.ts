
/**
 * 我的喜欢商品
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, Column, Generated, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { CommodityEntity } from 'src/entity/commodity/commodity';

@EntityModel('my_likeCommodity')
export class MyLikeCommodityEntity {

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
  myLikeCommodityId: string;

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
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.likeCommoditys, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'userId'
  })
  user: UserEntity;

  // 关联商品
  @ManyToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.likeCommoditys, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'commodityId'
  })
  commodity: CommodityEntity;

}

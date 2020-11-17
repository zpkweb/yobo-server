
/**
 * 我的喜欢商品
 */

import { EntityModel } from '@midwayjs/orm';
import { PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserEntity } from '../user/user';
import { CommodityEntity } from '../commodity/commodity';

@EntityModel('my_likeCommodity')
export class MyLikeCommodityEntity {

  // 我的喜欢商家 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;

  // 关联用户
  @ManyToOne(type => UserEntity, UserEntity => UserEntity.likeCommoditys)
  user: UserEntity;

  // 关联商品
  @OneToOne(type => CommodityEntity, CommodityEntity => CommodityEntity.likeCommoditys)
  @JoinColumn()
  commodity: CommodityEntity;

}

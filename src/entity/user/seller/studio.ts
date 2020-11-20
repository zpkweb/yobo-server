/**
 * 商家工作室
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { UserIdentitySellerEntity } from './seller';

@EntityModel('user_identity_seller_studio')
export class UserIdentitySellerStudioEntity {

  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number;

  // 名称
  @Column()
  name: string;

  // 图片
  @Column()
  photo: string;

  // 视频
  @Column()
  video: string;

  // 简介
  @Column()
  text: string;

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



  // 关联商家
  @ManyToMany(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.studios)
  seller: UserIdentitySellerEntity[];
}

/**
 * 商家工作室
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, ManyToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { UserSellerEntity } from './seller';

@EntityModel('user_seller_studio')
export class UserSellerStudioEntity {

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
  @ManyToMany(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.studios,{
    onDelete: 'CASCADE'
  })
  seller: UserSellerEntity[];
}

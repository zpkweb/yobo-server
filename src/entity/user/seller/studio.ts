/**
 * 商家工作室
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { UserSellerEntity } from './seller';

@EntityModel('user_seller_studio')
export class UserSellerStudioEntity {

  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number;

  @Column()
  sellerId: string;

  // banner
  @Column()
  banner: string;

  // 名称
  @Column()
  name: string;

  // 简介
  @Column()
  introduce: string;

  // 图片
  @Column()
  photo: string;

  // 视频
  @Column()
  video: string;

  @Column()
  ccId: string;

  @Column()
  siteId: string;

  @Column()
  videoPhoto: string;



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
  @OneToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.studio,{
    cascade: true,
    onDelete: 'CASCADE'
  })

  seller: UserSellerEntity;
}

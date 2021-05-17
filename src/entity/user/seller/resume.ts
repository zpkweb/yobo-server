/**
 * 商家履历
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, OneToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { UserSellerEntity } from './seller';

@EntityModel('user_seller_resume')
export class UserSellerResumeEntity {

  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number;

  // 履历
  @Column({
    type: 'text'
  })
  resume: string;

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
  @OneToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.resume, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'sellerId',
    referencedColumnName: 'sellerId'
  })
  seller: UserSellerEntity;

}

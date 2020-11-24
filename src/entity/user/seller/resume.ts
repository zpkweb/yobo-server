/**
 * 商家履历
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { UserSellerEntity } from './seller';

@EntityModel('user_seller_resume')
export class UserSellerResumeEntity {

  @PrimaryGeneratedColumn({
    type: 'bigint'
  })
  id: number;

  // 年
  @Column()
  year: string;

  // 事
  @Column()
  something: string;

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
  @ManyToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.resumes, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'sellerId'
  })
  seller: UserSellerEntity;

}

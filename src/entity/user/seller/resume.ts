/**
 * 商家履历
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn } from "typeorm";
import { UserIdentitySellerEntity } from './seller';

@EntityModel('user_identity_seller_resume')
export class UserIdentitySellerResumeEntity {

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
  @ManyToOne(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.resumes, {
    cascade: true
  })
  @JoinColumn({
    referencedColumnName: 'sellerId'
  })
  seller: UserIdentitySellerEntity;

}

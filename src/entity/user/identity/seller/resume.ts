/**
 * 商家履历
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { UserIdentitySellerEntity } from '../seller';

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

  // 关联商家
  @OneToOne(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.resume)
  @JoinColumn()
  seller: UserIdentitySellerEntity;

}

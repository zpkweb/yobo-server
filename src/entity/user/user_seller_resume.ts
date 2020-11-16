/**
 * 卖家履历
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { UserSellerEntity } from './user_seller';

@EntityModel('user_seller_resume')
export class UserSellerResumeEntity {

  @PrimaryGeneratedColumn({
    type: 'bigint'
  })

  // 年
  @Column()
  year: string;

  // 事
  @Column()
  something: string;

  // 关联卖家
  @OneToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.resume)
  @JoinColumn()
  seller: UserSellerEntity;

}

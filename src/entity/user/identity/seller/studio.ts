/**
 * 商家工作室
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { UserIdentitySellerEntity } from '../seller';

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

  // 关联商家
  @OneToMany(type => UserIdentitySellerEntity, UserIdentitySellerEntity => UserIdentitySellerEntity.studio)
  seller: UserIdentitySellerEntity;
}

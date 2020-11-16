/**
 * 卖家工作室
 */

import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { UserSellerEntity } from './user_seller';

@EntityModel('user_seller_studio')
export class UserSellerStudioEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint'
  })

  // 名称
  @Column()
  name: string;

  // 图片
  @Column()
  photo: string;

  // 视频
  @Column()
  video: string;

  // 关联卖家
  @OneToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.studio)
  @JoinColumn()
  seller: UserSellerEntity;
}

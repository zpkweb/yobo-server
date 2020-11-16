/**
 * 卖家信息
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { UserSellerEntity } from './user_seller';

@EntityModel('user_seller_metadata')
export class UserSellerMetadataEntity {

  // 用户信息 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 关联卖家
  @OneToOne(type => UserSellerEntity, UserSellerEntity => UserSellerEntity.metadata)
  @JoinColumn()
  seller: UserSellerEntity;

  // 语言
  @Column()
  language: string;

  // 您是如何发现我们的
  @Column()
  findUs: string;

  // 您是一个全职的专业艺术家么？
  @Column()
  isFullTime: boolean;

  // 售出的作品中，网上售出的比例占多少？
  @Column()
  onlineSell: string;

  // 您在过去一年里售出多少件自己的作品？
  @Column()
  sold: number;

  // 如果您在网上售出过作品，是通过什么渠道呢？
  @Column()
  channel: string;

  // 如有其他画廊已合作，是哪一家（方便我们更全面了解您）
  @Column()
  gallery: string;

  // 主要媒介
  @Column()
  medium: string;

  // 您是画廊代表人吗？请告知您的画廊名称，城市，国家
  @Column()
  galleryInfo: string;

  // 最值得一看的展览/画廊/机构名称，城市，国家
  @Column()
  recommend: string;

  // 最引人注目的奖项/奖项名称，获得年份
  @Column()
  prize: string;

  // 连接到网站
  @Column()
  website: string;

  // 用户简介
  @Column()
  profile: string;


}

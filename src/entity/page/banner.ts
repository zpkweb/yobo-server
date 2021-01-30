/**
 * 用户地址
 */

import { EntityModel,  } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Generated } from 'typeorm';

@EntityModel('page_banner')
export class PageBannerEntity {

  // 自增主键id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // id
  @Column({
    unique: true
  })
  @Generated('uuid')
  bannerId: string;

  // 路径
  @Column()
  src: string;

  // 标题
  @Column()
  title: string;

  // 子标题
  @Column()
  subTitle: string;

  // 描述
  @Column()
  desc: string;


  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn()
  updatedDate: Date;



}

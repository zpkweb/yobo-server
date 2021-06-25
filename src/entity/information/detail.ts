// 资讯 详情
import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { InformationEntity } from "./information";

@EntityModel('information_detail')
export class InformationDetailEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'text'
  })
  'zh-cn': string;

  @Column({
    type: 'text'
  })
  'en-us': string;

  @Column({
    type: 'text'
  })
  'ja-jp': string;

  @Column({
    type: 'text'
  })
  'es-es': string;

  // 关联资讯
  @OneToOne(type => InformationEntity, InformationEntity => InformationEntity.detail)
  @JoinColumn({
    name: 'informationId'
  })
  information: InformationEntity;

  // 是否删除
  @Column({
    select: false
  })
  isDelete: boolean;

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

}

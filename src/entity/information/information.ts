// 资讯
import { EntityModel } from "@midwayjs/orm";
import { Column, Generated, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany } from "typeorm";
import { InformationDetailEntity } from "./detail";
import { InformationVideoEntity } from "./video";

@EntityModel()
export class InformationEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  @Generated('uuid')
  informationId: string;


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

  // 关联资讯详情
  @OneToOne(type => InformationDetailEntity, InformationDetailEntity => InformationDetailEntity.information)
  detail: InformationDetailEntity;

  // 关联资讯视频
  @OneToMany(type => InformationVideoEntity, InformationVideoEntity => InformationVideoEntity.information)
  video: InformationVideoEntity[];

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

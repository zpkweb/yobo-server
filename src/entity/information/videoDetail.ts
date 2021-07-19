// 资讯 详情
import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { InformationVideoEntity } from "./video";

@EntityModel('information_video_detail')
export class InformationVideoDetailEntity {

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

  // 关联资讯视频
  @OneToOne(type => InformationVideoEntity, InformationVideoEntity => InformationVideoEntity.detail)
  @JoinColumn({
    name: 'informationVideoId'
  })
  video: InformationVideoEntity;

}

// 资讯 视频
import { EntityModel } from "@midwayjs/orm";
import { Column, Generated, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, OneToOne } from "typeorm";
import { InformationEntity } from "./information";
import { InformationCommentEntity } from './comment';
import { InformationVideoDetailEntity } from './videoDetail';

@EntityModel('information_video')
export class InformationVideoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  @Generated('uuid')
  videoId: string;

  // 视频
  @Column()
  videoSrc: string;

  @Column()
  ccId: string;

  @Column()
  siteId: string;

  @Column()
  videoPhoto: string;

  @Column()
  isTop: boolean;

  // 视频观看人数
  @Column()
  watchs: number;

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
  @ManyToOne(type => InformationEntity, InformationEntity => InformationEntity.videos)
  information: InformationEntity;

  // 关联视频评论
  @OneToMany(type => InformationCommentEntity, InformationCommentEntity => InformationCommentEntity.video)
  comments: InformationCommentEntity[];

  // 关联视频详情
  @OneToOne(type => InformationVideoDetailEntity, InformationVideoDetailEntity => InformationVideoDetailEntity.video)
  detail: InformationVideoDetailEntity;

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

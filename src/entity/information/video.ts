// 资讯 视频
import { EntityModel } from "@midwayjs/orm";
import { Column, Generated, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { InformationEntity } from "./information";
import { InformationCommentEntity } from './comment';

@EntityModel()
export class InformationVideoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  @Generated('uuid')
  informationVideoId: string;

  // 视频
  @Column()
  video: string;

  @Column()
  ccId: string;

  @Column()
  siteId: string;

  @Column()
  videoPhoto: string;

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

  // 资讯id
  @Column()
  informationId: string;

  // 关联资讯
  @ManyToOne(type => InformationEntity, InformationEntity => InformationEntity.video)
  information: InformationEntity;

  // 关联视频评论
  @OneToMany(type => InformationCommentEntity, InformationCommentEntity => InformationCommentEntity.video)
  comments: InformationCommentEntity[];

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

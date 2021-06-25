// 资讯 视频 评论
import { EntityModel } from "@midwayjs/orm";
import { Column, Generated, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from "typeorm";
import { InformationVideoEntity } from "./video";
import { InformationReplyEntity } from "./reply";
@EntityModel('information_comment')
export class InformationCommentEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  @Generated('uuid')
  commentId: string;

  // 评论内容
  @Column({
    type: 'text'
  })
  content: string;

  // 评论者
  @Column()
  userId: string;

  // 视频id
  @Column()
  videoId: string;

  // // 点赞数
  // @Column()
  // likes: number;

  // 关联视频
  @ManyToOne(type => InformationVideoEntity, InformationVideoEntity => InformationVideoEntity.comments)
  video: InformationVideoEntity;

  // 关联回复
  @OneToMany(type => InformationReplyEntity, InformationReplyEntity => InformationReplyEntity.comment)
  replys: InformationReplyEntity[];



  // 是否展示
  @Column({
    select: false
  })
  isShow: boolean;

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

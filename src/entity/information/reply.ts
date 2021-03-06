// 资讯 评论 回复
import { EntityModel } from "@midwayjs/orm";
import { Column, Generated, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { InformationCommentEntity } from "./comment"
// import { InformationVideoEntity } from "./video"

@EntityModel('information_reply')
export class InformationReplyEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  @Generated('uuid')
  replyId: string;

  // 回复内容
  @Column({
    type: 'text'
  })
  content: string;

  // 回复人
  @Column()
  replyUserId: string;

  @Column()
  replyUserName: string;

  // 回复者
  @Column()
  userId: string;

  @Column()
  userName: string;

  // 评论id
  @Column()
  commentId: string;

  // // 点赞数
  @Column()
  likes: number;

  // 回复数
  @Column()
  replyNums: number;

  // 关联评论
  @ManyToOne(type => InformationCommentEntity, InformationCommentEntity => InformationCommentEntity.replys)
  @JoinColumn({
    name: 'informationCommentId'
  })
  comment: InformationCommentEntity;

  // 关联视频
  // @ManyToOne(type => InformationVideoEntity, InformationVideoEntity => InformationVideoEntity.replys)
  // video: InformationVideoEntity;

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

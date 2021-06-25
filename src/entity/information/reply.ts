// 资讯 评论 回复
import { EntityModel } from "@midwayjs/orm";
import { Column, Generated, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { InformationCommentEntity } from "./comment"
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
  replyUser: string;

  // 回复者
  @Column()
  userId: string;

  // 评论id
  @Column()
  commentId: string;

  // 关联评论
  @ManyToOne(type => InformationCommentEntity, InformationCommentEntity => InformationCommentEntity.replys)
  comment: InformationCommentEntity;

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

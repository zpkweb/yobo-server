// 资讯 评论 回复
import { EntityModel } from "@midwayjs/orm";
import { Column, Generated, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@EntityModel()
export class InformationReplyEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  @Generated('uuid')
  informationReplyId: string;

  // 回复内容
  @Column({
    type: 'text'
  })
  content: string;

  // 回复人
  @Column()
  userId: string;

  // 是否展示
  @Column({
    select: false
  })
  isShow: boolean;

  // 评论id

  // 关联评论

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

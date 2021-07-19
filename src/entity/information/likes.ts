// 资讯 点赞
import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@EntityModel('information_likes')
export class InformationLikesEntity {

  @PrimaryGeneratedColumn()
  id: number;

  // 类型 点赞：评论，回复
  @Column()
  type: string;

  // id
  @Column()
  typeId: string;

  // 用户id
  @Column()
  userId: string;

  @Column()
  userName: string;

  // 是否取消
  @Column({
    select: false
  })
  isCancel: boolean;

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

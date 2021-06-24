// 资讯 视频 评论
import { EntityModel } from "@midwayjs/orm";
import { Column, Generated, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { InformationVideoEntity } from "./video";

@EntityModel()
export class InformationCommentEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  @Generated('uuid')
  informationCommentId: string;

  // 评论
  @Column({
    type: 'text'
  })
  content: string;

  // 评论人
  @Column()
  userId: string;

  // 视频id
  @Column()
  videoId: string;

  // 关联视频
  @ManyToOne(type => InformationVideoEntity, InformationVideoEntity => InformationVideoEntity.video)
  video: InformationVideoEntity;



  // 是否展示
  @Column({
    select: false
  })
  isShow: boolean;


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

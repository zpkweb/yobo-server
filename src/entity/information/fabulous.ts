// 资讯 点赞
import { EntityModel } from "@midwayjs/orm";
import { Column, Generated, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@EntityModel()
export class InformationFabulousEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  @Generated('uuid')
  informationFabulousId: string;

  // 类型 点赞：评论，回复
  @Column()
  type: string;

  // 用户id
  @Column()
  userId: string;

  // id
  @Column()
  typeId: string;

  // 是否取消
  @Column({
    select: false
  })
  isCancel: boolean;

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

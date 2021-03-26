import { EntityModel } from "@midwayjs/orm";
import { Column, JoinColumn, CreateDateColumn, UpdateDateColumn, Generated, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { UserEntity } from 'src/entity/user/user';

@EntityModel("subscriber")
export class SubscriberEntity {

  @PrimaryGeneratedColumn({
    type: "bigint"
  })
  id: number;

  @Column({
    unique: true
  })
  @Generated('uuid')
  subscriberId: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  userName: string;

  @Column()
  userEmail: string;

  @Column()
  userPhone: string;

  @ManyToOne(type => UserEntity, UserEntity => UserEntity.subscriber, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  @JoinColumn({
    name: 'userId',
    referencedColumnName: 'userId'
  })
  user: UserEntity;


  //  创建日期
  @CreateDateColumn()
  createdDate: Date;

  // 更新日期
  @UpdateDateColumn({
    select: false
  })
  updatedDate: Date;

}

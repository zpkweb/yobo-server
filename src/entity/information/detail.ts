// 资讯 详情
import { EntityModel } from "@midwayjs/orm";
import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";
import { InformationEntity } from "./information";

@EntityModel()
export class InformationDetailEntity {

  @PrimaryGeneratedColumn()
  id: number;

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
  @OneToOne(type => InformationEntity, InformationEntity => InformationEntity.detail)
  information: InformationEntity;

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

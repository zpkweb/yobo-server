/**
 * 用户身份列表
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { UserIdentityEntity } from './identity';
@EntityModel('user_identity_list')
export class UserIdentityListEntity {

  // 用户身份列表 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 身份名称
  @Column()
  name: string;

  // 英文身份名称
  @Column()
  ename: string;

  // 菜单
  @Column({
    type: 'text'
  })
  menu: string;


  // 身份序号
  @Column()
  index: number;

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

  // 关联用户身份
  @OneToMany(type => UserIdentityEntity, UserIdentityEntity => UserIdentityEntity.identityList)
  identitys: UserIdentityEntity[];

}

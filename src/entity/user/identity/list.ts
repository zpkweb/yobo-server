/**
 * 用户身份列表
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserIdentityEntity } from 'src/entity/user/identity';
@EntityModel('user_identity_list')
export class UserIdentityListEntity {

  // 用户身份列表 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 身份名称
  @Column()
  name: string;

  // 身份序号
  @Column()
  index: number;

  // 关联用户身份
  @OneToOne(type => UserIdentityEntity, UserIdentityEntity => UserIdentityEntity.identity)
  identity: UserIdentityEntity;

}

/**
 * 用户身份列表
 */

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@EntityModel('user_identity_list')
export class UserIdentityEntity {

  // 用户地址 id
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  // 级别名称
  @Column()
  name: string;

  // 级别序号
  @Column()
  index: number;

}

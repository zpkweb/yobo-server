

 import { EntityModel } from '@midwayjs/orm';
 import { PrimaryGeneratedColumn, Generated, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

 @EntityModel('message')
 export class MessageEntity {

   // 自增主键
   @PrimaryGeneratedColumn({
     type: 'bigint'
   })
   id: number;

   // messageId
   @Column({
     unique: true
   })
   @Generated('uuid')
   messageId: string;

   // href
   @Column()
   href: string;

   // 消息类型
   @Column()
   type: string;

   // 发消息的主体
   @Column()
   owner: string;

   // 消息标题
   @Column()
   title: string;

   // 消息内容
   @Column({
     type: 'text'
   })
   content: string;

   // 消息内容带html
   @Column({
    type: 'text'
  })
  contentHtml: string;

  // 删除
  @Column()
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

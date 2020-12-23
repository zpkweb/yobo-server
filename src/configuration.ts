// configuration.ts
import { Configuration, Inject } from '@midwayjs/decorator';
import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import * as swagger from '@midwayjs/swagger';
import { IdentityListService } from 'src/service/user/identityList';
@Configuration({
  imports: [
    '@midwayjs/orm',
    swagger
  ]
})

export class ContainerConfiguration implements ILifeCycle {

  @Inject()
  identityListService: IdentityListService;
  async onReady(container: IMidwayContainer): Promise<void> {
    console.log("onReady")
    // createIdentityList;
    const identityList:any = await this.identityListService.retrieveIdentityList();

    if(identityList.data && !identityList.data.length){
      await this.identityListService.createIdentityList([{
        "name": "超级管理员",
        "ename": "superAdmin",
        "index": 1
      },{
        "name": "管理员",
        "ename": "admin",
        "index": 2
      },{
        "name": "客服",
        "ename": "customerService",
        "index": 3
      },{
        "name": "艺术家",
        "ename": "seller",
        "index": 5
      },{
        "name": "会员",
        "ename": "member",
        "index": 70
      },{
        "name": "用户",
        "ename": "ordinary",
        "index": 80
      },{
        "name": "第三方用户",
        "ename": "thirdParty",
        "index": 90
      }])
    }
  }
}


// export class ContainerConfiguratin implements ILifeCycle {
//   // @Inject()
//   // identityService: IdentityService;

//   async onReady(container: IMidwayContainer): Promise<void> {
//     console.log("onReady", container)

//   }
// }







/*
// configuration.ts
import { Configuration, Inject } from '@midwayjs/decorator';
import { ILifeCycle, IMidwayContainer } from '@midawyjs/core';
import { IdentityService } from 'src/service/user/identity';

@Configuration({
  imports: [
    '@midwayjs/orm'  					// 加载 orm 组件
  ]
})
export class ContainerConfiguratin implements ILifeCycle {
  @Inject()
  identityService: IdentityService;

  async onReady(container: IMidwayContainer): Promise<void> {
    console.log("onReady", container)

    await this.identityService.createIdentityList([{
      "name": "超级管理员",
      "index": 1
    },{
      "name": "管理员",
      "index": 2
    },{
      "name": "客服",
      "index": 3
    },{
      "name": "商家",
      "index": 5
    },{
      "name": "会员",
      "index": 70
    },{
      "name": "用户",
      "index": 80
    },{
      "name": "第三方用户",
      "index": 90
    }])

  }
}
*/

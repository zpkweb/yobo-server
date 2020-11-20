// configuration.ts
import { Configuration } from '@midwayjs/decorator';

@Configuration({
  imports: [
    '@midwayjs/orm'  					// 加载 orm 组件
  ]
})
export class ContainerConfiguratin {


}


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

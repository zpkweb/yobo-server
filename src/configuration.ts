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
        "zh-cn": "超级管理员",
        "en-us": "superAdmin",
        "ja-jp": "スーパーアドミニストレーター",
        "fr-fr": "Super administrateur",
        "index": 1
      },{
        "zh-cn": "管理员",
        "en-us": "admin",
        "ja-jp": "管理者",
        "fr-fr": "administrateur",
        "index": 2
      },{
        "zh-cn": "客服",
        "en-us": "customerService",
        "ja-jp": "顧客サービス",
        "fr-fr": "Service Clients",
        "index": 3
      },{
        "zh-cn": "艺术家",
        "en-us": "seller",
        "ja-jp": "アーティスト",
        "fr-fr": "artiste",
        "index": 5
      },{
        "zh-cn": "会员",
        "en-us": "member",
        "ja-jp": "メンバー",
        "fr-fr": "membre",
        "index": 70
      },{
        "zh-cn": "用户",
        "en-us": "ordinary",
        "ja-jp": "ユーザー",
        "fr-fr": "utilisateur",
        "index": 80
      },{
        "zh-cn": "第三方用户",
        "en-us": "thirdParty",
        "ja-jp": "サードパーティユーザー",
        "fr-fr": "Utilisateur tiers",
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






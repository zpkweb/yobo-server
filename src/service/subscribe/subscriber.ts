import { Inject, Provide } from "@midwayjs/decorator";
import { BaseSubscriberService } from "src/service/base/subscribe/subscriber";
import { UserService } from "src/service/user/user"

@Provide()
export class SubscriberService {

  @Inject()
  baseSubscriberService: BaseSubscriberService;

  @Inject()
  userService: UserService;

  async create(payload) {
    // 查询邮箱是否订阅
    const hasEmail = await this.retrieveEmail(payload.email);

    // 已订阅
    if(hasEmail.success){
      return {
        success: false,
        code: 10701
      }
    }

    // 未订阅
    // 通过userId查找用户
    const user = await this.userService.hasUser(payload.userId);
    // 未找到用户
    if(!user.success){
      return {
        success: false,
        code: 10202
      }
    }
    // 找到用户,
    // 创建订阅
    const subscriber = await this.baseSubscriberService.BaseCreate({
      email: payload.email,
      userName: user.data.name,
      userEmail: user.data.email,
      userPhone: user.data.phone
    })
    if(subscriber.identifiers[0].id){
      // return await this.retrieveEmail(payload.email)
      // 关联用户
      await this.baseSubscriberService.BaseRelationSet({
        name: 'user',
        of: subscriber.identifiers[0].id,
        set: { userId: payload.userId }
      })

      return {
        success: true,
        code: 10702
      }
    }else{
      return {
        success: false,
        code: 10703
      }
    }

  }

  async retrieve({
    email = '',
    userId = ''
  } = {}) {
    if(email) {
      return await this.retrieveEmail(email);
    }else if(userId) {
      return await this.retrieveUserId(userId);
    }else{
      return await this.retrieveAll();
    }

  }
  async retrieveEmail(email) {
    const retrieve = await this.baseSubscriberService.BaseRetrieveEmail(email);
    if (retrieve) {
      return {
        data: retrieve,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }
  async retrieveUserId(userId) {
    const retrieve = await this.baseSubscriberService.BaseRetrieveUserId(userId);
    if (retrieve) {
      return {
        data: retrieve,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }
  async retrieveEmailUserId(payload) {
    const retrieve = await this.baseSubscriberService.BaseRetrieveEmailUserId(payload);
    if (retrieve) {
      return {
        data: retrieve,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }
  async retrieveAll() {
    const retrieve = await this.baseSubscriberService.BaseRetrieve();
    if (retrieve) {
      return {
        data: retrieve,
        success: true,
        code: 10009
      }
    } else {
      return {
        success: false,
        code: 10010
      }
    }
  }


  async delete({
    email = '',
    userId = ''
  } = {}) {
    if(email) {
      return await this.deleteEmail(email);
    }else if(userId) {
      return await this.deleteUserId(userId);
    }else{
      return await this.deleteAll();
    }
  }
  async deleteEmail(email) {
    const data = await this.baseSubscriberService.BaseDeleteEmail(email);
    if (data.affected) {
      return {
        data: data,
        success: true,
        code: 10005
      }
    } else {
      return {
        success: false,
        code: 10006
      }
    }
  }
  async deleteUserId(userId) {
    const data = await this.baseSubscriberService.BaseDeleteUserId(userId);
    if (data.affected) {
      return {
        data: data,
        success: true,
        code: 10005
      }
    } else {
      return {
        success: false,
        code: 10006
      }
    }
  }

  async deleteAll() {
    const data = await this.baseSubscriberService.BaseDelete();
    if (data.affected) {
      return {
        data: data,
        success: true,
        code: 10005
      }
    } else {
      return {
        success: false,
        code: 10006
      }
    }
  }

}

import { Config, Inject, Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserEntity } from 'src/entity/user/user';
import { BaseUserServer } from "../base/user/user";
import { IdentityListService } from './identityList';

@Provide()
export class LoginService {

  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  @Inject()
  baseUserServer: BaseUserServer;

  @Inject()
  identityListService: IdentityListService;

  @Config('root')
  root;

  /**
   * 验证密码是否正确
   * @param payload
   * userId
   * password
   */
  async validatePassword(payload) {
    const validataPassword = await this.baseUserServer.baseValidatePassword(payload);

    if(validataPassword){
      return {
        success: true,
        code: 10206
      }
    }else{
      return {
        success: false,
        code: 10204
      }
    }
  }


  /**
   * 登录
   * @param payload email/phone password
   */
  async login(payload) {
    // 查找用户
    const user:any = await this.baseUserServer.baseLoginUser(payload)

    if(!user){
      // 用户不存在
      return {
        success: false,
        code: 10202
      }
    }
    console.log("login", user)
    // 判断用户密码是否正确
    const userPassword = await this.validatePassword({
      userId: user.userId,
      password: payload.password
    })

    if(userPassword.success){
      return {
        data: user,
        success: true,
        code: 10011
      };
    }else{
      return userPassword
    }

  }

  /**
   * 后台登录
   * @param payload
   */
  async adminLogin(payload) {
    if(payload.name === this.root.name && payload.password === this.root.password){
      return {
        data:{
          name: payload.name
        },
        success: true,
        code: 10011
      };
    }
    // 后台管理登录

    const user:any = await this.baseUserServer.baseLoginAdmin(payload)
    console.log("user", user)

    if(!user){
      // 用户不存在
      return {
        success: false,
        code: 10202
      }
    }

    // 判断用户密码是否正确
    const userPassword = await this.validatePassword({
      userId: user.userId,
      password: payload.password
    })
    if(!userPassword.success){
      return userPassword
    }

    // 判断用户权限
    if(user.identitys && !user.identitys.length){
      // 用户还没有设置权限
      return {
        success: false,
        code: 10207
      }
    }

    let loginAuth = false;
    let authMax = 100;
    for(let item of user.identitys){
      if(item.index < 5){
        loginAuth = true;
        if(item.index < authMax){
          authMax = item.index;
        }
      }
    }
    if(loginAuth){
      // 获取当前用户身份的权限菜单
      console.log("user.identitys", user.identitys)
      const menu:any = await this.identityListService.retrieveIdentityList({
        index: authMax
      })
      if(!menu.success){
        return menu;
      }
      return {
        data: {
          ...user,
          menu: menu.data.menu
        },
        success: true,
        code: 10011
      };
    }else{
      // 用户没有权限登录
      return {
        success: false,
        code: 10203
      }
    }



  }
}

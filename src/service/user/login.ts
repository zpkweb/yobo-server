import { Config, Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserEntity } from 'src/entity/user/user';
import * as crypto from 'crypto';

@Provide()
export class LoginService {

  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  @Config('root')
  root;

  /**
   * 登录
   * @param payload email/phone password
   */
  async login(payload) {
    // 查找用户
    const user = await this.userEntity
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.identitys', 'identitys')
      // .where("user.phone = :phone OR user.email = :email", { phone: payload.phone, email: payload.email })
      .where("user.name = :name", { name: payload.name })
      .getOne();

    if(!user){
      // 用户不存在
      return {
        success: false,
        code: 10202
      }
    }

    const userPassword = await this.userEntity
      .createQueryBuilder('user')
      .addSelect("user.password")
      .where("user.id = :id", { id: user.id })
      .andWhere("user.password = :password", { password: crypto.createHash('md5').update(payload.password).digest('hex') })
      .getOne();
    if(!userPassword){
      // 用户密码不正确
      return {
        success: false,
        code: 10204
      }
    }
    return {
      data: user,
      success: true,
      code: 10011
    };
  }

  /**
   * 后台登录
   * @param payload
   */
  async adminLogin(payload) {
    console.log('adminLogin', payload, this.root)
    if(payload.name === this.root.name && payload.password === this.root.password){
      return {
        data:{
          name: payload.name
        },
        success: true,
        code: 10011
      };
    }
    // 查找用户
    const user = await this.userEntity
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.identitys', 'identitys')
      .where("user.name = :name", { name: payload.name })
      // .andWhere('identity.index < :index', { index : 5 })
      .getOne();
    console.log("user", user)

    if(!user){
      // 用户不存在
      return {
        success: false,
        code: 10202
      }
    }
    // 判断用户权限
    if(user.identitys && !user.identitys.length){
      // 用户没有权限
      return {
        success: false,
        code: 10203
      }
    }
    for(let item of user.identitys){
      console.log("user identity", item)
      if(item.index > 3){
        // 用户没有权限
        return {
          success: false,
          code: 10203
        }
      }
    }


    // 判断密码是否正确
    const userPassword = await this.userEntity
      .createQueryBuilder('user')
      .addSelect("password")
      .where("id = :id", { id: user.id })
      .andWhere("password = :password", { password: crypto.createHash('md5').update(payload.password).digest('hex') })
      .getOne();
    if(!userPassword){
      // 用户密码不正确
      return {
        success: false,
        code: 10204
      }
    }
    return {
      data: user,
      success: true,
      code: 10011
    };
  }
}

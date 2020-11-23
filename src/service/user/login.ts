import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserEntity } from 'src/entity/user/user';

@Provide()
export class LoginService {

  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  /**
   * 登录
   * @param payload email/phone password
   */
  async login(payload) {
    const user = await this.userEntity
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.identitys', 'identitys')
      .where("user.phone = :phone OR user.email = :email", { phone: payload.phone, email: payload.email })
      .getOne();
    console.log("user", user)
    if(!user){
      return {
        code: 10102
      }
    }
    const userPassword = await this.userEntity
    .createQueryBuilder('user')
    .addSelect("user.password")
    .where("user.id = :id", { id: user.id })
    .andWhere("user.password = :password", { password: payload.password })
    .getOne();
    if(!userPassword){
      return {
        code: 10103
      }
    }
    return user;
  }
}

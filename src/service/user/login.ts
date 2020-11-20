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
    return await this.userEntity
      .createQueryBuilder('user')
      .where("user.name = :name", { name: payload.name })
      .andWhere("user.phone = :phone OR user.email = :email", { phone: payload.phone, email: payload.email })
      .getOne();
  }
}

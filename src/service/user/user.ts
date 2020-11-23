import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserIdentityEntity } from 'src/entity/user/identity/identity';
import { UserIdentityListEntity } from 'src/entity/user/identity/list';
@Provide()
export class UserService {
  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  @InjectEntityModel(UserIdentityEntity)
  userIdentityEntity: Repository<UserIdentityEntity>;

  @InjectEntityModel(UserIdentityListEntity)
  userIdentityListEntity: Repository<UserIdentityListEntity>;

  // 删除用户
  async remove(id) {
    if (id) {
      await this.userEntity
        .createQueryBuilder('user')
        .delete()
        .where("user.id = :id", { id: id })
        .execute();
    } else {
      await this.userEntity
        .createQueryBuilder('user')
        .delete()
        .execute();
    }
  }

  // 更新用户
  async update(payload) {

  }

  /**
   * 查找用户
   * @param payload type userId
   * type: identitys
   */
  async find(payload) {
    if(payload.userId && payload.type){
      return await this.userEntity
      .createQueryBuilder('user')
      .leftJoinAndSelect(`user.${payload.type}`, payload.type)
      .where("user.userId = :userId", { userId: payload.userId })
      .getOne();
    }else if(payload.userId && !payload.type){
      return await this.userEntity
      .createQueryBuilder('user')
      .where("user.userId = :userId", { userId: payload.userId })
      .getOne();
    }else if(!payload.id && payload.type){
      return await this.userEntity
      .createQueryBuilder('user')
      .leftJoinAndSelect(`user.${payload.type}`, payload.type)
      .getMany();
    }else{
      return await this.userEntity
      .createQueryBuilder('user')
      .addSelect("user.password")
      .getMany();
    }
  }

  /**
   * 修改密码
   */

  async changePassword(payload) {
    await this.userEntity
      .createQueryBuilder('user')
      .update(UserEntity)
      .set({ password: payload.password })
      .where("user.phone = :phone OR user.email = :email", { phone: payload.phone, email: payload.email })
      .execute();
  }
}

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

  async find(userId) {
    if (userId) {
      return await this.userEntity
        .createQueryBuilder('user')
        .where("user.userId = :userId", { userId: userId })
        .getOne();
    } else {
      return await this.userEntity
      .createQueryBuilder('user')
      .getMany();
    }
  }

}

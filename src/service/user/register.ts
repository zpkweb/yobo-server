import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/entity/user/user';
import { UserIdentityEntity } from 'src/entity/user/identity';
import { UserIdentityListEntity } from 'src/entity/user/identity/list';
@Provide()
export class UserRegisterService {
  @InjectEntityModel(UserEntity)
  userEntity: Repository<UserEntity>;

  @InjectEntityModel(UserIdentityEntity)
  userIdentityEntity: Repository<UserIdentityEntity>;

  @InjectEntityModel(UserIdentityListEntity)
  userIdentityListEntity: Repository<UserIdentityListEntity>;

  // 创建普通用户 user 用户数据 姓名 手机/邮箱 密码
  async register(payload) {
    console.log("createUser")
    console.log(payload)

    // 查找用户
    let user: any = await this.userEntity
      .createQueryBuilder('user')
      .where("user.email = :email OR user.phone = :phone", { email: payload.email, phone: payload.phone })
      .getOne();
    console.log(user)

    if(user){
      return "用户已注册"
    }else{
      // 创建用户
      await this.userEntity
        .createQueryBuilder()
        .insert()
        .into(UserEntity)
        .values({
          name: payload.name,
          phone: payload.phone || '',
          email: payload.email || '',
          password: payload.password
        })
        .execute()
        .then((res) => {
          console.log(res)
          user = res.identifiers[0];
        })

      // 通过用户身份列表获取普通用户身份
      let identityList: any = await this.userIdentityListEntity
        .createQueryBuilder('identityList')
        .where("identityList.index = :index", {index: 80})
        .getOne();
      console.log("identityList", identityList)

      // 创建普通用户身份
      let identity: any = await this.userIdentityEntity
        .createQueryBuilder()
        .insert()
        .into(UserIdentityEntity)
        .values({
          name: identityList.name,
          index: identityList.index
        })
        .execute()
        // .then((res) => {
        //   console.log(res)
        //   identity = res.identifiers[0];
        // })
      console.log("identity", identity)

      // 普通用户身份 关联 身份列表
      await this.userIdentityEntity
        .createQueryBuilder()
        .relation(UserIdentityEntity, "identity")
        .of(identity.identifiers[0].id)
        .set(identityList.id);

      // 用户 关联 普通用户身份
      await this.userEntity
        .createQueryBuilder()
        .relation(UserEntity, "identitys")
        .of(user.id)
        .add(identity.identifiers[0].id);

      console.log("user.id", user.id)
      return await this.userEntity
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.identitys', 'identitys')
        .where("user.id = :id", { id: user.id })
        .getOne();
    }

  }

  // 申请成为艺术家
  async applySeller(payload) {

  }






}

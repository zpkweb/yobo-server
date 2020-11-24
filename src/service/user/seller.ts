import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository } from "typeorm";
import { UserSellerEntity } from 'src/entity/user/seller/seller';

@Provide()
export class SellerService {

  @InjectEntityModel(UserSellerEntity)
  userSellerEntity: Repository<UserSellerEntity>;

  /**
   * 搜索
   * @param payload
   */
  async search(payload) {

    return await this.userSellerEntity
        .createQueryBuilder('seller')
        .getMany();

  }
}

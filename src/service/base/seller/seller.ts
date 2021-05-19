import { Provide } from "@midwayjs/decorator";
import { InjectEntityModel } from "@midwayjs/orm";
import { Repository, Like } from "typeorm";
import { UserSellerEntity } from "src/entity/user/seller/seller";
import { CommodityPhotoEntity } from 'src/entity/commodity/attribute/photo';
import { CommodityNameEntity } from 'src/entity/commodity/attribute/name';


@Provide()
export class BaseSellerServer {

  @InjectEntityModel(UserSellerEntity)
  userSellerEntity: Repository<UserSellerEntity>


  // 关联
  async relation(payload) {
    // console.log("关联 relation", payload)
    return await this.userSellerEntity
      .createQueryBuilder()
      .relation(UserSellerEntity, payload.name)
      .of(payload.of)
      .set(payload.set);
  }



  /**
   * 增加
   * @param payload
   */
  async baseCreateSeller(payload) {
    // console.log("baseCreateSeller", payload)
    return await this.userSellerEntity
      .createQueryBuilder()
      .insert()
      .into(UserSellerEntity)
      .values({
        banner: payload.banner,
        choice: payload.choice,
        state: payload.state,
        type: payload.type,
        firstname: payload.firstname,
        lastname: payload.lastname,
        tags: payload.tags,
        gender: payload.gender,
        country: payload.country,
      })
      .execute();
  }



  /**
   * 判断用户是否存在
   * @param payload
   */
  async BaseHas(sellerId) {
    return await this.userSellerEntity
    .createQueryBuilder('seller')
    .where('seller.sellerId = :sellerId', { sellerId: sellerId })
    .getOne();
  }

  async BaseHasName(payload) {
    return await this.userSellerEntity
    .createQueryBuilder('seller')
    .where('seller.firstname = :firstname', { firstname: payload.firstname })
    .where('seller.lastname = :lastname', { lastname: payload.lastname })
    .getOne();
  }

  /**
   * 判断用户是否申请艺术家
   *
   * @memberof BaseSellerServer
   */
  async baseApplySeller(userId) {
    return await this.userSellerEntity
    .createQueryBuilder('seller')
    // .leftJoinAndSelect('seller.user', 'user')
    .where('seller.userId = :userId', { userId: userId })
    .getOne();
  }

  /**
   * 检索
   * @param payload
   * Seller
   */
  async baseRetrieveSeller(sellerId) {
    return await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      // .leftJoinAndSelect('seller.metadata', 'metadata')
      // .leftJoinAndSelect('seller.commoditys', 'commoditys')
      // .leftJoinAndMapMany('commoditys.photos', CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
      .addSelect('seller.createdDate')
      .where("seller.sellerId = :sellerId", { sellerId: sellerId })
      .getOne();
  }

  async baseRetrieveUser(sellerId) {
    return await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      .where("seller.sellerId = :sellerId", { sellerId: sellerId })
      .getOne();
  }



  async baseChoiceSeller(payload) {
    return await this.userSellerEntity
      .createQueryBuilder('seller')
      // .leftJoinAndSelect('seller.user', 'user')
      // .leftJoinAndSelect('seller.metadata', 'metadata')
      // .leftJoinAndSelect('seller.commoditys', 'commoditys')
      // .leftJoinAndMapMany('seller.commodityPhotos', CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
      // .leftJoinAndMapOne('seller.commodityName', CommodityNameEntity, "commodityName", "commodityName.commodityId = commoditys.commodityId")
      // .leftJoinAndMapMany('seller.commodityPhotos', '')
      .addSelect('seller.createdDate')
      .where("seller.choice = :choice", { choice: true })
      .orderBy("seller.createdDate", payload.news && payload.news =='true' ? "DESC"  :  "ASC")
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getMany();
  }

  async baseSellerIdRetrieveSeller(sellerId) {

    return await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      // .leftJoinAndSelect('seller.metadata', 'metadata')
      .leftJoin('seller.commoditys', 'commoditys')
      // .leftJoinAndMapMany('seller.commoditysPhotos', CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
      .addSelect('seller.createdDate')
      .where("seller.sellerId = :sellerId", { sellerId: sellerId })
      .getOne();
  }



  /**
   * 检索所有
   * @param payload
   * Seller
   */
  async baseRetrieveSellerAll(payload) {
    return await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      // .leftJoinAndSelect('seller.metadata', 'metadata')
      // .leftJoinAndSelect('seller.commoditys', 'commoditys')
      // .leftJoinAndMapMany('seller.commodityPhotos', CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
      // .leftJoinAndMapOne('seller.commodityName', CommodityNameEntity, "commodityName", "commodityName.commodityId = commoditys.commodityId")
      // .leftJoinAndMapMany('seller.commodityPhotos', '')
      .addSelect('seller.createdDate')
      .orderBy("seller.createdDate", payload.news && payload.news =='true' ? "DESC"  :  "ASC")
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
  }


  async baseRetrieveSellerHome(payload) {
    return await this.userSellerEntity
      .createQueryBuilder('seller')
      // .leftJoinAndSelect('seller.user', 'user')
      // .leftJoinAndSelect('seller.metadata', 'metadata')
      .innerJoinAndSelect('seller.commoditys', 'commoditys')
      .leftJoinAndMapMany('seller.commodityPhotos', CommodityPhotoEntity, "commodityPhoto", "commodityPhoto.commodityId = commoditys.commodityId")
      .leftJoinAndMapOne('seller.commodityName', CommodityNameEntity, "commodityName", "commodityName.commodityId = commoditys.commodityId")
      // .leftJoinAndMapMany('seller.commodityPhotos', '')
      // .addSelect('seller.createdDate')
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
  }

  /**
   * 搜索
   * @param payload
   * Seller
   */
  async baseSearchSeller(payload) {
    // console.log("baseSearchSeller", payload)
    const where: any = {};

    if (payload.id) {
      where.id = payload.id;
    }
    if (payload.sellerId) {
      where.sellerId = payload.sellerId;
    }
    if (payload.state) {
      where.state = payload.state;
    }
    if (payload.type) {
      where.type = payload.type;
    }
    if (payload.choice) {
      where.choice = payload.choice && payload.choice == 'true' ? true : false;
    }

    if(payload.other){
      if(payload.other == '男') {
        where.gender = '男'
      }else if(payload.other == '女') {
        where.gender = '女'
      }

    }
    if (payload.gender) {
      where.gender = payload.gender;
    }
    if (payload.country) {
      where.country = payload.country;
    }

    if (payload.firstname) {
      where.firstname = Like(`%${payload.firstname}%`);
    }

    if (payload.surname) {
      where.firstname = Like(`%${payload.surname}%`);
    }

    if (payload.lastname) {
      where.lastname = Like(`%${payload.lastname}%`);
    }
    if(payload.other == '工作室') {
      return await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      // .leftJoinAndSelect('seller.metadata', 'metadata')
      .innerJoin('seller.studio', 'studio')
      .addSelect('seller.createdDate')
      .where(where)
      .orderBy("seller.createdDate", payload.news && payload.news =='true' ? "DESC"  :  "ASC")
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
    }else {
      return await this.userSellerEntity
      .createQueryBuilder('seller')
      .leftJoinAndSelect('seller.user', 'user')
      // .leftJoinAndSelect('seller.metadata', 'metadata')
      // .leftJoin('seller.studio', 'studio')
      .addSelect('seller.createdDate')
      .where(where)
      .orderBy("seller.createdDate", payload.news && payload.news =='true' ? "DESC"  :  "ASC")
      .skip((payload.currentPage-1)*payload.pageSize)
      .take(payload.pageSize)
      .getManyAndCount();
    }


  }

  /**
   * 更新
   * @param payload
   * sellerId
   * seller
   * metadata
   */
  async baseUpdateSeller(payload) {
    const { sellerId, ...setData } = payload;
    return await this.userSellerEntity
      .createQueryBuilder()
      .update(UserSellerEntity)
      // .set({
      //   state: payload.state,
      //   firstname: payload.firstname,
      //   lastname: payload.lastname,
      //   gender: payload.gender,
      //   country: payload.country,
      // })
      .set(setData)
      .where("sellerId = :sellerId", { sellerId: sellerId })
      .execute();
  }






  /**
   * 删除
   * @param payload
   * sellerId
   */
  async baseDeleteSeller(sellerId) {
    return await this.userSellerEntity
      .createQueryBuilder()
      .delete()
      .where("sellerId = :sellerId", { sellerId: sellerId })
      .execute();
  }
  /**
   * 删除所有
   * @param payload
   * sellerId
   */
  async baseDeleteSellerAll() {
    return await this.userSellerEntity
      .createQueryBuilder()
      .delete()
      .execute();
  }

  /**
   * 设置商家状态
   * @param payload
   * state
   * sellerId
   */
    async baseSetSellerState(payload) {
      const { sellerId, ...setData } = payload;
      return await this.userSellerEntity
        .createQueryBuilder()
        .update(UserSellerEntity)
        // .set({
        //   state: payload.state
        // })
        .set(setData)
        .where("sellerId = :sellerId", { sellerId: sellerId })
        .execute()
    }

}

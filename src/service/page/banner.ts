import { Inject, Provide } from "@midwayjs/decorator";
import { BasePageBannerService } from '../base/page/banner';

@Provide()
export class PageBannerService {

  @Inject()
  basePageBannerService: BasePageBannerService;

  // 创建图片
  async create(payload) {
    const data = await this.basePageBannerService.BaseCreate({
      src: payload.src || '',
      title: payload.title || '',
      subTitle: payload.subTitle || '',
      desc: payload.desc || ''
    });
    if (data.identifiers[0].id) {
      return {
        data: data,
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

  /**
   * 通过bannerId判断商品是否存在
   * @param payload
   *
   */
  async hasId(bannerId) {
    const data = await this.basePageBannerService.BaseHas(bannerId);
    if (data) {
      return {
        data: data,
        success: true,
        code: 10501
      }
    } else {
      return {
        success: false,
        code: 10502
      }
    }
  }
  /**
   * 通过bannerId获取商品
   * @param payload
   */
    async get(bannerId) {
      const data = await this.basePageBannerService.BaseRetrievebannerId(bannerId);
      if (data) {
        return {
          data: data,
          success: true,
          code: 10501
        }
      } else {
        return {
          success: false,
          code: 10502
        }
      }
    }

    async getAll() {
      const data = await this.basePageBannerService.BaseRetrieveAll();
      if (data) {
        return {
          data: data,
          success: true,
          code: 10501
        }
      } else {
        return {
          success: false,
          code: 10502
        }
      }
    }


  // 更新商品图片
  async update(payload) {
    const data = await this.basePageBannerService.BaseUpdate({
      bannerId: payload.bannerId,
      src: payload.src || '',
      title: payload.title || '',
      subTitle: payload.subTitle || '',
      desc: payload.desc || ''
    });
    if (data.affected) {
      return {
        data: data,
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

  async delete(bannerId) {
    const data = await this.basePageBannerService.BaseDelete(bannerId);
    if (data.affected) {
      return {
        data: data,
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


}

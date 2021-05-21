import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityMaterialServer } from 'src/service/base/commodity/commodity-options/material';
import { CommodityOptionsMaterialService } from '../options/material';

@Provide()
export class CommodityMaterialService {

  @Inject()
  baseCommodityMaterialServer: BaseCommodityMaterialServer;

  @Inject()
  commodityOptionsMaterialService: CommodityOptionsMaterialService;

  async search(payload) {
    const data = await this.baseCommodityMaterialServer.BaseSearch(payload);
    if (data) {
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

  async create(payload) {
    const data = await this.baseCommodityMaterialServer.BaseCreate(payload);
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

  async retrieve(payload) {
    const data = await this.baseCommodityMaterialServer.BaseRetrieveID(payload);
    if (data) {
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

  async retrieveCommodityId(commodityId) {
    const data = await this.baseCommodityMaterialServer.BaseRetrieveCommodityId(commodityId);
    if (data) {
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

  async retrieveID(payload) {
    const data = await this.baseCommodityMaterialServer.BaseRetrieveID(payload);
    if (data) {
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

  async relation(payload) {
    return await this.baseCommodityMaterialServer.BaseRelationSet(payload)
  }

  async relationCreate(payload) {
    for(let item of payload.relation){
      const categoryOption = await this.retrieveID({
        commodityId: payload.commodityId,
        optionId: item
      })
      if(categoryOption.success){
        await this.relation({
          name: 'commoditys',
          of: categoryOption.data.id,
          set: payload.commodityId
        })
        await this.relation({
          name: 'options',
          of:  categoryOption.data.id,
          set: item
        })
      }else{
        const categorysOption = await this.commodityOptionsMaterialService.retrieveId(item)
        if(categorysOption.success){
          const categorys = await this.create({
            commodityId: payload.commodityId,
            optionId: item,
          })
          if (categorys.success) {

            await this.relation({
              name: 'commoditys',
              of: categorys.data.identifiers[0].id,
              set: payload.commodityId
            })
            await this.relation({
              name: 'options',
              of:  categorys.data.identifiers[0].id,
              set: item
            })
          }
        }

      }

    }
  }

  async relationUpdate(payload) {
    const commodityCategorysOptions = await this.retrieveCommodityId(payload.commodityId);
    if(commodityCategorysOptions.success){
      for(let item of commodityCategorysOptions.data){
        if(item.options){
          await this.relation({
            name: 'options',
            of:  item.id,
            set: null
          })
        }
      }
    }
    await this.relationCreate(payload)

  }

}

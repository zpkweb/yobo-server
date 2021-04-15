import { Inject, Provide } from "@midwayjs/decorator";
import { BaseCommodityClassificationServer } from 'src/service/base/commodity/commodity-options/classification';
import { CommodityOptionsClassificationService } from '../options/classification';

@Provide()
export class CommodityClassificationService {

  @Inject()
  baseCommodityClassificationServer: BaseCommodityClassificationServer;

  @Inject()
  commodityOptionsClassificationService: CommodityOptionsClassificationService;

  async create(payload) {
    const data = await this.baseCommodityClassificationServer.BaseCreate(payload);
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
    const data = await this.baseCommodityClassificationServer.BaseRetrieveID(payload);
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
    const data = await this.baseCommodityClassificationServer.BaseRetrieveCommodityId(commodityId);
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
    const data = await this.baseCommodityClassificationServer.BaseRetrieveID(payload);
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
    return await this.baseCommodityClassificationServer.BaseRelationSet(payload)
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
        const categorysOption = await this.commodityOptionsClassificationService.retrieveId(item)
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

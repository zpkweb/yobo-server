/**商品选项
 *
 */
 import { Inject, Provide } from '@midwayjs/decorator';
 import { BaseCommodityOptionsRuiwuServer } from 'src/service/base/commodity/options/ruiwu';

 @Provide()
 export class CommodityOptionsRuiwuService {

   @Inject()
   baseCommodityOptionsRuiwuServer: BaseCommodityOptionsRuiwuServer;

   /**
    * 创建
    */
   async create(payload) {
     const data = await this.baseCommodityOptionsRuiwuServer.BaseCreate(payload);
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
    * 查询
    */
   async retrieve(payload) {
     const data = await this.baseCommodityOptionsRuiwuServer.BaseRetrieve(payload);
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

   /**
    * 查询
    */
   async retrieveId(payload) {
     const data = await this.baseCommodityOptionsRuiwuServer.BaseRetrieveId(payload);
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

   /**
    * 查询所有
    */
   async retrieveAll({
     isLocale = false,
     locale = 'zh-cn'
   } = {}) {
     let data = await this.baseCommodityOptionsRuiwuServer.BaseRetrieveAll();
     if(isLocale){
       data = this.filter(locale, data)
     }
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


   /**
    * 修改
    */
   async update(payload) {
     const data = await this.baseCommodityOptionsRuiwuServer.BaseUpdate(payload);
     if (data.affected) {
       return {
         // data: data,
         success: true,
         code: 10007
       }
     } else {
       return {
         success: false,
         code: 10008
       }
     }
   }


   /**
    * 删除
    */
   async delete(id) {
     const data = await this.baseCommodityOptionsRuiwuServer.BaseDelete(id);
     if (data.affected) {
       return {
         // data: data,
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
    * 筛选
    * @param  payload
    * @param type
    */
   filter(type, payload) {
     return payload.map(item => {
       const { id, img } = item;
       return {id, img, name: item[type]}
     })
   }

 }

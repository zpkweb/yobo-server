/**
 * 商品形状
 */
 import { Provide } from "@midwayjs/decorator";
 import { InjectEntityModel } from "@midwayjs/orm";
 import { Repository } from "typeorm";
 import { CommodityOptionsRuiwuEntity } from 'src/entity/commodity/options/ruiwu';

 @Provide()
 export class BaseCommodityOptionsRuiwuServer {

   @InjectEntityModel(CommodityOptionsRuiwuEntity)
   commodityOptionsRuiwuEntity: Repository<CommodityOptionsRuiwuEntity>;

   /**
    * 创建
    */
   async BaseCreate(payload) {
     return await this.commodityOptionsRuiwuEntity
       .createQueryBuilder()
       .insert()
       .into(CommodityOptionsRuiwuEntity)
       .values({
         'img': payload.img,
         'zh-cn': payload.zhcn,
         'en-us': payload.enus,
         'ja-jp': payload.jajp,
         'es-es': payload.eses
       })
       .execute();
   }



   /**
    * 查询
    */
   async BaseRetrieve(payload) {
     console.log("BaseRetrieve", payload)
     return await this.commodityOptionsRuiwuEntity
       .createQueryBuilder('Ruiwu')
       .where('Ruiwu.zh-cn = :zhcn', { zhcn: payload.zhcn })
       .orWhere('Ruiwu.en-us = :enus', { enus: payload.enus })
       .orWhere('Ruiwu.ja-jp = :jajp', { jajp: payload.jajp })
       .orWhere('Ruiwu.es-es = :eses', { eses: payload.eses })
       .getOne();
   }

   /**
    * 查询
    */
   async BaseRetrieveId(id) {
     return await this.commodityOptionsRuiwuEntity
       .createQueryBuilder('Ruiwu')
       .where('Ruiwu.id = :id', { id })
       .getOne();
   }

   /**
    * 查询
    */
   async BaseRetrieveAll() {
     return await this.commodityOptionsRuiwuEntity
       .createQueryBuilder()
       .getMany();
   }

   /**
    * 修改
    */
   async BaseUpdate(payload) {
     return await this.commodityOptionsRuiwuEntity
       .createQueryBuilder()
       .update(CommodityOptionsRuiwuEntity)
       .set({
         'img': payload.img,
         'zh-cn': payload.zhcn,
         'en-us': payload.enus,
         'ja-jp': payload.jajp,
         'es-es': payload.eses
       })
       .where("id = :id", { id: payload.id })
       .execute();
   }

   /**
    * 删除
    */
   async BaseDelete(id) {
     return await this.commodityOptionsRuiwuEntity
       .createQueryBuilder()
       .delete()
       .where("id = :id", { id })
       .execute();
   }
 }

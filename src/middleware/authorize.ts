import { Provide, Plugin, Config } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';

@Provide()
export class AuthorizeMiddleware implements IWebMiddleware {
  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      console.log("middleware", ctx.request.body)
      const bearerHeader = ctx.req.headers['authorization'];
      if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        try{
          const decoded = await this.jwt.verify(bearerToken, this.jwtConfig.secret)
          // console.log("decoded", decoded)
          // console.log("ctx.request.body",ctx.request.body)
          // console.log("ctx.request.query",ctx.request.query)

          if((ctx.request.body && ctx.request.body.userId) || (ctx.request.query && ctx.request.query.userId)){
            if(ctx.request.body.userId === decoded.userId || ctx.request.query.userId === decoded.userId){
              ctx.state.user = decoded.data;
              // console.log("ctx.state.user", ctx.state.user)

            }else{
              const invalidToken = () => {
                ctx.body = {
                  code: '10106',
                  msg: ctx.__('10106')
                }
                ctx.status = 403;
              }
              return await invalidToken();
            }
          }else{
            if(decoded.userId){
              ctx.state.user = decoded;

            }else{
              const invalidToken = () => {
                ctx.body = {
                  code: '10106',
                  msg: ctx.__('10106')
                }
                ctx.status = 403;
              }
              return await invalidToken();
            }
          }
          return await next();
        }catch(err){
          console.log("err", err)
          const noAccess = () => {
            ctx.body = {
              code: '10104',
              msg: ctx.__('10104')
            }
            ctx.status = 403;
          }
          return await noAccess();
        }

      } else {
        const noToken = () => {
          ctx.body = {
            code: '10103',
            msg: ctx.__('10103')
          }
          ctx.status = 403;
        }
        return noToken();
      }
    };
  }

}

/*
import { Middleware, WebMiddleware, provide } from 'midway'
import { uniq, compact, flatten } from 'underscore';


@provide()
export class authMiddleware implements WebMiddleware {

  public resolve(): Middleware {
    return async (ctx, next) => {
      const action = ctx.routerName;
      const userInfo = ctx.state && ctx.state.user;
      const noAccess = () => {
        ctx.body = {
          code: '403',
          msg: ctx.helper.errorCode['403'],
          result: {
            userId: userInfo,
            uri: action,
          },
        };
        ctx.status = 403;
      };

      // 根据用户的 id 来查找用户所在组
      let groupModulesList = (await ctx.model.AuthGroup.find(
        {
          users: userInfo.id,
        },
        {
          modules: 1,
        }
      )).map((g: any) => g.modules);
      if (!groupModulesList) return noAccess()

      groupModulesList = flatten(groupModulesList)

      if (groupModulesList.length === 0) return noAccess();

      // 查找用户所在组里所有的 uri
      const result = await ctx.model.AuthModule.find(
        {
          _id: { $in: groupModulesList  }
        },
      );
      // 查不到就返回无权限
      if (result === null || !result.length) return noAccess();

      let uri = result.map((item: any) => {
        if (item.uri && item.uri.trim()) {
          return item.uri.split(',');
        }
        return '';
      });

      uri = uniq(compact(flatten(uri)));

      // 找到了之后看该用户的用户组是否有此权限的id
      if (uri.includes(action)) {
        await next();
        return true;
      }
      noAccess();
    }
  }

}
*/

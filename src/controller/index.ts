import { Inject, Controller, Provide, Get, Config, Plugin } from '@midwayjs/decorator';
import { Context } from 'egg';
import { LoginService } from 'src/service/user/login';

@Provide()
@Controller('/')
export class apiController {

  @Inject()
  loginService: LoginService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  @Get()
  @Get('/api')
  async api(ctx) {
    await ctx.render('api.nj');
  }
}

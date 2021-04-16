import { Inject, Controller, Provide, Get, Config, Plugin, App } from '@midwayjs/decorator';
import { Context } from 'egg';
import { LoginService } from 'src/service/user/login';
import { CreateApiDoc } from '@midwayjs/swagger';
import { Application } from 'egg';

@Provide()
@Controller('/', { tagName: '文档', description: 'api'})
export class apiController {

  @App()
  app: Application;

  @Inject()
  loginService: LoginService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  @CreateApiDoc()
    .summary('接口')
    .description('描述')
    .param('user id')
  .param('user name')
    .respond(200, 'success', 'text', {
      example: 'hello world'
    })
    .respond(500, 'throw error')
    .build()

  @Get()
  @Get('/api')
  async api(ctx) {
    await ctx.render('api.nj');
  }
}

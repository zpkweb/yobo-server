import { Inject, Controller, Provide, Get, Config, Plugin, Redirect} from '@midwayjs/decorator';
import { Context } from 'egg';
import { LoginService } from 'src/service/user/login';

@Provide()
@Controller('/')
export class indexController {

  @Inject()
  loginService: LoginService;

  @Inject()
  ctx: Context;

  @Plugin()
  jwt;

  @Config('jwt')
  jwtConfig;

  @Get()
  @Redirect('/index.html')
  async index() {
    return "index";
  }

  @Get('/index.html')
  async html() {
  }


}

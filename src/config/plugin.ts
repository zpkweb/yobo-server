import { EggPlugin } from 'egg';

//目录别名映射
import 'tsconfig-paths/register';

export default {
  static: true, // default is true
  cors: {
    enable: true,
    package: 'egg-cors'
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  },
  redis: {
    enable: true,
    package: 'egg-redis'
  },
  // io: {
  //   enable: true,
  //   package: 'egg-socket.io',
  // }
} as EggPlugin;

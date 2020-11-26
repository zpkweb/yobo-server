import { EggPlugin } from 'egg';
import 'tsconfig-paths/register';

export default {
  static: true, // default is true
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
  }
} as EggPlugin;

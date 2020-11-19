import { EggPlugin } from 'egg';
import 'tsconfig-paths/register';

export default {
  static: false, // default is true
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks'
  },
  jwt: {
    enable: true,
    package: 'egg-jwt'
  }

} as EggPlugin;

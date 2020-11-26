import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// import * as path from 'path';
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {


  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605490437736_6554';

  config.jwt = {
    secret: "yobo"
  };

  // add your config here
  config.middleware = [];

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    domainWhiteList: [ 'http://localhost:7001' ],
  };

  config.orm = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "root1234",
    "database": "yobo",
    "synchronize": true,
    "logging": false
  }


  config.view = {
    // root: path.join(appInfo.baseDir, 'src/assets'),
    mapping: {
      // '.js': 'assets',
      '.nj': 'nunjucks',
      '.njk': 'nunjucks',
    },
  };
  config.static = {
    prefix: '/',
    dir: 'public'
  };
  // exports.static = {
  //   prefix: '/public/',
  //   dir: path.join(appInfo.baseDir, 'public')
  // };

  // config.assets = {
  //   devServer: {
  //     command: 'roadhog dev',
  //     port: 8080,
  //   },
  // };

  config.middleware = [
    'globalMiddleware'
  ];

  config.i18n = {
    defaultLocale: 'zh-CN',
  };



  return config;
};

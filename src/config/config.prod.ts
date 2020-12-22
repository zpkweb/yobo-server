import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// import * as path from 'path';
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {


  const config = {} as DefaultConfig;


  config.host = {
    origin: 'http://81.70.62.235:7001'
  }

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    // domainWhiteList: [ 'http://localhost:7001', 'http://localhost:3000' ],
  };


  config.orm = {
    "type": "mysql",
    "host": "bj-cdb-pepg2x0k.sql.tencentcdb.com",
    "port": 61047,
    "username": "root",
    "password": "root1234",
    "database": "yobo",
    "synchronize": true,
    "logging": false
  }

  // config.redis = {
  //   client: {
  //     host: '10.0.8.16',
  //     port: 6379,
  //     password: 'redis.mima',
  //     db: 0,
  //   },
  // }


  return config;
};

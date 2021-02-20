import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// import * as path from 'path';
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {


  const config = {} as DefaultConfig;


  config.host = {
    origin: 'http://39.105.190.188:7001'
  }
  config.orm = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "Test123!@#",
    "database": "yobo",
    "synchronize": true,
    "logging": false
  }

  // config.orm = {
  //   "type": "mysql",
  //   "host": "localhost",
  //   "port": 3306,
  //   "username": "root",
  //   "password": "Test123!@#",
  //   "database": "yobo",
  //   "synchronize": true,
  //   "logging": false
  // }

  // config.host = {
  //   origin: 'http://localhost:7001'
  // }
  // config.orm = {
  //   "type": "mysql",
  //   "host": "localhost",
  //   "port": 3306,
  //   "username": "root",
  //   "password": "root1234",
  //   "database": "yobo",
  //   "synchronize": true,
  //   "logging": false
  // }

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    // domainWhiteList: [ 'http://localhost:7001', 'http://localhost:3000' ],
  };






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

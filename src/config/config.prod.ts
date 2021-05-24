import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// import * as path from 'path';
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {


  const config = {} as DefaultConfig;


  // config.email = {
  //   service: 'qq',
  //   user: '41728127@qq.com',
  //   pass: 'cblmwxiolsxycada',
  //   port: 465
  // }
  config.email = {
    service: 'smtp.126.com',
    user: 'li_shuo2014@126.com',
    pass: 'DSGFZHHXILXBYBLE',
    port: 465
  };



  config.host = {
    // origin: 'http://39.105.190.188:7001'
    origin: 'http://www.yoboart.com',
  }
  config.orm = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "Test123!@#",
    "database": "yobo_online",
    "synchronize": true,
    "logging": false
  }


  // config.host = {
  //   origin: 'http://82.156.250.70:7001'
  // }
  // config.orm = {
  //   "type": "mysql",
  //   "host": "172.21.0.8",
  //   "port": 3306,
  //   "username": "root",
  //   "password": "root1234",
  //   "database": "yobo_online",
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

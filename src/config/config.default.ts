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
    mapping: {
      '.js': 'react',
      '.jsx': 'react',
      '.nj': 'nunjucks',
      '.njk': 'nunjucks',
    },
  };

  // exports.static = {
  //   prefix: '/public/',
  //   dir: path.join(appInfo.baseDir, 'public')
  // };



  // config.static = {
  //   enable: true,
  //   package: 'egg-static',
  // };

  config.errorCode=  {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  }



  return config;
};

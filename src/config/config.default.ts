import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// import * as path from 'path';
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {


  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605490437736_6554';

  config.root = {
    name: 'root',
    password: '123456'
  }
  config.email = {
    service: 'qq',
    user: '547790132@qq.com',
    pass: 'vgmowhcgqcpobcaf'
  }

  config.jwt = {
    secret: "yobo"
  };

  config.pagination = {
    pageSize: 10,
    currentPage: 1,
  }

  // add your config here
  config.middleware = [];

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    domainWhiteList: [ 'http://localhost:7001', 'http://localhost:3000' ],
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
      '.nj': 'nunjucks',
      '.njk': 'nunjucks',
    },
  };
  config.static = {
    prefix: '/',
    dir: 'public'
  };
  // 上传
  config.multipart = {
    mode: 'file',
  }
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

  config.redis = {
    client: {
      port: 6379,          // Redis port
      host: '127.0.0.1',   // Redis host
      password: null,
      db: 0,
    },
  }

  // config.onerror= {
  //   all(err, ctx) {
  //     // 在此处定义针对所有响应类型的错误处理方法
  //     // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
  //     ctx.body = 'error';
  //     ctx.status = 500;
  //   },
  //   html(err, ctx) {
  //     // html hander
  //     ctx.body = '<h3>error</h3>';
  //     ctx.status = 500;
  //   },
  //   json(err, ctx) {
  //     // json hander
  //     ctx.body = { message: 'error' };
  //     ctx.status = 500;
  //   },
  //   jsonp(err, ctx) {
  //     // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
  //   },
  // }


  return config;
};

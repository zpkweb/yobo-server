import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
// import { readdirSync } from 'fs';
// import { fileURLToPath } from 'url';
// import * as path from 'path';
export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605490437736_6554';

  config.host = {
    origin: 'http://localhost:7001',
  };

  config.orm = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root1234',
    database: 'yobo_online',
    synchronize: true,
    logging: false,
    // "entities": ["src/entity/**/*.ts"]
  };
  // config.orm = {
  //   "type": "mysql",
  //   "host": "127.0.0.1",
  //   "port": 3306,
  //   "username": "root",
  //   "password": "Test123!@#",
  //   "database": "yobo",
  //   "synchronize": true,
  //   "logging": false
  // }

  config.root = {
    name: 'root',
    password: '123456',
  };

  config.email = {
    service: 'qq',
    user: '547790132@qq.com',
    pass: 'vgmowhcgqcpobcaf',
  };

  // config.email = {
  //   service: 'qq',
  //   user: '41728127@qq.com',
  //   pass: 'cblmwxiolsxycada'
  // };

  config.jwt = {
    secret: 'yobo',
  };

  config.pagination = {
    pageSize: 10,
    currentPage: 1,
  };

  // add your config here

  config.security = {
    // 关闭 csrf
    csrf: {
      enable: false,
    },
    // 跨域白名单
    // domainWhiteList: [ 'http://localhost:7001', 'http://localhost:3000' ],
    domainWhiteList: ['*'],
  };

  config.cors = {
    origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
    credentials: true, // 允许跨域请求携带cookies
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.view = {
    // root: path.join(appInfo.baseDir, 'src/assets'),
    defaultExtension: '.nj',
    mapping: {
      '.nj': 'nunjucks',
      '.njk': 'nunjucks',
    },
  };

  config.static = {
    prefix: '/',
    dir: 'public',
  };
  // 上传
  config.multipart = {
    fields: 50,
    fileSize: '10mb',
    mode: 'stream',
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

  config.middleware = ['globalMiddleware'];

  config.i18n = {
    defaultLocale: 'zh-CN',
  };

  config.io = {
    // init: { }, // passed to engine.io
    // namespace: {
    //   '/': {
    //     connectionMiddleware: [],
    //     packetMiddleware: [],
    //   },
    // },

    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [],
        // packetMiddleware: [],
      },
      // '/example': {
      //   connectionMiddleware: [],
      //   packetMiddleware: [],
      // },
      // redis: {
      //   host: { redis server host },
      //   port: { redis server port },
      //   auth_pass: { redis server password },
      //   db: 0,
      // },
    },
  };

  // config.redis = {
  //   client: {
  //     host: '127.0.0.1',   // Redis host
  //     port: 6379,          // Redis port
  //     password: null,
  //     db: 0,
  //   },
  // }

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

  config.codeMessage = {
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
  };

  return config;
};

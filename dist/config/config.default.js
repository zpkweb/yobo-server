"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (appInfo) => {
    const config = {};
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
    };
    config.root = {
        name: 'root',
        password: '123456',
    };
    config.email = {
        service: 'qq',
        user: '547790132@qq.com',
        pass: 'vgmowhcgqcpobcaf',
        port: 465
    };
    config.jwt = {
        secret: 'yobo',
    };
    config.pagination = {
        pageSize: 10,
        currentPage: 1,
    };
    config.security = {
        csrf: {
            enable: false,
        },
        domainWhiteList: ['*'],
    };
    config.cors = {
        origin: '*',
        credentials: true,
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    config.view = {
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
    config.multipart = {
        fields: 50,
        fileSize: '10mb',
        mode: 'stream',
    };
    config.middleware = ['globalMiddleware'];
    config.i18n = {
        defaultLocale: 'zh-CN',
    };
    config.io = {
        init: {},
        namespace: {
            '/': {
                connectionMiddleware: [],
            },
        },
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29uZmlnL2NvbmZpZy5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsa0JBQWUsQ0FBQyxPQUFtQixFQUFFLEVBQUU7SUFDckMsTUFBTSxNQUFNLEdBQUcsRUFBbUIsQ0FBQztJQUduQyxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7SUFFbkQsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLE1BQU0sRUFBRSx1QkFBdUI7S0FHaEMsQ0FBQztJQUVGLE1BQU0sQ0FBQyxHQUFHLEdBQUc7UUFDWCxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLElBQUk7UUFDakIsT0FBTyxFQUFFLEtBQUs7S0FFZixDQUFDO0lBWUYsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLFFBQVE7S0FDbkIsQ0FBQztJQVdGLE1BQU0sQ0FBQyxLQUFLLEdBQUc7UUFDYixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixJQUFJLEVBQUUsR0FBRztLQUNWLENBQUM7SUFHRixNQUFNLENBQUMsR0FBRyxHQUFHO1FBQ1gsTUFBTSxFQUFFLE1BQU07S0FDZixDQUFDO0lBRUYsTUFBTSxDQUFDLFVBQVUsR0FBRztRQUNsQixRQUFRLEVBQUUsRUFBRTtRQUNaLFdBQVcsRUFBRSxDQUFDO0tBQ2YsQ0FBQztJQUlGLE1BQU0sQ0FBQyxRQUFRLEdBQUc7UUFFaEIsSUFBSSxFQUFFO1lBQ0osTUFBTSxFQUFFLEtBQUs7U0FDZDtRQUdELGVBQWUsRUFBRSxDQUFDLEdBQUcsQ0FBQztLQUN2QixDQUFDO0lBRUYsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLE1BQU0sRUFBRSxHQUFHO1FBQ1gsV0FBVyxFQUFFLElBQUk7UUFDakIsWUFBWSxFQUFFLHdDQUF3QztLQUN2RCxDQUFDO0lBRUYsTUFBTSxDQUFDLElBQUksR0FBRztRQUVaLGdCQUFnQixFQUFFLEtBQUs7UUFDdkIsT0FBTyxFQUFFO1lBQ1AsS0FBSyxFQUFFLFVBQVU7WUFDakIsTUFBTSxFQUFFLFVBQVU7U0FDbkI7S0FDRixDQUFDO0lBRUYsTUFBTSxDQUFDLE1BQU0sR0FBRztRQUNkLE1BQU0sRUFBRSxHQUFHO1FBQ1gsR0FBRyxFQUFFLFFBQVE7S0FDZCxDQUFDO0lBRUYsTUFBTSxDQUFDLFNBQVMsR0FBRztRQUNqQixNQUFNLEVBQUUsRUFBRTtRQUNWLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FBQztJQWNGLE1BQU0sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRXpDLE1BQU0sQ0FBQyxJQUFJLEdBQUc7UUFDWixhQUFhLEVBQUUsT0FBTztLQUN2QixDQUFDO0lBRUYsTUFBTSxDQUFDLEVBQUUsR0FBRztRQVNWLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFO1lBQ1QsR0FBRyxFQUFFO2dCQUNILG9CQUFvQixFQUFFLEVBQUU7YUFFekI7U0FXRjtLQUNGLENBQUM7SUFpQ0YsTUFBTSxDQUFDLFdBQVcsR0FBRztRQUNuQixHQUFHLEVBQUUsZUFBZTtRQUNwQixHQUFHLEVBQUUsWUFBWTtRQUNqQixHQUFHLEVBQUUscUJBQXFCO1FBQzFCLEdBQUcsRUFBRSxTQUFTO1FBQ2QsR0FBRyxFQUFFLDZCQUE2QjtRQUNsQyxHQUFHLEVBQUUsc0JBQXNCO1FBQzNCLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsR0FBRyxFQUFFLDRCQUE0QjtRQUNqQyxHQUFHLEVBQUUsV0FBVztRQUNoQixHQUFHLEVBQUUscUJBQXFCO1FBQzFCLEdBQUcsRUFBRSxvQkFBb0I7UUFDekIsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixHQUFHLEVBQUUsT0FBTztRQUNaLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsR0FBRyxFQUFFLE9BQU87S0FDYixDQUFDO0lBRUYsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDIn0=
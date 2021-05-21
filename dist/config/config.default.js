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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmRlZmF1bHQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29uZmlnL2NvbmZpZy5kZWZhdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBTUEsa0JBQWUsQ0FBQyxPQUFtQixFQUFFLEVBQUU7SUFDckMsTUFBTSxNQUFNLEdBQUcsRUFBbUIsQ0FBQztJQUduQyxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEdBQUcscUJBQXFCLENBQUM7SUFFbkQsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLE1BQU0sRUFBRSx1QkFBdUI7S0FHaEMsQ0FBQztJQUVGLE1BQU0sQ0FBQyxHQUFHLEdBQUc7UUFDWCxJQUFJLEVBQUUsT0FBTztRQUNiLElBQUksRUFBRSxXQUFXO1FBQ2pCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLGFBQWE7UUFDdkIsV0FBVyxFQUFFLElBQUk7UUFDakIsT0FBTyxFQUFFLEtBQUs7S0FFZixDQUFDO0lBWUYsTUFBTSxDQUFDLElBQUksR0FBRztRQUNaLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLFFBQVE7S0FDbkIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxLQUFLLEdBQUc7UUFDYixPQUFPLEVBQUUsSUFBSTtRQUNiLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLGtCQUFrQjtLQUN6QixDQUFDO0lBUUYsTUFBTSxDQUFDLEdBQUcsR0FBRztRQUNYLE1BQU0sRUFBRSxNQUFNO0tBQ2YsQ0FBQztJQUVGLE1BQU0sQ0FBQyxVQUFVLEdBQUc7UUFDbEIsUUFBUSxFQUFFLEVBQUU7UUFDWixXQUFXLEVBQUUsQ0FBQztLQUNmLENBQUM7SUFJRixNQUFNLENBQUMsUUFBUSxHQUFHO1FBRWhCLElBQUksRUFBRTtZQUNKLE1BQU0sRUFBRSxLQUFLO1NBQ2Q7UUFHRCxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUM7S0FDdkIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxJQUFJLEdBQUc7UUFDWixNQUFNLEVBQUUsR0FBRztRQUNYLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLFlBQVksRUFBRSx3Q0FBd0M7S0FDdkQsQ0FBQztJQUVGLE1BQU0sQ0FBQyxJQUFJLEdBQUc7UUFFWixnQkFBZ0IsRUFBRSxLQUFLO1FBQ3ZCLE9BQU8sRUFBRTtZQUNQLEtBQUssRUFBRSxVQUFVO1lBQ2pCLE1BQU0sRUFBRSxVQUFVO1NBQ25CO0tBQ0YsQ0FBQztJQUVGLE1BQU0sQ0FBQyxNQUFNLEdBQUc7UUFDZCxNQUFNLEVBQUUsR0FBRztRQUNYLEdBQUcsRUFBRSxRQUFRO0tBQ2QsQ0FBQztJQUVGLE1BQU0sQ0FBQyxTQUFTLEdBQUc7UUFDakIsTUFBTSxFQUFFLEVBQUU7UUFDVixRQUFRLEVBQUUsTUFBTTtRQUNoQixJQUFJLEVBQUUsUUFBUTtLQUNmLENBQUM7SUFjRixNQUFNLENBQUMsVUFBVSxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUV6QyxNQUFNLENBQUMsSUFBSSxHQUFHO1FBQ1osYUFBYSxFQUFFLE9BQU87S0FDdkIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxFQUFFLEdBQUc7UUFTVixJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRTtZQUNULEdBQUcsRUFBRTtnQkFDSCxvQkFBb0IsRUFBRSxFQUFFO2FBRXpCO1NBV0Y7S0FDRixDQUFDO0lBaUNGLE1BQU0sQ0FBQyxXQUFXLEdBQUc7UUFDbkIsR0FBRyxFQUFFLGVBQWU7UUFDcEIsR0FBRyxFQUFFLFlBQVk7UUFDakIsR0FBRyxFQUFFLHFCQUFxQjtRQUMxQixHQUFHLEVBQUUsU0FBUztRQUNkLEdBQUcsRUFBRSw2QkFBNkI7UUFDbEMsR0FBRyxFQUFFLHNCQUFzQjtRQUMzQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLEdBQUcsRUFBRSw0QkFBNEI7UUFDakMsR0FBRyxFQUFFLFdBQVc7UUFDaEIsR0FBRyxFQUFFLHFCQUFxQjtRQUMxQixHQUFHLEVBQUUsb0JBQW9CO1FBQ3pCLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsR0FBRyxFQUFFLE9BQU87UUFDWixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLEdBQUcsRUFBRSxPQUFPO0tBQ2IsQ0FBQztJQUVGLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyJ9
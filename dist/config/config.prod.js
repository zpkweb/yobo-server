"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (appInfo) => {
    const config = {};
    config.email = {
        service: 'smtp.exmail.qq.com',
        user: 'lishuo@yoboart.com',
        pass: 'Yoboart306',
        port: 465
    };
    config.host = {
        origin: 'http://www.yoboart.com',
    };
    config.orm = {
        "type": "mysql",
        "host": "localhost",
        "port": 3306,
        "username": "root",
        "password": "Test123!@#",
        "database": "yobo_online",
        "synchronize": true,
        "logging": false
    };
    return config;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnByb2QuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3lhbnNodW8vRG9jdW1lbnRzL3pway9naXRodWIveW9iby1zZXJ2ZXIvc3JjLyIsInNvdXJjZXMiOlsiY29uZmlnL2NvbmZpZy5wcm9kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsa0JBQWUsQ0FBQyxPQUFtQixFQUFFLEVBQUU7SUFHckMsTUFBTSxNQUFNLEdBQUcsRUFBbUIsQ0FBQztJQUduQyxNQUFNLENBQUMsS0FBSyxHQUFHO1FBQ2IsT0FBTyxFQUFFLG9CQUFvQjtRQUM3QixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxZQUFZO1FBQ2xCLElBQUksRUFBRSxHQUFHO0tBQ1YsQ0FBQTtJQTJCRCxNQUFNLENBQUMsSUFBSSxHQUFHO1FBRVosTUFBTSxFQUFFLHdCQUF3QjtLQUNqQyxDQUFBO0lBQ0QsTUFBTSxDQUFDLEdBQUcsR0FBRztRQUNYLE1BQU0sRUFBRSxPQUFPO1FBQ2YsTUFBTSxFQUFFLFdBQVc7UUFDbkIsTUFBTSxFQUFFLElBQUk7UUFDWixVQUFVLEVBQUUsTUFBTTtRQUNsQixVQUFVLEVBQUUsWUFBWTtRQUN4QixVQUFVLEVBQUUsYUFBYTtRQUN6QixhQUFhLEVBQUUsSUFBSTtRQUNuQixTQUFTLEVBQUUsS0FBSztLQUNqQixDQUFBO0lBZ0RELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyJ9
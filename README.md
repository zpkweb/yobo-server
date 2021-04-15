# api

提供官网和后台的接口

### 安装

```bash
npm run install / yarn
```
### 开发

```bash
npm run dev / yarn dev
```
### 编译

```bash
npm run build / yarn build
```
### 部署

```bash
服务器部署（监听端口: 7001, path: /api）
创建yobo-server目录，把文件解压到yobo-server。
执行命令：pm2 start
```





### 测试

### 目录

```bash
.
├── README.md
├── api.html
├── api.http
├── api.md
├── dist
├── ecosystem.config.js
├── index.js
├── logs
├── package.json
├── public
├── run
├── screenshot.png
├── server.js
├── src
│   ├── app
│   │   └── view
│   │       └── api.nj
│   ├── aspect
│   │   └── report.ts
│   ├── config
│   │   ├── config.default.ts
│   │   ├── config.local.ts
│   │   ├── config.prod.ts
│   │   ├── config.unittest.ts
│   │   ├── locale
│   │   │   ├── en-US.json
│   │   │   └── zh-CN.json
│   │   └── plugin.ts
│   ├── configuration.ts
│   ├── controller
│   │   ├── client
│   │   │   ├── BFF
│   │   │   ├── commodity
│   │   │   ├── email
│   │   │   ├── my
│   │   │   ├── seller
│   │   │   └── user
│   │   ├── index.ts
│   │   ├── server
│   │   │   ├── commodity
│   │   │   ├── page
│   │   │   ├── puppeteer
│   │   │   └── user
│   │   └── upload
│   │       └── index.ts
│   ├── dto
│   │   └── user
│   │       ├── login.ts
│   │       └── register.ts
│   ├── entity
│   │   ├── activity
│   │   │   └── activity.ts
│   │   ├── commodity
│   │   │   ├── attribute
│   │   │   ├── commodity.ts
│   │   │   ├── commodityBrowsingCount.ts
│   │   │   ├── options
│   │   │   └── packing
│   │   ├── coupon
│   │   │   └── coupon.ts
│   │   ├── my
│   │   │   ├── activity.ts
│   │   │   ├── browsingHistory.ts
│   │   │   ├── coupon.ts
│   │   │   ├── likeCommodity.ts
│   │   │   ├── likeSeller.ts
│   │   │   ├── order.ts
│   │   │   └── shoppingCart.ts
│   │   ├── order
│   │   │   └── order.ts
│   │   ├── page
│   │   │   └── banner.ts
│   │   └── user
│   │       ├── address.ts
│   │       ├── admin
│   │       ├── customerService
│   │       ├── identity
│   │       ├── member
│   │       ├── ordinary
│   │       ├── seller
│   │       ├── thirdParty
│   │       └── user.ts
│   ├── middleware
│   │   ├── authorize.ts
│   │   └── global.ts
│   └── service
│       ├── BFF
│       │   ├── artworkOptions.ts
│       │   ├── banner.ts
│       │   └── index.ts
│       ├── base
│       │   ├── commodity
│       │   ├── my
│       │   ├── page
│       │   └── user
│       ├── commodity
│       │   ├── attribute
│       │   ├── comment.ts
│       │   ├── commodity.ts
│       │   ├── index.ts
│       │   └── options
│       ├── email
│       │   └── index.ts
│       ├── my
│       │   ├── browsingHistory.ts
│       │   ├── index.ts
│       │   ├── likeCommodity.ts
│       │   └── likeSeller.ts
│       ├── page
│       │   ├── banner.ts
│       │   └── index.ts
│       ├── puppeteer
│       │   ├── index.ts
│       │   └── seller.ts
│       ├── upload
│       │   ├── images.ts
│       │   └── index.ts
│       └── user
│           ├── address.ts
│           ├── identityList.ts
│           ├── login.ts
│           ├── register.ts
│           ├── seller.ts
│           └── user.ts
├── test
│   └── controller
│       ├── api.test.ts
│       └── home.test.ts
├── tree.md
├── tsconfig.json
├── typings
│   ├── app
│   │   └── index.d.ts
│   └── config
│       ├── index.d.ts
│       └── plugin.d.ts
├── work-logs.md
├── yarn-error.log
├── yarn.lock
```

# 项目安排

### 接口
统一格式: /api/身份/模块/功能/参数？query

client：

注册(获取 token)
  游客注册普通用户
    POST: /api/user/register
  游客，普通用户申请艺术家
    POST: /api/user/seller/apply
登录(获取 token)
  普通用户,艺术家登录
    POST: /api/user/login
修改密码(验证 token)
  普通用户，艺术家
    POST: /api/user/change/password
查找用户(验证 token)
  获取自己的信息
    GET: /api/user/self
  查找艺术家
    GET: /api/user/seller/search
更新用户数据(验证 token)
  普通用户
    POST: /api/user/update
  艺术家
    POST: /api/user/seller/apply/update



server：

注册(获取 token)
  管理员创建客服
    POST: /api/admin/user/customerService/create
  获取艺术家申请列表
    GET: /api/admin/user/seller/apply
  管理员同意申请成为艺术家
    POST: /api/admin/user/seller/apply
  超级管理员创建管理员
    POST: /api/admin/user/superAdmin/create/:admin
登录(获取 token)
  客服，管理员，超级管理员登录
    POST: /api/admin/user/login
查找用户(验证 token)
  查找普通用户
    查找所有用户：
      GET: /api/admin/user/findAll
    查找某个用户：
      GET: /api/admin/user/find/id/:id
      GET: /api/admin/user/find?userId=id
    查找某些身份的用户：
      GET: /api/admin/user/find/type/:type
      GET: /api/admin/user/find?type=
    查找某个用户的身份:
      GET: /api/admin/user/find/:type/:id
      GET: /api/admin/user/find?type=&id=
  查找客服,管理员
    GET: /api/admin/user/find?type=customerService,admin
更新用户数据(验证 token)
  客服,管理员
    POST: /api/admin/user/update/:type=customerService,admin
用户身份
  添加用户身份
    POST: /api/admin/user/identity
  获取身份列表
    GET:/api/admin/user/identity


### 功能

```base
用户
  注册
    收藏家
    艺术家
      管理员审核（后台）
  登录
    第三方
    收藏家
    艺术家
    管理员
  找回密码
    邮箱
    手机
  我的
    简介
    收货地址
    喜欢的商品
    喜欢的艺术家
    购物车
    订单
  管理员（后台）
    添加艺术家（后台）
    修改艺术家（后台）
    删除艺术家（后台）
    搜索用户（后台）

  角色
    游客
    收藏家
    艺术家
    管理员
    root
商品
  创建商品（后台）
  修改商品（后台）
  删除商品（后台）
  添加商品属性（后台）
  搜索商品（后台）
  搜索商品
  喜欢商品
  浏览商品
  推荐商品？（后台）

  艺术家上传商品（app）
    管理员审核（后台）

  商品状态
    喜欢
    推荐
    在售
    已售卖
    已下架
    非卖品
    退货？

购物车
  添加购物车

订单
  创建订单（后台）
  修改订单（后台）
  删除订单（后台）
  查询订单（后台）

  订单状态
    待付款-20分钟
    待收货
    待评价
    退货？

支付
  支付宝
  银联

多语言
  汉语
  英语
  日语
  西班牙语

在线客服

排行榜（app）

上传图片

```

### 时间安排
```base
11.12-11.13
  需求调研
11.16-11.20
  框架搭建+数据库建表
11.23-11.26
  用户模块
11.27-12.03
  商品模块
12.04-12.10
  订单模块
12.11-12.15
  聊天模块
12.15-12.18
  其他模块
```

### 技术选型
```base
PC端服务器渲染（vue）
PC端后台管理服务器渲染（vue+element）
后台接口（Midway+typeorm）
```

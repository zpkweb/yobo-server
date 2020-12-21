[接口配置](#接口配置)
[接口](#接口)
  - [用途：客户端](#用途：客户端)
    - [模块：用户](#模块：用户)
      - [`用户注册-POST:/api/user/register`](#用户注册)
      - [`申请艺术家-POST:/api/user/seller/register`](#申请艺术家)
      - [`用户登录-POST:/api/user/login`](#用户登录)
      - [`修改密码-POST:/api/user/change/password`](#修改密码)
      - [`获取个人信息-GET:/api/user/self`](#获取个人信息)
      - [`更新用户信息-POST:/api/user/update`](#更新用户信息)

      - [找回密码](#找回密码)
        - [`发送邮件验证码-POST:/api/user/password/retrieve/code/send`](#发送邮件验证码)
        - [`验证邮件验证码-POST:/api/user/password/retrieve/code/verify`](#验证邮件验证码)

      - [用户地址](#用户地址)
        - [`获取用户地址-GET:/api/user/address`](#获取用户地址)
        - [`添加用户地址-POST:/api/user/address`](#添加用户地址)
        - [`更新用户地址-POST:/api/user/address/update`](#更新用户地址)
        - [`删除用户地址-POST:/api/user/address/remove`](#删除用户地址)

    - [模块：我的](#模块：我的)
      - [`添加喜欢的艺术家-POST:/api/my/seller`](#添加喜欢的艺术家)
      - [`喜欢的艺术家列表-GET:/api/my/seller`](#喜欢艺术家列表)
      - [`取消喜欢的艺术家-POST:/api/my/seller/del`](#取消喜欢的艺术家)
      - [`取消喜欢所有的艺术家-POST:/api/my/seller/delAll`](#取消喜欢所有的艺术家)

      - [`添加喜欢的艺术品-POST:/api/my/commodity`](#添加喜欢的艺术品)
      - [`喜欢的艺术品列表-GET:/api/my/commodity`](#喜欢艺术品列表)
      - [`取消喜欢的艺术品-POST:/api/my/commodity/del`](#取消喜欢的艺术品)
      - [`取消喜欢所有的艺术品-POST:/api/my/commodity/delAll`](#取消喜欢所有的艺术品)

      - [`添加我的浏览历史(艺术品)-POST:/api/my/browsingHistory`](#添加我的浏览历史)
      - [`我的浏览历史列表(艺术品)-GET:/api/my/browsingHistory`](#我的浏览历史列表)

    - [模块：艺术品](#模块：艺术品)
      - [`艺术品列表-GET:/api/commodity`](#艺术品列表)
      - [`艺术品搜索-GET:/api/commodity/search`](#艺术品搜索)

      - [艺术品选项](#艺术品选项)
        - [`艺术品形状-GET:/api/commodity/options/shape`](#艺术品形状)
        - [`艺术品主题-GET:/api/commodity/options/theme`](#艺术品主题)
        - [`艺术品类别-GET:/api/commodity/options/category`](#艺术品类别)
        - [`艺术品手法-GET:/api/commodity/options/technique`](#艺术品手法)


[接口示例](#接口示例)


# 接口配置

```base
  @baseUrl = http://192.168.0.67:7001
  @token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzIiwidXNlcklkIjoiOTA3ZTNhYjItZDg2OC00OGU0LThlN2MtYzFiMjdjNTI5OTM1IiwibmFtZSI6InRlc3QiLCJlbWFpbCI6IiIsInBob25lIjoiMTMiLCJpZGVudGl0eXMiOlt7ImlkIjoiMTMiLCJpZGVudGl0eUlkIjoiYTAxMWMyMWUtYzU0MC00ZGFmLTgyMTYtN2ZjNTNiOGIwZGYzIiwibmFtZSI6IueUqOaItyIsImluZGV4Ijo4MH1dLCJpYXQiOjE2MDYzNjY3ODR9.VzGR0tr8xKMl9I3x6xt_3LlA8nAoEhYp9ybfKIOg5yI
```
多语言
```base
  语言
    中文（默认）：?locale=zh-CN
    英语：?locale=en-US
  分页（默认设置）
    currentPage: 1 // 页码
    pageSize: 10 // 页数
```
# 接口
## 用途：客户端
### 模块：用户
###### 用户注册
```base
  POST {{baseUrl}}/api/user/register
  Content-Type: application/json

  {
    "name": "test",
    "email": "",
    "phone": "1",
    "password": "1"
  }
```
###### 申请艺术家
```base
  POST {{baseUrl}}/api/user/seller/register
  Content-Type: application/json

  {
    firstname: '请输入姓氏',
    lastname: '请输入名字',
    email: '请输入邮箱',
    phone: '请输入电话',
    country: '请输入国家',
    language: '请输入语言',
    findUs: '您是如何发现我们的',
    isFullTime: '您是一个全职的专业艺术家么？',
    onlineSell: '售出的作品中，网上售出的比例占多少？',
    sold: '您在过去一年里售出多少件自己的作品？',
    channel: '如果您在网上售出过作品，是通过什么渠道呢？',
    gallery: '如有其他画廊已合作，是哪一家（方便我们更全面了解您）',
    medium: '主要媒介',
    galleryInfo: '您是画廊代表人吗？请告知您的画廊名称，城市，国家',
    recommend: '最值得一看的展览/画廊/机构名称，城市，国家',
    prize: '最引人注目的奖项/奖项名称，获得年份',
    website: '连接到网站',
    profile: '用户简介',
  }
```
###### 用户登录
```base
  POST {{baseUrl}}/api/user/login
  Content-Type: application/json

  {
    "email": "",
    "phone": "1234567",
    "password": "123456"
  }
```
###### 修改密码
```base
  POST {{baseUrl}}/api/user/change/password
  Content-Type: application/json
  Authorization: Bearer {{token}}

  {
    "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
    "email": "",
    "phone": "1234567",
    "password": "123"
  }
```

###### 获取个人信息
```base
  GET {{baseUrl}}/api/user/self?userId=2d956538-2aa3-4bb2-9852-a742bffe17e2
  Authorization: Bearer {{token}}
```

######  更新用户信息
```base
POST {{baseUrl}}/api/user/update
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
  "email": "",
  "phone": "1234567",
  "name": "test77",
}
```




### 找回密码
###### 发送邮件验证码
```base
  POST {{baseUrl}}/api/user/password/retrieve/code/send
  Content-Type: application/json
  Authorization: Bearer {{token}}

  {
    "userId": "6db20004-97ef-4a9c-8e3b-a69621ee67f5",
    "email": "zpkweb@icloud.com"
  }
```

###### 验证邮件验证码
```base
  POST {{baseUrl}}/api/user/password/retrieve/code/verify
  Content-Type: application/json
  Authorization: Bearer {{token}}

  {
    "userId": "6db20004-97ef-4a9c-8e3b-a69621ee67f5",
    "code": "747215"
  }
```

### 用户地址
######  获取用户地址
```base
GET  {{baseUrl}}/api/user/address？userId=2d956538-2aa3-4bb2-9852-a742bffe17e2
Authorization: Bearer {{token}}
```



######  添加用户地址
```base
POST {{baseUrl}}/api/user/address
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
  "address": {
    "name": "test22",
    "phone": "222",
    "city": "北京",
    "address": ""
  }
}
```

######  更新用户地址
```base
POST {{baseUrl}}/api/user/address/update
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
  "address": {
    "addressId": "dcb34b75-2c9a-458d-924e-5689967e7cfa",
    "name": "test2",
    "phone": "22",
    "city": "北京",
    "address": ""
  }
}
```


######  删除用户地址
```base
POST {{baseUrl}}/api/user/address/remove
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
  "addressId": "6277c751-5748-4f4b-ac4f-de94ac39c60d"
}
```


### 我的

###### 添加我喜欢的艺术家
```base
POST {{baseUrl}}/api/my/seller
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
  "sellerId": "6277c751-5748-4f4b-ac4f-de94ac39c60d"
}
```

###### 我喜欢的艺术家列表
```base
GET  {{baseUrl}}/api/my/seller？userId=2d956538-2aa3-4bb2-9852-a742bffe17e2
Authorization: Bearer {{token}}
```

###### 取消喜欢的艺术家
```base
POST {{baseUrl}}/api/my/seller/del
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
  "sellerId": "6277c751-5748-4f4b-ac4f-de94ac39c60d"
}
```
###### 取消喜欢所有的艺术家
```base
POST {{baseUrl}}/api/my/seller/delAll
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2"
}
```



###### 添加我喜欢的艺术品
```base
POST {{baseUrl}}/api/my/commodity
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
  "commodityId": "6277c751-5748-4f4b-ac4f-de94ac39c60d"
}
```

###### 我喜欢的艺术品列表
```base
GET  {{baseUrl}}/api/my/commodity？userId=2d956538-2aa3-4bb2-9852-a742bffe17e2
Authorization: Bearer {{token}}
```


###### 取消喜欢的艺术品
```base
POST {{baseUrl}}/api/my/commodity/del
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
  "commodityId": "6277c751-5748-4f4b-ac4f-de94ac39c60d"
}
```
###### 取消喜欢所有的艺术品
```base
POST {{baseUrl}}/api/my/commodity/delAll
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2"
}
```



### 艺术品

###### 艺术品列表
```base
GET {{baseUrl}}/api/commodity
Authorization: Bearer {{token}}
{
  currentPage: 1,
  pageSize: 10
}
```

###### 搜索艺术品

```base
GET {{baseUrl}}/api/commodity/search
Authorization: Bearer {{token}}
{
  name: '名称',
  desc: '描述',
  price: {"min":"最小价格","max":"最大价格"}
  width: {"min":"最小宽度","max":"最大宽度"}
  height: {"min":"最小高度","max":"最大高度"}
  colors: {"start":"开始颜色","end":"结束颜色"},
  sellerId: '艺术家id',
  shapeId: '形状id',
  themeId: '主题id',
  categoryId: '类别id',
  techniqueId: '手法id',
  state: '状态',
  hots: false, // 是否最热
  news: false, // 是否最新
  currentPage: 1,
  pageSize: 10,
}

```

#### 艺术品选项

###### 艺术品形状
```base
GET {{baseUrl}}/api/commodity/options/shape
Authorization: Bearer {{token}}
```

###### 艺术品主题
```base
GET {{baseUrl}}/api/commodity/options/theme
Authorization: Bearer {{token}}
```

###### 艺术品类别
```base
GET {{baseUrl}}/api/commodity/options/category
Authorization: Bearer {{token}}
```

###### 艺术品手法
```base
GET {{baseUrl}}/api/commodity/options/technique
Authorization: Bearer {{token}}
```


# 接口示例

```base
import axios from 'axios'

export function register ({commit}, form) {
  return axios.post('api/auth/register', form)
    .then(response => {
      commit('login', {token: response.data.token, user: response.data.user})
      setAxiosHeaders(response.data.token)
    })
}

function setAxiosHeaders (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
```

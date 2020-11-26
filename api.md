[接口配置](#接口配置)
[接口](#接口)
  - [用途：客户端](#用途：客户端)
    - [模块：用户](#模块：用户)
      - [`用户注册`](#用户注册)
      - [`申请艺术家`](#申请艺术家)
      - [`用户登录`](#用户登录)
      - [`修改密码`](#修改密码)
      - [`找回密码：发送邮件验证码`](#找回密码：发送邮件验证码)
      - [`找回密码：验证邮件验证码`](#找回密码：验证邮件验证码)
      - [`获取个人信息`](#获取个人信息)
      - [`更新用户信息`](#更新用户信息)
      - [`获取用户地址`](#获取用户地址)
      - [`添加用户地址`](#添加用户地址)
      - [`更新用户地址`](#更新用户地址)
      - [`删除用户地址`](#删除用户地址)

[接口示例](#接口示例)



# 接口配置

```base
  @baseUrl = http://192.168.0.67:7001
  @token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzIiwidXNlcklkIjoiOTA3ZTNhYjItZDg2OC00OGU0LThlN2MtYzFiMjdjNTI5OTM1IiwibmFtZSI6InRlc3QiLCJlbWFpbCI6IiIsInBob25lIjoiMTMiLCJpZGVudGl0eXMiOlt7ImlkIjoiMTMiLCJpZGVudGl0eUlkIjoiYTAxMWMyMWUtYzU0MC00ZGFmLTgyMTYtN2ZjNTNiOGIwZGYzIiwibmFtZSI6IueUqOaItyIsImluZGV4Ijo4MH1dLCJpYXQiOjE2MDYzNjY3ODR9.VzGR0tr8xKMl9I3x6xt_3LlA8nAoEhYp9ybfKIOg5yI
```
多语言
```base
  中文（默认）：?locale=zh-CN
  英语：?locale=en-US

```
# 接口
## 用途：客户端
### 模块：用户
#### 用户注册
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
#### 申请艺术家
```base
  POST {{baseUrl}}/api/user/seller/register
  Content-Type: application/json

  {
    "firstname": "张",
    "lastname": "三",
    "email": "",
    "phone": "7",
    "language": "汉语",
    ...
  }
```
#### 用户登录
```base
  POST {{baseUrl}}/api/user/login
  Content-Type: application/json

  {
    "email": "",
    "phone": "1234567",
    "password": "123456"
  }
```
#### 修改密码
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

#### 获取个人信息
```base
  GET {{baseUrl}}/api/user/self?userId=2d956538-2aa3-4bb2-9852-a742bffe17e2
  Authorization: Bearer {{token}}
```

####  更新用户信息
```base
POST {{baseUrl}}/api/user/update
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
  "email": "",
  "phone": "1234567",
  "name": "test77",
  ...
}
```

#### 找回密码：发送邮件验证码
```base
  POST {{baseUrl}}/api/user/password/retrieve/code/send
  Content-Type: application/json
  Authorization: Bearer {{token}}

  {
    "userId": "6db20004-97ef-4a9c-8e3b-a69621ee67f5",
    "email": "zpkweb@icloud.com"
  }
```

#### 找回密码：验证邮件验证码
```base
  POST {{baseUrl}}/api/user/password/retrieve/code/verify
  Content-Type: application/json
  Authorization: Bearer {{token}}

  {
    "userId": "6db20004-97ef-4a9c-8e3b-a69621ee67f5",
    "code": "747215"
  }
```


####  获取用户地址
```base
GET  {{baseUrl}}/api/user/address?userId=2d956538-2aa3-4bb2-9852-a742bffe17e2
Authorization: Bearer {{token}}
```



####  添加用户地址
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

####  更新用户地址
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


####  删除用户地址
```base
POST {{baseUrl}}/api/user/address/remove
Content-Type: application/json
Authorization: Bearer {{token}}

{
  "userId": "2d956538-2aa3-4bb2-9852-a742bffe17e2",
  "addressId": "6277c751-5748-4f4b-ac4f-de94ac39c60d"
}
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

module.exports = {
  apps: [
    {
      name: 'yobo-server',
      // exec_mode: 'cluster',
      // instances: 'max', // Or a number of instances
      script: './server.js',
      args: 'start',
      port: '7001',
      env: {
        NODE_ENV: "prod",
        MIDWAY_SERVER_ENV: "prod",
        // NODE_ENV: "dev",
        // MIDWAY_SERVER_ENV: "dev",
      }
    }
  ],
  "deploy":{
    "production":{
        "user":"root",       // 服务器登录用户名
        "host":["188.131.144.35"], //服务器ip
        "port":"22",           //ssh 端口如果没改过为 22
        "ref":"origin/main",
        "repo":"git@github.com:zpkweb/yobo-server.git", //git仓库 项目ssh地址
        "path":"/root/yobo-server",//服务器部署地址 需要事先在服务器上将/www/website/ 新建出来
        "ssh_options":"StrictHostKeyChecking=no",
        "env":{
            "NODE_ENV":"production"
        }
    }
}
}

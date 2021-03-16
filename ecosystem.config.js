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
        "user":"root",
        "host":["188.131.144.35"],
        "port":"22",
        "ref":"origin/main",
        "repo":"git@github.com:zpkweb/yobo-server.git",
        "path":"/root/yobo-server",
        "ssh_options":"StrictHostKeyChecking=no",
        "post-deploy" : "pm2 startOrRestart ecosystem.config.js --env production",
        "env":{
            "NODE_ENV":"production"
        }
    }
}
}

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
      }
    }
  ]
}

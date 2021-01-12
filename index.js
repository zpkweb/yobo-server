const { Bootstrap } = require('@midwayjs/bootstrap');
process.env.NODE_ENV = 'production'

Bootstrap
  .load(
    new (require('@midwayjs/web').Framework)().configure({
      port: 7001
    })
  )
  .run();


// require('midway/server');

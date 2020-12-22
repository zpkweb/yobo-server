const { Bootstrap } = require('@midwayjs/bootstrap');

Bootstrap
  .load(
    new (require('@midwayjs/web').Framework)().configure({
      port: 7001
    })
  )
  .run();

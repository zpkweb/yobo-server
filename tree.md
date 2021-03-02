.
├── README.md
├── api.html
├── api.http
├── api.md
├── dist
│   ├── app
│   │   └── view
│   │       └── api.nj
│   ├── aspect
│   │   ├── report.d.ts
│   │   └── report.js
│   ├── config
│   │   ├── config.default.d.ts
│   │   ├── config.default.js
│   │   ├── config.local.d.ts
│   │   ├── config.local.js
│   │   ├── config.prod.d.ts
│   │   ├── config.prod.js
│   │   ├── config.unittest.d.ts
│   │   ├── config.unittest.js
│   │   ├── locale
│   │   │   ├── en-US.json
│   │   │   └── zh-CN.json
│   │   ├── plugin.d.ts
│   │   └── plugin.js
│   ├── configuration.d.ts
│   ├── configuration.js
│   ├── controller
│   │   ├── client
│   │   │   ├── BFF
│   │   │   ├── commodity
│   │   │   ├── email
│   │   │   ├── my
│   │   │   ├── seller
│   │   │   └── user
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── server
│   │   │   ├── commodity
│   │   │   ├── page
│   │   │   ├── puppeteer
│   │   │   └── user
│   │   └── upload
│   │       ├── index.d.ts
│   │       └── index.js
│   ├── dto
│   │   └── user
│   │       ├── login.d.ts
│   │       ├── login.js
│   │       ├── register.d.ts
│   │       └── register.js
│   ├── entity
│   │   ├── activity
│   │   │   ├── activity.d.ts
│   │   │   └── activity.js
│   │   ├── commodity
│   │   │   ├── attribute
│   │   │   ├── commodity.d.ts
│   │   │   ├── commodity.js
│   │   │   ├── commodityBrowsingCount.d.ts
│   │   │   ├── commodityBrowsingCount.js
│   │   │   ├── options
│   │   │   └── packing
│   │   ├── coupon
│   │   │   ├── coupon.d.ts
│   │   │   └── coupon.js
│   │   ├── my
│   │   │   ├── activity.d.ts
│   │   │   ├── activity.js
│   │   │   ├── browsingHistory.d.ts
│   │   │   ├── browsingHistory.js
│   │   │   ├── coupon.d.ts
│   │   │   ├── coupon.js
│   │   │   ├── likeCommodity.d.ts
│   │   │   ├── likeCommodity.js
│   │   │   ├── likeSeller.d.ts
│   │   │   ├── likeSeller.js
│   │   │   ├── order.d.ts
│   │   │   ├── order.js
│   │   │   ├── shoppingCart.d.ts
│   │   │   └── shoppingCart.js
│   │   ├── order
│   │   │   ├── order.d.ts
│   │   │   └── order.js
│   │   ├── page
│   │   │   ├── banner.d.ts
│   │   │   └── banner.js
│   │   └── user
│   │       ├── address.d.ts
│   │       ├── address.js
│   │       ├── admin
│   │       ├── customerService
│   │       ├── identity
│   │       ├── member
│   │       ├── ordinary
│   │       ├── seller
│   │       ├── thirdParty
│   │       ├── user.d.ts
│   │       └── user.js
│   ├── middleware
│   │   ├── authorize.d.ts
│   │   ├── authorize.js
│   │   ├── global.d.ts
│   │   └── global.js
│   ├── midway.build.json
│   └── service
│       ├── BFF
│       │   ├── artworkOptions.d.ts
│       │   ├── artworkOptions.js
│       │   ├── banner.d.ts
│       │   ├── banner.js
│       │   ├── index.d.ts
│       │   └── index.js
│       ├── base
│       │   ├── commodity
│       │   ├── my
│       │   ├── page
│       │   └── user
│       ├── commodity
│       │   ├── attribute
│       │   ├── comment.d.ts
│       │   ├── comment.js
│       │   ├── commodity.d.ts
│       │   ├── commodity.js
│       │   ├── index.d.ts
│       │   ├── index.js
│       │   └── options
│       ├── email
│       │   ├── index.d.ts
│       │   └── index.js
│       ├── my
│       │   ├── browsingHistory.d.ts
│       │   ├── browsingHistory.js
│       │   ├── index.d.ts
│       │   ├── index.js
│       │   ├── likeCommodity.d.ts
│       │   ├── likeCommodity.js
│       │   ├── likeSeller.d.ts
│       │   └── likeSeller.js
│       ├── page
│       │   ├── banner.d.ts
│       │   ├── banner.js
│       │   ├── index.d.ts
│       │   └── index.js
│       ├── puppeteer
│       │   ├── index.d.ts
│       │   ├── index.js
│       │   ├── seller.d.ts
│       │   └── seller.js
│       ├── upload
│       │   ├── images.d.ts
│       │   ├── images.js
│       │   ├── index.d.ts
│       │   └── index.js
│       └── user
│           ├── address.d.ts
│           ├── address.js
│           ├── identityList.d.ts
│           ├── identityList.js
│           ├── login.d.ts
│           ├── login.js
│           ├── register.d.ts
│           ├── register.js
│           ├── seller.d.ts
│           ├── seller.js
│           ├── user.d.ts
│           └── user.js
├── ecosystem.config.js
├── index.js
├── logs
│   └── yobo
│       ├── common-error.log
│       ├── common-error.log.2021-02-23
│       ├── common-error.log.2021-02-24
│       ├── common-error.log.2021-02-25
│       ├── common-error.log.2021-02-26
│       ├── common-error.log.2021-02-27
│       ├── common-error.log.2021-02-28
│       ├── egg-schedule.log
│       ├── egg-schedule.log.2021-02-23
│       ├── egg-schedule.log.2021-02-24
│       ├── egg-schedule.log.2021-02-25
│       ├── egg-schedule.log.2021-02-26
│       ├── egg-schedule.log.2021-02-27
│       ├── egg-schedule.log.2021-02-28
│       ├── midway-agent.log
│       ├── midway-agent.log.2021-02-23
│       ├── midway-agent.log.2021-02-24
│       ├── midway-agent.log.2021-02-25
│       ├── midway-agent.log.2021-02-26
│       ├── midway-agent.log.2021-02-27
│       ├── midway-agent.log.2021-02-28
│       ├── midway-core.log
│       ├── midway-core.log.2021-02-23
│       ├── midway-core.log.2021-02-24
│       ├── midway-core.log.2021-02-25
│       ├── midway-core.log.2021-02-26
│       ├── midway-core.log.2021-02-27
│       ├── midway-core.log.2021-02-28
│       ├── midway-web.log
│       ├── midway-web.log.2021-02-23
│       ├── midway-web.log.2021-02-24
│       ├── midway-web.log.2021-02-25
│       ├── midway-web.log.2021-02-26
│       ├── midway-web.log.2021-02-27
│       └── midway-web.log.2021-02-28
├── package.json
├── public
│   ├── api.html
│   └── images
│       ├── avatar
│       │   ├── 10245_body_042b2a54c96b6b658498561cba2aa8aa-1610954768856.jpeg
│       │   ├── 10253_body_e4ac52aa0099b60dcdae9b14188f2155-1610954631211.jpeg
│       │   ├── 10253_body_e4ac52aa0099b60dcdae9b14188f2155-1613986474588.jpeg
│       │   ├── 10269_body_fbecbd221ce43030a9cdb422516a1cac-1610954737775.jpeg
│       │   ├── 10281_body_916e319c1ac8eba62b42c4d2d721fa53-1610954581250.jpeg
│       │   ├── artist_profile_1579_2eb0066ddbe50f7f461a8f81d87470e0-1610506969474.jpeg
│       │   ├── artist_profile_1579_2eb0066ddbe50f7f461a8f81d87470e0-1610507021910.jpeg
│       │   ├── artist_profile_1579_2eb0066ddbe50f7f461a8f81d87470e0-1611021457497.jpeg
│       │   ├── seller-1.png
│       │   ├── seller-2.png
│       │   ├── seller-3.png
│       │   ├── yobo-logo-1609143103461.png
│       │   ├── yobo-logo-1609143143245.png
│       │   ├── yobo-logo-1609143176624.png
│       │   ├── yobo-logo-1609143182025.png
│       │   ├── yobo-logo-1609143213682.png
│       │   ├── yobo-logo-1609143228031.png
│       │   ├── yobo-logo-1609143237875.png
│       │   ├── yobo-logo-1609143508667.png
│       │   ├── yobo-logo-1609143641937.png
│       │   ├── yobo-logo-1609143648280.png
│       │   ├── yobo-logo-1609143681476.png
│       │   ├── yobo-logo-1609143695579.png
│       │   ├── yobo-logo-1609143701366.png
│       │   ├── yobo-logo-1609143938461.png
│       │   ├── yobo-logo-1609144011139.png
│       │   ├── yobo-logo-1609144175412.png
│       │   ├── yobo-logo-1609144271946.png
│       │   ├── yobo-logo-1609144590900.png
│       │   ├── yobo-logo-1609144843306.png
│       │   ├── yobo-logo-1609748414730.png
│       │   ├── yobo-logo-1609748977746.png
│       │   ├── yobo-logo-1609748988585.png
│       │   ├── yobo-logo-1609752457188.png
│       │   ├── yobo-logo-1609752551776.png
│       │   ├── yobo-logo-1609752622167.png
│       │   ├── yobo-logo-1609752902895.png
│       │   ├── yobo-logo-1609752981145.png
│       │   └── yobo-logo-1609753004730.png
│       ├── banner
│       │   ├── 1.png
│       │   ├── 10245_artwork_94ac68062c8dc2909727dd617fe13e64-1613742183398.jpeg
│       │   ├── 10245_body_042b2a54c96b6b658498561cba2aa8aa-1613744058318.jpeg
│       │   ├── 10245_body_042b2a54c96b6b658498561cba2aa8aa-1613744103246.jpeg
│       │   ├── 10245_body_042b2a54c96b6b658498561cba2aa8aa-1613789198779.jpeg
│       │   ├── 10245_body_042b2a54c96b6b658498561cba2aa8aa-1613789345968.jpeg
│       │   ├── 10245_body_042b2a54c96b6b658498561cba2aa8aa-1613791237061.jpeg
│       │   ├── 10245_body_042b2a54c96b6b658498561cba2aa8aa-1613804444650.jpeg
│       │   ├── 10245_body_042b2a54c96b6b658498561cba2aa8aa-1613804962064.jpeg
│       │   ├── 2.jpg
│       │   ├── 3.jpg
│       │   ├── 4.jpg
│       │   ├── 703_d35de212d7faf5e822a8b645c0ee5c46-1613741930111.jpeg
│       │   ├── home_slider3-1613984829248.c8cfb766
│       │   ├── home_slider7-1613984939873.9db2bf82
│       │   ├── painting_c-1611309396621.8797d869
│       │   ├── parallax1-1611308814663.jpg
│       │   ├── parallax2-1611308809172.jpg
│       │   ├── photoFrame-1-1611308193632.png
│       │   ├── photoFrame-1-1611308367326.png
│       │   ├── photoFrame-2-1611308226311.png
│       │   ├── photoFrame-4-1611308261574.png
│       │   ├── photoFrame-5-1611308478545.png
│       │   ├── photoFrame-6-1611308483435.png
│       │   └── quasar-1611308802870.jpg
│       ├── commodity
│       │   ├── 1.png
│       │   ├── 10245_artwork_94ac68062c8dc2909727dd617fe13e64\ (1)-1613985679081.jpeg
│       │   ├── 10245_artwork_94ac68062c8dc2909727dd617fe13e64-1610955907423.jpeg
│       │   ├── 10253_artwork_d5c35601ab5fe1b85e8cd8a549ea8526\ (1)-1613986217468.jpeg
│       │   ├── 10253_body_e4ac52aa0099b60dcdae9b14188f2155-1610955863122.jpeg
│       │   ├── 10269_artwork_f8769960e4b8e0249c9b43b5f8365397-1610955886651.jpeg
│       │   ├── 10281_artwork_0798c119cbeade8c555dddf53de896c0-1610955838323.jpeg
│       │   ├── 2.png
│       │   ├── 3.png
│       │   ├── 4.png
│       │   ├── 703_d35de212d7faf5e822a8b645c0ee5c46-1610509250656.jpeg
│       │   ├── 703_d35de212d7faf5e822a8b645c0ee5c46-1611225276997.jpeg
│       │   ├── 703_d35de212d7faf5e822a8b645c0ee5c46-1611226816054.jpeg
│       │   ├── painting_e-1611225509213.c5c9a263
│       │   ├── photoFrame-1-1611303929137.png
│       │   ├── yobo-logo-1608203380166.png
│       │   ├── yobo-logo-1608203423829.png
│       │   ├── yobo-logo-1608203468500.png
│       │   ├── yobo-logo-1608203639371.png
│       │   ├── yobo-logo-1608203697292.png
│       │   ├── yobo-logo-1608204000174.png\ 
│       │   ├── yobo-logo-1608204063445.png
│       │   ├── yobo-logo-1608204129120.png
│       │   ├── yobo-logo-1608204213589.png
│       │   ├── yobo-logo-1608204235186.png
│       │   ├── yobo-logo-1608204282556.png
│       │   ├── yobo-logo-1608204302625.png
│       │   ├── yobo-logo-1608204354335.png
│       │   ├── yobo-logo-1608204376515.png
│       │   ├── yobo-logo-1608204424477.png
│       │   ├── yobo-logo-1608204431584.png
│       │   ├── yobo-logo-1608204440634.png
│       │   ├── yobo-logo-1608204712859.png
│       │   ├── yobo-logo-1608204716919.png
│       │   ├── yobo-logo-1608204720584.png
│       │   ├── yobo-logo-1608204724028.png
│       │   ├── yobo-logo-1608259665339.png
│       │   ├── yobo-logo-1608796114403.png
│       │   ├── yobo-logo-1609137436500.png
│       │   ├── yobo-logo-1609137510561.png
│       │   ├── yobo-logo-1609137836200.png
│       │   ├── yobo-logo-1609137931604.png
│       │   ├── yobo-logo-1609138154101.png
│       │   ├── yobo-logo-1609138160291.png
│       │   ├── yobo-logo-1609139354078.png
│       │   ├── yobo-logo-1610174593237.png
│       │   └── yobo-logo-1610385493835.png
│       ├── commodityyobo-logo-1608203164876.png
│       ├── commodityyobo-logo-1608203221388.png
│       ├── commodityyobo-logo-1608203286711.png
│       └── 主�\230
│           ├── favorites-fill-1611542756993.png
│           ├── painting_b-1610515529655.45cf9f06
│           ├── painting_c-1610512542085.8797d869
│           ├── painting_c-1610512730485.8797d869
│           ├── painting_e-1610515538739.c5c9a263
│           ├── parallax1-1610513095581.jpg
│           ├── parallax1-1610513824914.jpg
│           ├── parallax1-1610513845466.jpg
│           ├── parallax1-1610514122047.jpg
│           ├── parallax1-1610514466430.jpg
│           ├── parallax1-1610514536471.jpg
│           ├── parallax1-1610514551008.jpg
│           ├── parallax1-1610514910697.jpg
│           ├── parallax1-1610515259576.jpg
│           ├── parallax1-1610515397851.jpg
│           ├── parallax1-1610515463608.jpg
│           ├── parallax2-1610512637855.jpg
│           ├── parallax2-1610513210142.jpg
│           ├── parallax2-1610514034730.jpg
│           ├── parallax2-1610514192630.jpg
│           ├── parallax2-1610515425847.jpg
│           ├── quasar-1610512936141.jpg
│           └── quasar-1610515377176.jpg
├── root@81.70.62.235
├── run
│   ├── agent_config.json
│   ├── agent_config_meta.json
│   ├── agent_timing_45690.json
│   ├── application_config.json
│   ├── application_config_meta.json
│   ├── application_timing_45690.json
│   └── router.json
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
├── yobo-server-v0.10.zip
└── yobo-server-v0.11.zip

128 directories, 362 files

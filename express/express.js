const express = require('express') // 引入express模块
const fs = require('fs') // 引入fs模块
const homeRouter = require('./routes/homeRouter') // 引入home路由
const cookieParser = require('cookie-parser') // 引入cookie-parser模块
const session = require('express-session') // 引入express-session模块
const MongoStore = require('connect-mongo') // 引入connect-mongo模块
const db = require('./db/db')
const config = require('./config/config')

const app = express() // 创建express实例

app.use(cookieParser()) // 使用cookie-parser中间件

app.use(session({
    name: 'sid', // 设置cookie的名称
    secret: 'secret', // 设置session的密钥
    saveUninitialized: false, // 设置session的初始化
    resave: true, // 设置session的重新保存
    store: MongoStore.create({ mongoUrl: `mongodb://${config.DBHOST}:${config.DBPORT}/${config.DBNAME}` }), // 设置session的存储方式，使用connect-mongo模块
    cookie: {
        httpOnly: true, // 设置cookie的httpOnly属性
        maxAge: 1000 * 60 * 10 // 设置cookie的过期时间
    } // 设置cookie的配置
})) // 使用express-session中间件

// 中间件，记录请求的url和ip
function recordMiddleware(req, res, next) {
    let referer = req.get('Referer')
    let { url, ip } = req
    fs.appendFileSync(__dirname + '/url_ip.txt', `url: ${url}, ip: ${ip}\n`) // 将url和ip写入文件

    if (referer) {
        let url1 = new URL(referer)
        console.log(url1.hostname)
        if (url1.hostname === 'localhost') {
            next() // 调用下一个中间件或路由处理函数    
        } else {
            res.end('404')
        }
    } else {
        next()
    }
}

app.use(recordMiddleware) // 使用中间件

app.use(homeRouter) // 使用homeRouter路由

app.use(express.static(__dirname + '/views')) // 设置静态文件目录

db((mongoose) => {
    console.log('mongoose连接成功')
}, (err) => {
    console.log(err)
})

app.listen(9000, () => {
    console.log('server is running on port 9000')
})
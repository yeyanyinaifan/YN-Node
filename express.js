const express = require('express') // 引入express模块
const fs = require('fs') // 引入fs模块
const bodyParser = require('body-parser') // 引入body-parser模块
const homeRouter = require('./routes/homeRouter') // 引入home路由

const app = express() // 创建express实例

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

app.use(express.static(__dirname + '/')) // 设置静态文件目录

const jsonParser = bodyParser.json() // 解析json格式的请求体
const urlencodedParser = bodyParser.urlencoded({ extended: false }) // 解析urlencoded格式的请求体

app.post('/login', urlencodedParser, (req, res) => {
    res.end('登录成功' + req.body.username + ' ' + req.body.password)
})

app.listen(9000, () => {
    console.log('server is running on port 9000')
})
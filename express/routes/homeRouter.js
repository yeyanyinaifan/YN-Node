const express = require('express');
const bodyParser = require('body-parser') // 引入body-parser模块
const UserModel = require('../models/UserModel')
const router = express.Router();
const checkLoginMiddleware = require('../middlewares/checkLoginMiddleware')
const jwt = require('jsonwebtoken') // 引入jsonwebtoken模块
const checkTokenMiddleware = require('../middlewares/checkTokenMiddleware')

router.get('/home', checkLoginMiddleware, (req, res) => {
    res.send(`<h1>欢迎你，${req.session.username}，id为${req.session._id}</h1>`)
})

router.get('/', (req, res) => {
    res.redirect('/home')
    // console.log(req.method)
    // console.log(req.url)
    // console.log(req.httpVersion)
    // console.log(req.headers)

    // console.log(req.path)
    // console.log(req.query)

    // console.log(req.ip)

    // console.log(req.get('Host'))

    // res.statusCode = 200
    // res.statusMessage = 'ok'
    // res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // res.end('默认首页')

    // res.status(200)
    // res.set({
    //     'Content-Type': 'text/html;charset=utf-8'
    // })
    // res.send('默认首页')
    // res.status(200).set({ 'Content-Type': 'text/html;charset=utf-8' }).send('默认首页')
})

// router.get('/:id.html', (req, res) => {
//     res.setHeader('Content-Type', 'text/html;charset=utf-8')
//     res.end(`<h1>id: ${req.params.id}</h1>`)
// })

// router.get('/other', (req, res) => {
//     res.redirect('/home')
//     res.download(__dirname + '/package.json')
//     res.json({ name: '张三', age: 18 })
//     res.sendFile(__dirname + '/index.html')
// })

router.all('/test', checkLoginMiddleware, (req, res) => {
    res.end('test')
})

router.all('/testToken', checkTokenMiddleware, (req, res) => {
    res.json({
        code: 200,
        msg: 'testToken',
        data: req.decoded
    })
})

// router.all('/*', (req, res) => {
//     res.end('404')
// })

router.get('/setCookie', (req, res) => {
    res.cookie('name', 'zhangsan', {
        maxAge: 1000 * 60 * 10
    })
    res.send('setCookie')
})

router.get('/getCookie', (req, res) => {
    console.log(req.cookies)
    res.send('getCookie')
})

router.get('/clearCookie', (req, res) => {
    res.clearCookie('name')
    res.send('clearCookie')
})

// router.get('/login', (req, res) => {
//     if (req.query?.username === 'admin' && req.query?.password === '123456') {
//         req.session.username = req.query.username
//         res.send('get测试登录成功')
//     } else {
//         res.send('get测试登录失败,请输入正确的用户名和密码')
//     }
// })

const jsonParser = bodyParser.json() // 解析json格式的请求体
const urlencodedParser = bodyParser.urlencoded({ extended: false }) // 解析urlencoded格式的请求体

router.post('/login', urlencodedParser, async (req, res) => {
    if (req.body?.username && req.body?.password) {
        const data = await UserModel.findOne({ username: req.body.username, password: req.body.password })
        if (data) {
            req.session.username = data.username
            req.session._id = data._id
            jwt.sign({
                username: data.username,
                _id: data._id
            }, 'secret', {
                expiresIn: '1m'
            }, (err, token) => {
                res.send(token)
            })
            // res.redirect('/home')
        } else {
            res.send('登录失败')
        }
    } else {
        res.send('请输入用户名和密码')
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send('退出登录成功')
    })
})

router.get('/reg', (req, res) => {
    if (req.query?.username && req.query?.password) {
        res.send('get测试注册成功')
    } else {
        res.send('get注册失败')
    }
})

router.post('/reg', urlencodedParser, async (req, res) => {
    if (req.body?.username && req.body?.password) {
        if (await UserModel.findOne({ username: req.body.username })) {
            res.send('用户名已存在')
        } else {
            UserModel.create({
                username: req.body.username,
                password: req.body.password
            }).then(res1 => {
                console.log(res1)
                res.send('注册成功')
            }).catch(err => {
                console.log(err)
                res.send('注册失败')
            })
        }
    } else {
        res.send('请输入用户名和密码')
    }
})

module.exports = router
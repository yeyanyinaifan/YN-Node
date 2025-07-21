const express = require('express');

const router = express.Router();

router.get('/home', (req, res) => {
    res.send('home')
})

router.get('/', (req, res) => {
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
    res.status(200).set({ 'Content-Type': 'text/html;charset=utf-8' }).send('默认首页')
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

router.all('/test', (req, res) => {
    res.end('test')
})

// router.all('/*', (req, res) => {
//     res.end('404')
// })

module.exports = router
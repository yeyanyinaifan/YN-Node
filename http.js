const http = require('http')
const fs = require('fs')
const path = require('path')
// const url = require('url')

let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'image/mp4',
    mp3: 'image/mp3',
    json: 'application/json',
    pdf: 'application/pdf',
    doc: 'application/msword',
    txt: 'text/plain',
}

const server = http.createServer((request, response) => {
    // response.statusCode = 404
    // response.statusMessage = 'test'
    // response.setHeader('content-type', 'text/html;charset=utf-8')
    // response.write('love')

    // console.log(request.method)
    // console.log(request.url)
    // console.log(request.httpVersion)
    // console.log(request.headers)
    // console.log(request.headers.host)

    // let body = ''
    // request.on('data', chunk => {
    //     body += chunk
    // })
    // request.on('end', () => {
    //     console.log(body)
    // })

    //获取url
    // let res = url.parse(request.url, true)
    // console.log(res.pathname)
    // console.log(res.query.name)
    //另外一种方式
    let url1 = new URL(request.url, 'http://localhost:9000')
    // let { method } = request
    let { pathname } = url1

    let filePath = __dirname + pathname
    let ext = path.extname(filePath).slice(1)
    let type = mimes[ext]
    if (type) {
        response.setHeader('content-type', type + ';charset=utf-8')
    } else {
        response.setHeader('content-type', 'application/octet-stream')
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.statusCode = 500
            response.end('Not Found')
            return
        }
        response.end(data)
    })

    // if (method === 'GET' && pathname === '/index.html') {
    //     let html = fs.readFileSync(__dirname + '/index.html')
    //     response.end(html)
    // } else if (method === 'GET' && pathname === '/reg') {
    //     response.end('注册页面')
    // } else if (method === 'GET' && pathname === '/index.css') {
    //     response.end(fs.readFileSync(__dirname + pathname))
    // } else if (method === 'GET' && pathname === '/index.js') {
    //     response.end(fs.readFileSync(__dirname + pathname))
    // } else {
    //     response.end('Not Found')
    // }
})

server.listen(9000, () => {
    console.log('服务已经启动')
})
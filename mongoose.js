const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/test')

mongoose.connection.on('open', () => {
    console.log('连接成功')
})

mongoose.connection.on('error', (err) => {
    console.log('连接失败', err)
})

mongoose.connection.on('close', () => {
    console.log('连接关闭')
})

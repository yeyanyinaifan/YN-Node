const { DBHOST, DBPORT, DBNAME } = require('./config/config')

module.exports = function (success, error = (err) => {
    console.log('连接失败~', err)
}, close = () => {
    console.log('连接关闭')
}) {

    const mongoose = require('mongoose')

    mongoose.set('strictQuery', true)

    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    mongoose.connection.once('open', () => {
        console.log('连接成功')
        success(mongoose)
    })

    mongoose.connection.once('error', (err) => {
        error(err)
    })

    mongoose.connection.once('close', () => {
        close()
    })
}
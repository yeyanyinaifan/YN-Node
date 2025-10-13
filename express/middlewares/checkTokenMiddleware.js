const jwt = require('jsonwebtoken') // 引入jsonwebtoken模块
module.exports = (req, res, next) => {
    const token = req.get('token')
    console.log('token', token)
    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            console.log('err', err)
            res.redirect('/login')
        } else {
            req.decoded = decoded
            next()
        }
    })
}
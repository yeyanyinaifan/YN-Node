const db = require('./db')
const BookModel = require('./models/BookModel')

db((mongoose) => {
    // BookModel.create({
    //     name: '西游记',
    //     author: '吴承恩',
    //     price: 100
    // }).then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    // BookModel.deleteOne({
    //     name: '西游记'
    // }).then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    // BookModel.deleteMany({
    //     name: '西游记'
    // }).then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    // BookModel.updateOne({
    //     name: '西游记'
    // }, {
    //     price: 1000000
    // }).then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    // BookModel.updateMany({
    //     name: '西游记'
    // }, {
    //     price: 1000000
    // }).then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    // BookModel.findOne({
    //     name: '西游记'
    // }).then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    // BookModel.findById('687a0c33a902b9a9d90951cc').then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    // BookModel.find({
    //     author: '吴承恩'
    // }).then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    // BookModel.find({
    //     price: {
    //         $gte: 100,
    //         $lte: 1000000
    //     },
    //     name: new RegExp('^西'),
    //     author: /吴/
    // }).then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    // BookModel.find({$and: [{price: {$gte: 100}}, {name: "西游记"}]}).sort({price: -1}).then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    // BookModel.find({$or: [{name: "西游记"}, {name: "红楼梦"}]}).then(res => {
    //     console.log(res)
    //     mongoose.disconnect()
    // }).catch(err => {
    //     console.log(err)
    //     mongoose.disconnect()
    // })

    BookModel.find().select({
        name: 1,
        author: 1,
        _id: 0
    }).sort({price: 1}).limit(2).skip(1).then(res => {
        console.log(res)
        mongoose.disconnect()
    }).catch(err => {
        console.log(err)
        mongoose.disconnect()
    })
})
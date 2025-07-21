const mongoose = require('mongoose')

let BookSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['西游记', '红楼梦', '水浒传', '三国演义'],
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 100,
        min: 0,
        max: 1000000
    }
})

let BookModel = mongoose.model('Book', BookSchema)

module.exports = BookModel
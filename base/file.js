const fs = require('fs')
// const process = require('process')

fs.writeFile('./file.txt', '测试创建一个txt并写入', err => {
    if (err) {
        console.log(err)
        return
    }
    // console.log('写入成功')
})

fs.writeFileSync('./fileSync.txt', '同步写入')

fs.writeFile('./file.txt', '\r\nwriteFile追加写入', { flag: 'a' }, err => {
    if (err) {
        console.log(err)
        return
    }
    // console.log('写入成功')
})

fs.appendFile('./file.txt', '\r\nappendFile追加写入', err => {
    if (err) {
        console.log(err)
        return
    }
    // console.log('写入成功')
})

fs.appendFileSync('./fileSync.txt', '\r\nappendFileSync同步追加写入')

const ws = fs.createWriteStream('./fileStream.txt')

ws.write('第一行\r\n')
ws.write('第二行\r\n')
ws.write('第三行\r\n')
ws.write('第四行\r\n')

ws.close()

fs.readFile('./file.txt', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log('读取成功\n', data.toString())
})

const data = fs.readFileSync('./fileSync.txt')
// console.log('同步读取成功\n', data.toString())
fs.writeFileSync('./fileSync2.txt', data)

// const rs = fs.createReadStream('./fileStream.txt')
const rs = fs.createReadStream('./Gp7gjXHb0AAMAU8.jpeg')

const ws2 = fs.createWriteStream('./Gp7gjXHb0AAMAU8-copy.jpeg')

rs.on('data', chunk => {
    // console.log(chunk)
    // console.log(chunk.length)
    ws2.write(chunk)
})

// pipe管道
// rs.pipe(ws)

rs.on('end', () => {
    // console.log('读取完成')
    // console.log(process.memoryUsage()) // rss 内存使用量
})

rs.on('error', (err) => {
    console.error('读取文件时发生错误:', err)
})

fs.rename('./file.txt', './newFile.txt', err => {
    if (err) {
        console.log(err)
        return
    }
    // console.log('重命名成功')
})

// fs.renameSync('./newFile.txt', './newFile2.txt')

// fs.unlink('./newFile2.txt', err => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     // console.log('删除成功')
// })

// fs.rm('./newFile.txt', err => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     // console.log('删除成功')
// })

fs.mkdir('./html/src', { recursive: true }, err => {
    if (err) {
        console.log(err)
        return
    }
    // console.log('创建文件夹成功')
})

fs.readdir('./', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log(data)
})

// fs.rmdir('./html', {recursive: true}, err => {
// fs.rm('./html', {recursive: true}, err => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     // console.log('删除文件夹成功')
// })

fs.stat('./Gp7gjXHb0AAMAU8.jpeg', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    // console.log(data.isFile())
    // console.log(data.isDirectory())
})

// console.log(__dirname)
fs.writeFile(__dirname + '/file.txt', '测试创建一个txt并写入', err => {
    if (err) {
        console.log(err)
        return
    }
    // console.log('写入成功')
})

const path = require('path')

// console.log(path.resolve(__dirname, 'file.txt'))
// console.log(path.sep)
console.log(path.parse(__filename))
// console.log(path.basename(__filename))
// console.log(path.dirname(__filename))
// console.log(path.extname(__filename))
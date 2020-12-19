// 1.导入mysql模块
const mysql = require('mysql')
// 2.创建mysql的连接对象
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'adjust_game'
})
module.exports = conn;
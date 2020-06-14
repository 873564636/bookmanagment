//连接数据库
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/bookmanage');

/**
 * 固定写法，连接对象，连接信息
 */
var db = mongoose.connection;//数据库的连接对象
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("数据库"+db.name+"连接成功")
});

module.exports = mongoose
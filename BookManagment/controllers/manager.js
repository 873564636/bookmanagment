var beanBook = require('../models/bean_book')

//查看所有图书的逻辑
exports.allBook=(req,res)=>{
    beanBook.getAllBook(function (arr) {  //获取db.js
        res.send(arr) //发送数据
    });
}

//查看符合条件的图书信息
exports.oneBook=(req,res)=>{
    beanBook.getOneBook(req.body,function (arr) {
        res.send(arr)  //返回查询到的结果
    })
}

//添加图书的逻辑
exports.addBook=(req,res)=>{
    beanBook.addOneBook(req.body,function (arr) {
        res.send(arr)  //返回查询结果
    })
}

exports.delBook=(req,res)=>{
    beanBook.delOnBook()
}

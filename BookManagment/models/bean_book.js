var express = require('express')
var user_book = require('../bean/deploy_book')

//查询所有图书的数据库操作
function getAllBook (callback) {
    user_book.find(function (err,docs) {
        if (err){
            console.log("错误："+err)
        }else {
            console.log("集合为："+docs)
            callback(docs)
        }
    })
}

//关键字查询的操作，模糊查询
function getOneBook(data,callback){
    var {kw} = data
    var reg=new RegExp(kw) // 创建一个正则表达式 匹配关键字
    console.log(kw)

    //设置正则表达规则
    user_book.find({$or:[{book_id: {$regex: reg}},
            {book_name:{$regex:reg}},{book_author:{$regex:reg}},{book_pub:{$regex:reg}},
            {book_sort:{$regex:reg}}]})
        .then((data)=>{
            callback({err:0,msg:'查询ok',list:data})
        })
        .catch(()=>{
            callback({err:-1,msg:'查询失败'})
        })
}

function addOneBook(data,callback){
    user_book.insertMany(data)
        .then(()=>{
            callback({err:0,msg:'添加成功'})
        })
        .catch(()=>{
            callback({err:1,msg:"添加失败，请重试！！"})
        })
}

function delOnBook(){}

exports.getAllBook = getAllBook
exports.getOneBook = getOneBook
exports.addOneBook = addOneBook
exports.delOnBook = delOnBook
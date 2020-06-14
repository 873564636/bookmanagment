//作为数据连接的bean使用
const mongoose = require('../db')
//数据库中每一列的属性值，以及是否...
var bookSchema = new mongoose.Schema({
    book_id : {type:Number},
    book_name : {type:String},
    book_author : {type:String},
    book_pub : {type:String},
    book_num : {type:Number},
    book_sort : {type:String},
    book_record : {type:Date}
},  {collection:'book'
});

/**
 * 将schema 对象转化为数据模型model,schema(属性)不具备操作能力，需要有model(数据模型操作)
 创建模型，可以用它来操作数据库中的person集合，指的是整体。创建一个person集合
 person：数据库中的集合名称，当我们对其添加数据时如果person已经存在，则会保存到其目录下，
 如果未存在，则会创建person集合，然后再保存数据
 */
var user_book = mongoose.model('book', bookSchema);
console.log("集合book已连接")

module.exports = user_book
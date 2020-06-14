const mongoose = require('../db')
//数据库中每一列的属性值，以及是否...
var studentSchema = new mongoose.Schema({
    stu_id : {type:Number},
    stu_name : {type:String},
    stu_sex : {type:String},
    stu_age : {type:Number},
    stu_pro : {type:String},
    stu_grade : {type:String},
    stu_integrity : {type:Number},
    password : {type:String}
},{collection:'student'});
/**
 * 将schema 对象转化为数据模型model,schema(属性)不具备操作能力，需要有model(数据模型操作)
 创建模型，可以用它来操作数据库中的person集合，指的是整体。创建一个person集合
 person：数据库中的集合名称，当我们对其添加数据时如果person已经存在，则会保存到其目录下，
 如果未存在，则会创建person集合，然后再保存数据
 */

var user_student = mongoose.model('student',studentSchema);
console.log("集合student已连接")

module.exports = user_student
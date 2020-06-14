var express = require("express");
var bodyParser = require('body-parser');
var manager = require("./controllers/manager");
var app = express();

/**
 * 一下两行配置body-parser
 * 通过req.body拿到客户端传过来的数据
 */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//查看所有图书信息
app.get("/allbook",manager.allBook);
//查找指定条件的图书信息
app.post("/onebook",manager.oneBook)
app.post("/addbook",manager.addBook);
app.post("/delbook",manager.delBook)

/**
 * 删除学生
 */
// app.get("/deletes",students.cutoff);
//
// app.post("/deletes",students.doCut);

/**
 * 添加学生
 * 其中students.add应该出现在控制器students.js中
 */
// app.get("/add",students.add);

/**
 * 添加学生的逻辑用app.post()
 * 和上一个add相比这个用于处理post请求
 */
// app.post("/add",students.doAdd);

/**
 * 修改学生
 */


app.use(express.static(__dirname+'/public'));

app.listen(3000,()=>{
    console.log("服务器图书管理启动了~~")
})
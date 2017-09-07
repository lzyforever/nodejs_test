var express = require('express');
var app = express();

app.get("/", function(req, res){
	res.send("你好");
});

app.get("/test", function(req, res){
	res.send("这个是测试页面");
});

//正则匹配
app.get(/^\/student\/([\d]{10})$/, function(req,res){
	res.send("学生信息，学号"+ req.params[0]);	
});

//参数形式
app.get("/teacher/:gonghao", function(req, res){
	res.send("老师信息，工号" + req.params["gonghao"]);//req.params.gonghao
});

app.listen(3000);
console.log("server is start listen port : 3000");
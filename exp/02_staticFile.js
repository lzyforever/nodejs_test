var express = require("express");
var app = express();

app.use(express.static("./public"));//中间件，与正常的路由不冲突,前提是public文件夹下面没有路由同名

app.get("/haha", function (req, res){
	console.log("once");
	res.send("hahah");
});

app.listen(3000);
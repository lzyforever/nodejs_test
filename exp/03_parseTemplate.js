var express = require("express");

//首先npm install --save ejs
//不需要引入ejs的包，自动帮助完成

var app = express();

app.set("view engine", "ejs");//设置视图引擎

app.get("", function(req,res){
	res.render("haha", {//haha不需要写后缀
		"news" : ["我是小新闻啊", "我是小清新啊", "我也是啊!"]
	});
});

app.listen(3000);
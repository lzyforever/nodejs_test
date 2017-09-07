var express = require("express");

var app = express();

//设置模板引擎,自动会在项目的views文件夹下找
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("form");
});

app.post("/",function(req,res){
    //将数据添加进入数据库
    res.send("成功");
});

app.listen(3000);
var express = require("express");
var app = express();

app.set("view engine","ejs");

//渲染模版引擎
app.get("/",function(req,res){
    res.render("haha",{news:[]});
});

//发送JSON数据
app.get("/check",function(req,res){
    res.send({
        "user" : "ok"
    });
});

app.listen(3000);
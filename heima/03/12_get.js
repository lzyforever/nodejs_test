var express = require("express");

var app = express();

//get请求
app.get("/",function(req,res){
    console.log(req.query);
    res.send();
});

app.listen(3000);
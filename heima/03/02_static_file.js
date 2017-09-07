var express = require("express");

var app = express();

//静态文件处理能力
app.use(express.static("./public"));

app.get("/haha",function(req,res){
    res.send("haha ");
});

app.listen(80);
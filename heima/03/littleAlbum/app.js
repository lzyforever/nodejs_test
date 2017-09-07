var express = require("express");
var app = express();
var router = require("./controller");

app.set("view engine", "ejs");

//路由中间件，提供静态文件
app.use(express.static("./public"));
//上传的这些文件也需要静态。。。。
app.use(express.static("./uploads"));

app.get("/", router.showIndex);
app.get("/:albumName", router.showAlbum);
app.get("/up", router.showUp);
app.post("/up", router.doPost);

//404最后的中间件
app.use(function(req, res){
    res.render("404");
});

app.listen(3000, function(){
    console.log("server ready...");
});


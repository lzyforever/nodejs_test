var http = require("http");
var fs = require("fs");
var ejs = require("ejs");
var path = require("path");
var url = require("url");
var querystring = require("querystring");
var formidable = require('formidable');
var util = require("util");

var server = http.createServer(function(req, res){
    if (req.url == "/favicon.ico") {
        return;
    }
    if (req.url == "/") {
        fs.readdir("./album/", function(err, files){
            var directorys = [];
            (function iterator(i){
                if (i == files.length){
                    printAlbum(res, directorys);
                    return;
                }
                fs.stat("./album/"+files[i], function(err, status){
                    if (status.isDirectory()){
                        directorys.push(files[i])
                    }
                    iterator(i+1);
                });
            })(0);
        });
    }

    if (req.url == "/album/01.png") {
        fs.readFile("./album/01.png", function(err, data){
            //显示
            res.writeHead(200,{"Content-Type":"image/png"});
            res.end(data);
        });
    }

    var pathname = url.parse(req.url).pathname;
    //拓展名
    var extname = path.extname(pathname);
    if (extname == ".jpg") {
        fs.readFile(__dirname+pathname, function(err, data){
            //显示
            res.writeHead(200,{"Content-Type":"image/jpg"});
            res.end(data);
        });
    }
    if (extname == ".png") {
        fs.readFile(__dirname+pathname, function(err, data){
            //显示
            res.writeHead(200,{"Content-Type":"image/png"});
            res.end(data);
        });
    }
    if (extname == ".css") {
        fs.readFile(__dirname + pathname, function(err, data){
            //显示
            res.writeHead(200,{"Content-Type":"text/css"});
            res.end(data);
        });
    }
    if (extname == ".js") {
        fs.readFile(__dirname + pathname, function(err, data){
            //显示
            res.writeHead(200,{"Content-Type":"application/x-javascript"});
            res.end(data);
        });
    }

    var reg = /^\/[0-9a-zA-Z]+$/g;
    if (reg.test(req.url)){
        if (req.url == "/upload") {
            fs.readdir("./album/", function(err, files){
                var directorys = [];
                (function iterator(i){
                    if (i == files.length){
                        fs.readFile("./up.ejs", function(err, data){
                            var template = data.toString();
                            var dictionary = {
                                directorys : directorys
                            };
                            var html = ejs.render(template, dictionary);
                            //显示
                            res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
                            res.end(html);
                        })
                        return;
                    }
                    fs.stat("./album/"+files[i], function(err, status){
                        if (status.isDirectory()){
                            directorys.push(files[i])
                        }
                        iterator(i+1);
                    });
                })(0);
            });
        } else {
            var dirName = req.url.substr(1);
            fs.readdir("./album/"+dirName+"/", function(err, files){
                var photoes = [];
                for(var i = 0 ; i < files.length; i++) {
                    photoes.push({name:files[i], path : "./album/"+dirName+"/" + files[i]});
                }
                fs.readFile("./detail.ejs", function(err, data){
                    var template = data.toString();
                    var dictionary = {
                        files : photoes
                    };
                    var html = ejs.render(template, dictionary)
                    //显示
                    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
                    res.end(html);
                })
            });
        }
    }

    if (req.url.indexOf("/mkdir?dirname") != -1) {
        var query = url.parse(req.url, true).query;

        fs.mkdir("./album/"+query.dirname, function(err){
            if (err)
                console.log("mkdir err");
            //显示
            res.writeHead(200,{"Content-Type":"application/json"});
            res.end('{"result":0}');
        });
    }

    //如果你的访问地址是这个，并且请求类型是post
    if(req.url == "/upload" && req.method.toLowerCase() == "post"){
        var form = new formidable.IncomingForm();
        form.on('field', function(name, value) {
            if (name == "dirname") {
                form.uploadDir = "./album/"+value;
            }
        });
        form.parse(req, function(err, fields, files){
            fs.rename(__dirname+"/"+files.upfile.path,form.uploadDir+"/"+files.upfile.name, function(err){
                res.writeHead(200, {'content-type': 'text/html;charset=UTF8'});
                res.end("成功");
            });
        });
    }

});

function printAlbum(res, directorys) {
    fs.readFile("./index.ejs", function(err, data){
        var template = data.toString();
        var dictionary = {
            dirs : directorys
        };
        var html = ejs.render(template, dictionary)
        //显示
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
        res.end(html);
    })
}

server.listen(80, "127.0.0.1");
/**
 * Created by jack on 2017/5/31.
 */

//--------------------n2_funcall.js---------------------------------
var http = require('http');
var otherfun = require('./models/otherfuns.js');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;    charset=utf-8'});
    if (request.url !== "/favicon.ico") {    //清除第2此访问
        otherfun.controller(request, response);
        otherfun.call(response);
        response.end('');
    }
}).listen(8000);

console.log('Server    running    at    http://127.0.0.1:8000/');

//---普通函数
function fun1(res) {
    console.log("fun1")
    res.write("你好,我是fun1");
}


//-----------------用函数名的字符串调用------------------
/*

var http = require('http');
var otherfun = require("./models/otherfuns.js");
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;        charset=utf-8'});
    if (request.url !== "/favicon.ico") {        //清除第2此访问
        //fun1(response);
        //-------用字符串调用对应的函数---
        funname = 'fun3';
        otherfun[funname](response);
        //otherfun['fun3'](response);
        response.end('');
    }
}).listen(8001);
console.log('Server        running        at        http://127.0.0.1:8000/');*/

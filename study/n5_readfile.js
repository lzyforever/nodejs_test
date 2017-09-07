/**
 * Created by jack on 2017/5/31.
 */

var http = require('http');
//var optfile = require('./models/optfile');
var url = require('url');
var router = require('./router');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;  charset=utf-8'});
    if (request.url !== "/favicon.ico") {  //清除第2此访问
        /*
        //读写文件
        console.log('访问');
        response.write('hello,world');
        //optfile.readfile("test.txt");
        function recall(data) {
            response.write(data);
            response.end('OK！');//不写则没有http协议尾
        }
        optfile.readfileSync("./views/login.html",recall);
        console.log('主程序执行完毕！');*/

        //改造读取路由
        pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//,'');//替换前面的/
        router[pathname](request, response);
    }
}).listen(8000);
console.log('Server  running  at  http://127.0.0.1:8000/');
/**
 * Created by jack on 2017/6/2.
 */

var http = require('http');
var url = require('url');
var router = require('./router2');
var exception = require('./models/exception');

http.createServer(function (request, response) {
    if (request.url !== "/favicon.ico") {  //清除第2此访问
        pathname = url.parse(request.url).pathname;
        pathname = pathname.replace(/\//, '');//替换掉前面的/
        try {
            //router[pathname](request,response);
            //注意：同步进行try-catch、异步在readFile当中进行try-catch处理，在此得处理会出现问题
            data = exception.expfun(0);
            response.write(data);
            response.end('');
        } catch (err) {
            console.log('exception=' + err);
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.write(err.toString());
            response.end('');
        }
        console.log("server执行完毕");
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
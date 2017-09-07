/**
 * Created by jack on 2017/6/1.
 */

var http = require('http');
var optfile = require('./models/optfile');
var url = require('url');
var router = require('./router');

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'image/jpeg'});
    if (request.url !== '/favicon.ico') {
        console.log("访问");
        var pathname = url.parse(request.url).pathname;
        console.log(pathname);
        pathname = pathname.replace(/\//,'');
        console.log(pathname);
        router[pathname](request, response);
    }
}).listen(8000);

console.log("Server running at http://127.0.0.1/8000")
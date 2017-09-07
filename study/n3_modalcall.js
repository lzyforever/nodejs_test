/**
 * Created by jack on 2017/5/31.
 */

var http = require('http');
var User = require("./models/user")
var Teacher = require("./models/teacher")

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html;        charset=utf-8'});
    if (request.url !== "/favicon.ico") {        //清除第2此访问
        user = new User(1, "张三", 20);
        user.enter();
        teacher = new Teacher(1, '李四', 30);
        teacher.teach(response);
        response.end('');
    }
}).listen(8000);
console.log('Server        running        at        http://127.0.0.1:8000/');

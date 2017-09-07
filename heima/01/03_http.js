var http = require("http");

http.createServer(function(req, res) {
	//req参数表示请求，res表示响应
	console.log("服务器接收到了请求" + req.url);
	//设置头部
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
	res.write("<h1>我是主标题</h1>");
	res.write("<h2>我是2标题</h2>");
	res.write("<h2>我是2标题</h2>");
	res.write("<h2>我是2标题</h2>");
	res.write("<h3>我是3标题</h3>");
	res.end((1+2+3).toString());//必须要写end()方法，不然小菊花就一直转，输出必须是一个字符串或是buffer
}).listen(3000,"127.0.0.1");
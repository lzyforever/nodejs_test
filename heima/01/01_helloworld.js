var http = require("http");

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-type":"text/html;charset=UTF-8"});
	res.write("helloworld!");
	res.end('');
});

server.listen(3000,"127.0.0.1");
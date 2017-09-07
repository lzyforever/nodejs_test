var http = require("http");

var url = require("url");

var server = http.createServer(function(req, res){
	var pathname = url.parse(req.url).pathname;
	var query = url.parse(req.url, true).query;
	var path = url.parse(req.url).path;
	console.log("pathname: "+pathname);
	console.log("query: ", query);
	console.log("path: "+path);
	console.log(query.abc);
	res.end();
});

server.listen(3000, "127.0.0.1");
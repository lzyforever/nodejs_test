var http = require('http');

var server = http.createServer(function(req, res){
	if (req.url !== "/favicon.ico"){
		console.log("hehe");
    	res.end("Hello World!!!!");
    }
});
server.listen("8000", "127.0.0.1");
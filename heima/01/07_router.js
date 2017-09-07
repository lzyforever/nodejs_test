var http = require("http");
var url = require("url");

var server = http.createServer(function(req, res){
	//得到url
	var userUrl = req.url;
	res.writeHead(200, {"Content-Type":"text/html;charset=UTF8"});

	//substr函数来判断此时的开头
	if (userUrl.substr(0,9) == "/student/") {
		var studentId = userUrl.substr(9);
		if (/\d{10}/.test(studentId)) {
			res.end("您要查询学生信息，ID为："+ studentId); 
		} else {
			res.end("学生学号位数不对");
		}
	} else if (userUrl.substr(0,9) == "/teacher/") {
		var teacherId = userUrl.substr(9)
		if (/\d{6}/.test(teacherId)) {
			res.end("您要查询老师信息，ID为："+ teacherId);
		} else {
			res.end("老师学号位数不对");
		}
	} else {
		res.end("请输入学号");
	}
	res.end();

});

server.listen(3000, "127.0.0.1");
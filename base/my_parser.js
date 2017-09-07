const hello = require("./hello.js")

var fs = require("fs");
fs.readFile("test.txt", function(err, logData){
	if (err) 
		throw err;

	var text = logData.toString();

	var result = {};

	var lines = text.split("\n");
	lines.forEach(function(line){
		var parts = line.split(" ");
		var letter = parts[1];
		var count = parseInt(parts[2]);

		if (!result[letter]) {
			result[letter] = 0;
		}

		result[letter] += parseInt(count)
	})

	console.log(result);

});

hello.test();
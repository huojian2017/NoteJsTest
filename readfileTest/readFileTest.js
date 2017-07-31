var fs = require("fs");

fs.readFile("readfileTest/input.txt", function (err, data) {

	if(err) {
		console.log(err.stack);
		return;
	} else {
		console.log(data.toString());
	}
});

console.log("程序执行完毕");
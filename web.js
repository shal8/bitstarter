var express = require('express');

var app = express.createServer(express.logger());

var read_html = function(filename){
  var fs = require('fs');
	var file = fs.readFileSync(filename);
	console.log("file.length " + file.length);
	console.log("file " + file);
	var buffer = new Buffer(file.length);
	buffer.write(file.toString(), "utf-8")
	console.log("buffer.toString " + buffer.toString());
	return buffer.toString();
}

app.get('/', function(request, response) {
  response.send(read_html("index.htm"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

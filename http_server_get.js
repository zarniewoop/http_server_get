var http = require('http');
var messages = [
    'Hello World',
    'From a basic node.js server',
    'take luck'];
var counter = 1;
http.createServer(function(req,res) {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.write('<html><head><title>Simple HTTP Server</title></head>');
    res.write('<body>');
    for (var idx in messages){
        res.write('\n<h1>' + messages[idx] + '</h1>');
    }
    res.write('\n<h1> count is' + counter + '</h1>');
    res.end('\n</body></html>');
    counter++;
}).listen(8080);
var http = require('http');

var server = http.createServer(function (req, res) {
 res.writeHead(200, {'Content-type': 'text/html'});
 res.write(req.url);
 res.end();
}); 
server.listen(8080, '127.0.0.1');
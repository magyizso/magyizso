var http = require('http');
var dt = require('./myfirstmodul');

var server = http.createServer(function (req, res) {
 res.writeHead(200, {'Content-type': 'text/html'});
 res.write("The date and time currently: " + dt.myDateTime());
 res.end();
}); 
server.listen(8080, '127.0.0.1');
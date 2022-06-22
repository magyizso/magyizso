var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
});
server.listen(8080, '127.0.0.1');
var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var fileName = '.' + q.pathname;
    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-type': 'text/html'});
            return res.end('404: File not found!');
            }
        res.writeHead(200, {'Content-type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

server.listen(8080, 'localhost');
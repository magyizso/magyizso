var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if (req.url == './fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            var oldPath = files.filetoupload.filepath;
            var newPath = 'D:\node' + files.filetoupload.originalFilename;
            fs.rename(oldPath, newPath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved');
                res.end();
           });
        })
    } else {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type"filename" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    }
});

server.listen(8080, 'localhost');
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function() {
    console.log('File is open!');
});
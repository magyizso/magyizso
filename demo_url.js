var url = require('url');
var adress = 'http://localhost:8080/default.htm?year=2022&month=june';
var q = url.parse(adress, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.year, qdata.month);
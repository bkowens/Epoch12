var url = require("url");
var times = 0

var jsobject = {"dict":{"key":["activities","katamarize gallery"],"array":[{"works":[{"client":"KATAMARI INC.","name":"JSON Editor","path":"jsoneditor","releaseDate":"2008/05","type":"gallery","url":"http://jsoneditor.net/","credit":[{"company":"KATAMARI INC.","url":"http://www.katamari.co.jp/","name":"GA4","role":"DESIGNER"},{"company":"KATAMARI INC.","name":"MARK","role":"JAVASCRIPT PROGRAMMER"},{"company":"KATAMARI INC.","name":"MASARU","role":"PROJECT LEADER / JAVASCRIPT PROGRAMMER"}],"color":["FF3262","0079CE","FFFF00"]}]}]}};

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
//  res.write('Your path was' + url.parse(req.url).query);
//  res.write(JSON.stringify(jsobject));
  var params = url.parse(req.url, true);
  res.write("i am located at " + params.query['xloc'] + " and " + params.query['yloc'] );
  
  res.end('Hello World' + times + 'times! \n');
  times = times + 1;
}).listen(9999);
console.log('Server running at http://127.0.0.1:899/');

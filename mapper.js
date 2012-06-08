var url = require("url");                                                                                                                                                                                                         
var http = require("http");

var Mongolian = require("mongolian")
var server = new Mongolian('localhost');
var db = server.db("test");
var systems = db.collection("systems");

console.log("About to run")
var solar = {}; 
xloc=999,yloc=999;
console.log("And it is:" + solar);

http.createServer(function (req, res) {                        
  //res.writeHead(200, { 'Content-Type': 'application/json' }); 
  var params = url.parse(req.url,true);
  var xloc = parseInt(params.query['xloc']);
  var yloc = parseInt(params.query['yloc']);

  systems.find({ location : { $near : [999,1999] , $maxDistance : 50 } }).toArray(function(err, results){console.log(results)});

  
  res.writeHead(200, {"Content-Type": "application/json","Access-Control-Allow-Origin": "*"});
  //res.end("woohoo!");
  //res.write(JSON.stringify(solar));
 
}).listen(3434);                                              


console.log('Server running at http://127.0.0.1:9999/');

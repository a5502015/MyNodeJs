var http = require("http");

http.createServer(function (request,response){
  //發送 HTTP標頭
  //HTTP : 200 : OK
  //內容類型 text/plain
  response.writeHead(200,{'Content-Type': 'text/plain'});

  //發送回應數據 
  response.end("hello world!!\n");
}).listen(8888);

console.log("server running at http://127.0.0.1:8888/");
let http =require("http");
http.createServer(function(request,response){
    response.writeHead(200,{
        "Content-Type":"text/plain"
    });
    response.end('今天是周日，今天是上课日');
}).listen(1325);
console.log('服务器启动');
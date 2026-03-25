const http = require('http');

http.createServer((req, resp)=>{
    resp.write('<h1>hi this is akhil<h1>')
    resp.end('hello how are you')
}).listen(4800)


http.createServer((req, resp)=>{
    resp.write('<h2>this is the second server<h2>')
    resp.end('this is the end of the server')
}).listen(5800)
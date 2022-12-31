const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  const q = url.parse(req.url, true);
  const filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(data);
    return res.end();
  });
}).listen(8000);

console.log('Servidor rodando em http://localhost:8000/index.html')
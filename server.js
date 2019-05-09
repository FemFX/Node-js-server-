const http = require('http');
let   server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
  res.end('')
})
server.listen(3000, '127.0.0.1')

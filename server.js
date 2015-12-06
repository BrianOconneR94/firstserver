var http = require('http')

var server = new http.createServer((req, res) => {
  res.end('hello world!')
})

server.listen(3000, 'localhost', () => {
  console.log('listening')
})

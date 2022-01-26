const http = require('http')
const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end('<h1>Acho que é melhor usar o Express né<h1>')
})

const port = 3009

server.listen(port, function() {
    console.log(`Escutando a ${port}`)
})
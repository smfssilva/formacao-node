const http = require('http')

http.createServer(( req, res )=>{
    res.end('<h1>Servidor rodando...</h1>')
}).listen(8181)
console.log("Meu servidor esta rodando...");
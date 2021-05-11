const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Bem vindo ao guia do programador</h1>')
})


app.get('/blog/:artigo?', (req, res)=>{

    let artigo = req.params.artigo

    if (artigo){
        res.send(`<h3>Artigo: ${artigo}</h3>`)
    }else{
        res.send('<h3>Bem vindo ao meu blog!: www.guiadoprogramador.com.br</h3>')
    }

    
})

app.get('/canal/youtube', (req, res) => {

    const canal = req.query['canal']
    if (canal){
        res.send(canal)
    } else {
        res.send('<h1>Bem vindo ao meu canal do youtube!</h1>')
    }
})


app.get('/ola/:nome', (req, res) => {
    let nome = req.params.nome
    res.send(`<h1>Ola ${nome}!</h1>`)
})


app.listen(4000, (erro) => {
    if (erro) {
        console.log('Ocorreu um erro!');
    } else {
        console.log('Servidor iniciado com sucesso!');
    }
})
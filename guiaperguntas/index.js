const express = require('express')
const app = express()

const connection = require(__dirname + '/database/database');
const Pergunta = require(__dirname + '/database/Pergunta')
const Resposta = require(__dirname + '/database/Resposta')

connection.authenticate()
    .then(() => {
        console.log('Conexão feita com o banco de dados');
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());

// rota principa
app.get('/', (req, res) => {
    Pergunta.findAll({ raw: true, order: [['id', 'desc']] }).then(perguntas => {
        console.log(perguntas);
        res.render('index', {
            perguntas: perguntas
        })
    })
})


// rota de pergunta
app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})


app.post('/salvarpergunta', (req, res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao
    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    })
})

app.get('/pergunta/:id', (req, res) => {
    let id = req.params.id
    Pergunta.findOne({
        where: {
            id: id
        }
    }).then(pergunta => {
        if (pergunta != undefined) {

            Resposta.findAll({order: [['id', 'desc']],
                where: {id_pergunta: id}
            }).then(respostas => {
                res.render('pergunta', 
                {
                    pergunta:pergunta,
                    respostas: respostas
                })
            })
        } else {
            res.redirect('/')
        }
    })
})


app.post('/responder', (req, res)=>{
    let corpo = req.body.corpo
    let id_pergunta = req.body.id_pergunta 
    console.log(id_pergunta);    

    Resposta.create({
        corpo: corpo,
        id_pergunta: id_pergunta
    }).then(()=>{
        res.redirect('/pergunta/'+id_pergunta)
    })   
})

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso!");
})
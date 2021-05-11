const express = require('express')
const app = express()
const session = require('express-session')
const connection = require('./database/database')

const categoriesController = require('./categories/categiriesController')
const articlesController = require('./articles/articleController')
const userController = require('./user/UserController')

const Article = require('./articles/Article')
const Category = require('./categories/Category')
const User = require('./user/User')

// configurando a view engine
app.set('view engine', 'ejs')

// configurando sessoes
app.use(session({
    secret: "qualquercoisa", cookie: {maxAge: 30000000}
}))

// configurando bodyparser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//configurando arquivos staticos
app.use(express.static('./public'))


// Authentication database
connection
    .authenticate()
    .then(() => {
        console.log('Connetion successfuly!');
    }).catch((error) => {
        console.log(error);
    })


app.use('/', categoriesController)
app.use('/', articlesController)
app.use('/', userController)


// app.get('/session', (req, res)=>{
//     req.session.treinamento = 'Formação Node.js'
//     req.session.ano = 2019
//     req.session.email = 'smfssilva@yahoo.com'
//     req.session.user = {
//         username: 'smfssilva',
//         email: 'smfssilva@yahoo.com',
//         id: 10
//     }
//     res.send('Sessão gerada!')
// })

// app.get('/leitura', (req, res)=>{
//     res.json({
//         treinamento: req.session.treinamento,
//         ano: req.session.ano,
//         email: req.session.email,
//         user: req.session.user
//     })
// })

app.get('/', (req, res) => {
    Article.findAll({
        order: [
            ['id', 'desc']
        ],
        limit: 4
    }).then(articles => {
        Category.findAll().then(categories => {
            res.render('index', {articles: articles, categories: categories})
        })
    })
})

app.get('/:slug', (req, res)=>{
    let slug = req.params.slug
    Article.findOne({
        where: {
            slug: slug
        }
    }).then(articles => {
        if (articles != undefined){
            Category.findAll().then(categories => {
                res.render('article', {articles: articles, categories: categories})
            })
        }else{
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/')
    })
})

app.get('/category/:slug', (req, res)=>{
    let slug = req.params.slug
    Category.findOne({
        where: {
            slug: slug
        },
        include: [{model: Article}]
    }).then(category => {
        if (category != undefined) {
            Category.findAll().then(categories => {
                res.render('index', {articles: category.articles, categories: categories})
            })
        }else{
            res.redirect('/')
        }
    }).catch(err => {
        res.redirect('/')
    })
})

app.listen(8080, () => {
    console.log('O servidor está rodando!');
})
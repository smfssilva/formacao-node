const path = require('path')
const database = require(path.join(__dirname + '/database.js'))

/*
const dados = [
    {
        nome: "Call of Durty 2",
        preco: 89.99    
    },{
        nome: "GTA",
        preco: 90    
    },{
        nome: "Wow",
        preco: 120.99    
    }
    
]

query = database.insert(dados).into("games")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
*/

// database.select("*").table("games")
/*
database.select(["id", "preco"]).table("games")
    .then(data => {
        console.log(data);    
    })
    .catch(err => {
        console.log(err);
    })
*/

/*
database.insert({nome: "Mists of noyah", preco: 25}).into("games")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
*/

/*
database.select(["id", "nome", "preco"])
    .table("games")
    .whereRaw("id = 2 or preco > 60")
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.log(err);
    })
*/

/*
database.raw("Select * from games")
    .then(data => {
        console.log(data[0][0].nome);
    })
    .catch(err => {
        console.log(err);
    })
*/

database.where({id: 3}).delete().table("games")
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })
const express = require("express")
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const JWTSecret = "fhjaslfjdsklçfjklçsfjkdasfjkçsdj";

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


function auth(req, res, next){

    const authToken = req.headers['authorization']
    
    if (authToken != undefined){
        const token = authToken.split(' ')[1]

        jwt.verify(token, JWTSecret, (err, data)=>{
            if (err){
                res.status(401);
                res.json({err: "Token inválido"});
            }else{
                // console.log(data);
                req.token = token;
                req.loggedUser = {id: data.id, email: data.email, name: data.name}
                next();
            }
        })
    }else{
        res.status(401)
        res.json({err: "Token inválido"})
    }
    

}



const DB = {
    games: [
        {
            id: 23,
            title: "Call of duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        }
    ],
    users: [
        {
            id: 1,
            name: "Sivanilson",
            email: "smfssilva@yahoo.com",
            password: "acs985862"
        },
        {
            id: 2,
            name: "Maciel",
            email: "maciel@yahoo.com",
            password: "123123"
        }
    ]
}


app.get("/games", auth, (req, res) => {


    const HATEOAS = [
        {
            href: "http://localhost:8080/game/0",
            method: "DELETE",
            rel: "delete_game"
        },
        {
            href: "http://localhost:8080/game/0",
            method: "GET",
            rel: "get_game"
        },
        {
            href: "http://localhost:8080/auth",
            method: "POST",
            rel: "login"
        }
    ]

    res.statusCode = 200
    res.json({user: req.loggedUser, games: DB.games, _links: HATEOAS})
})

app.get("/game/:id", auth, (req, res) => {

    if (isNaN(req.params.id)) {
        res.send(400)
    } else {
        let id = parseInt(req.params.id)

        const HATEOAS = [
            {
                href: "http://localhost:8080/game/"+id,
                method: "DELETE",
                rel: "delete_game"
            },
            {
                href: "http://localhost:8080/game/"+id,
                method: "PUT",
                rel: "edit_game"
            },
            {
                href: "http://localhost:8080/game/"+id,
                method: "GET",
                rel: "get_game"
            },
            {
                href: "http://localhost:8080/games",
                method: "GET",
                rel: "get_all_games"
            }
        ]

        let game = DB.games.find(g => g.id == id)

        if (game != undefined) {
            res.statusCode = 200
            res.json({game, _links: HATEOAS})
        } else {
            res.sendStatus(404)
        }

    }
})

app.post("/game", (req, res) => {
    let { title, price, year } = req.body;
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    })

    res.sendStatus(200)
})

app.delete("/game/:id", auth, (req, res) => {
    if (isNaN(req.params.id)) {
        res.send(400)
    } else {
        let id = parseInt(req.params.id)

        let index = DB.games.findIndex(g => g.id == id)
        if (index == -1) {
            res.send(404)
        } else {
            DB.games.splice(index, 1)
            res.sendStatus(200)
        }


    }
})

app.put("/game/:id", auth, (req, res) => {
    if (isNaN(req.params.id)) {
        res.send(400)
    } else {
        let id = parseInt(req.params.id)

        let game = DB.games.find(g => g.id == id)

        if (game != undefined) {
            let { title, price, year } = req.body;

            if (title != undefined) {
                game.title = title
            }

            if (price != undefined) {
                game.price = price
            }

            if (year != undefined) {
                game.year = year
            }

            res.sendStatus(200)

        } else {
            res.sendStatus(404)
        }

    }
});

app.post("/auth", (req, res) => {

    var {email, password} = req.body;

    // console.log(req.body);

    if (email != undefined) {
        let user = DB.users.find(u => u.email == email)

        if (user != undefined) {
            if (user.password == password) {

                jwt.sign({id: user.id, email: user.email, name: user.name}, JWTSecret,{expiresIn:'48h'},(err, token)=>{
                    if (err) {
                        res.status(400)
                        res.json({err: "Falha interna"})
                    }else{
                        res.status(200)
                        res.json({token: token})
                    }
                })
            } else {
                res.status(401)
                res.json({ err: "Credenciais inválido" })
            }
        } else {
            res.status(404);
            res.json({ err: "O e-mail enviado não existe" })
        }
    } else {
        res.status(400)
        res.json({ err: "O E-mail é inválido" })
    }

})

app.listen(8080, () => {
    console.log("API RODANDO!");
})
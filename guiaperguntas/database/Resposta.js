const Sequelize = require('sequelize')
const connection = require(__dirname + '/database')


const Respostas = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    id_pergunta: {
        type: Sequelize.INTEGER,
        allowNull: false
    }

})

Respostas.sync({force: false})

module.exports = Respostas